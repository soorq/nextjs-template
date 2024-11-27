import crypto from 'crypto';

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	compress: true,
	poweredByHeader: false,
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	experimental: {
		optimizeCss: true,
		turbo: {
			loaders: {
				'.svg': ['@svgr/webpack'],
			},
		},
	},
	webpack: (config, { dev, isServer }) => {
		// Split chunks optimization
		if (!dev && !isServer) {
			config.optimization.splitChunks = {
				chunks: 'all',
				minSize: 20000,
				maxSize: 244000,
				minChunks: 1,
				maxAsyncRequests: 30,
				maxInitialRequests: 30,
				cacheGroups: {
					default: false,
					vendors: false,
					framework: {
						chunks: 'all',
						name: 'framework',
						test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
						priority: 40,
						enforce: true,
					},
					lib: {
						test(module) {
							return (
								module.size() > 160000 &&
								/node_modules[/\\]/.test(module.identifier())
							);
						},
						name(module) {
							const hash = crypto.createHash('sha1');
							hash.update(module.identifier());
							return hash.digest('hex').substring(0, 8);
						},
						priority: 30,
						minChunks: 1,
						reuseExistingChunk: true,
					},
					commons: {
						name: 'commons',
						minChunks: 2,
						priority: 20,
					},
					shared: {
						name(module, chunks) {
							return (
								crypto
									.createHash('sha1')
									.update(chunks.map(c => c.name).join('_'))
									.digest('hex') + '_shared'
							);
						},
						priority: 10,
						minChunks: 2,
						reuseExistingChunk: true,
					},
				},
			};
		}
		return config;
	},
};

export default nextConfig;

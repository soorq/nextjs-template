/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: {
		cssnano: {
			preset: [
				'default',
				{
					discardComments: {
						removeAll: true,
					},
				},
			],
		},
		autoprefixer: {
			flexbox: 'no-2009',
			stage: 3,
			overrideBrowserslist: [
				'last 3 version',
				'Chrome >= 35',
				'Firefox >= 38',
				'Edge >= 10',
				'Explorer >= 10',
				'ie >= 10',
				'iOS >= 8',
				'Safari >= 8',
				'Android 2.3',
				'Android >= 4',
				'Opera >= 12',
			],
		},
	},
};

export default config;

type TPropsImageLoader = {
	src: string;
	width: number;
	quality: number;
};

export const imageLoader = ({ src, width, quality }: TPropsImageLoader) => {
	if (src.startsWith('data:') || src.startsWith('blob:')) return src;
	return `https://your-image-cdn.com/${src}?w=${width}&q=${quality || 75}`;
};

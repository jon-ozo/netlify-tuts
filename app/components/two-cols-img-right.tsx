interface componentProps {
	title: string;
	paragraph: string;
	img: string;
	alt: string;
	btn: string;
}

export default function TwoColsImgRight({
	title,
	paragraph,
	img,
	alt,
	btn
}: componentProps) {
	return (
		<article className='article-padd grid-display order-left-to-right insights'>
			<header>
				<h3 className='slide-up'>{title}</h3>
				<p className='header-sub-text slide-up'>{paragraph}</p>
				<a className="btn slide-up" href={btn}>Read more</a>
			</header>
			<figure>
				<img
					src={img}
					alt={alt}
					className='img-style'
				/>
			</figure>
		</article>
	);
}

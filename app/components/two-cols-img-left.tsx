interface componentProps {
	title: string;
	paragraph: string;
	img: string;
}

export default function TwoColsImgLeft({
	title,
	paragraph,
	img,
}: componentProps) {
	return (
		<article className='article-padd order-right-to-left'>
			<header>
				<h2 className='slide-up'>
					{title}
				</h2>
				<p className='header-sub-text slide-up'>{paragraph}</p>
			</header>
			<figure>
				<img
					src={img}
					alt={img}
					className='img-style'
				/>
			</figure>
		</article>
	);
}

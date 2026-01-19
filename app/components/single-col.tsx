interface componentProps {
	title: string;
	paragraph: string;
}

export default function SingleCol({ title, paragraph }: componentProps) {
	return (
		<article className='container flex-display-column'>
			<header>
				<h2 className='slide-up'>{title}</h2>
				<p className='header-sub-text slide-up'>{paragraph}</p>
			</header>
		</article>
	);
}

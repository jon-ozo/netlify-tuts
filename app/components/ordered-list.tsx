interface OlProps {
	sectionTitle: string;
	children: React.ReactNode;
	className?: string;
}

export default function OrderedList({
	sectionTitle,
	children,
	className,
}: OlProps) {
	const newClassName = `${className} container margin-top flex-display-column row-gap-s`;

	return (
		<article className='ordered-list-wrapper flex-display-column row-gap-s'>
			<div className='container'>
				<header className='container'>
					<h2 className='slide-up'>{sectionTitle}</h2>
				</header>
				<ol className={newClassName}>{children}</ol>
			</div>
		</article>
	);
}

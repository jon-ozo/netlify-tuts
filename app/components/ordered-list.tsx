interface OlProps {
	sectionTitle: string;
	children: React.ReactNode;
	parentClassName: string;
	className?: string;
}

export default function OrderedList({
	sectionTitle,
	children,
	parentClassName,
	className,
}: OlProps) {
	const newParentClassName = `${parentClassName} flex-display-column row-gap-s`;
	const newClassName = `${className} container margin-top flex-display-column row-gap-s`;

	return (
		<article className={newParentClassName}>
			<div className='container'>
				<header className='container'>
					<h2 className='slide-up'>{sectionTitle}</h2>
				</header>
				<ol className={newClassName}>{children}</ol>
			</div>
		</article>
	);
}

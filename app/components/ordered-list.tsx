interface OlProps {
	sectionTitle: string;
	lists?: Array<{ title: string; text: string }>;
}

export default function OrderedList({ sectionTitle, lists }: OlProps) {
	return (
		<article className='ordered-list-wrapper flex-display-column row-gap-s'>
			<div className='container'>
				<header className='container'>
					<h2 className='slide-up'>{sectionTitle}</h2>
				</header>
				<ol className='container margin-top ordered-list flex-display-column row-gap-s'>
					{lists?.map((list) => (
						<li key={list.title}>
							<h3 className='slide-up'>{list.title}</h3>
							<p className='slide-up'>{list.text}</p>
						</li>
					))}
				</ol>
			</div>
		</article>
	);
}

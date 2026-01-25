interface componentProps {
	children: React.ReactNode;
	paragraph: string;
	marketingLists: Array<{ bigText: string; smallText: string }>;
}

export default function SingleCol({
	children,
	paragraph,
	marketingLists,
}: componentProps) {
	return (
		<article>
			<div className='container flex-display-column'>
				<header>
					{children}
					<p className='zoom-out animation-timeline header-sub-text'>
						{paragraph}
					</p>
					<ul className='grid-display marketing-stats'>
						{marketingLists.map((list) => (
							<li key={list.bigText}>
								<span className='big-text zoom-out animation-timeline'>
									{list.bigText}
								</span>
								<br />
								<span className='small-text zoom-out animation-timeline'>
									{list.smallText}
								</span>
							</li>
						))}
					</ul>
				</header>
			</div>
		</article>
	);
}

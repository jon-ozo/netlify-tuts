import { NavLink } from 'react-router';

interface componentProps {
	id?: string;
	headerText: string;
	spanText?: string;
	stickyHeaderContd?: string;
	paragraph: string;
	img?: string;
	btn?: boolean;
	contents?: Array<any>;
}

export default function TwoColumnsSticky({
	id,
	headerText,
	spanText,
	stickyHeaderContd,
	paragraph,
	img,
	btn,
	contents,
}: componentProps) {
	return (
		<article
			id={id}
			className='article-padd grid-display  parent-blur'>
			<header className='sticky-header'>
				<h2 className='slide-up'>
					{headerText} <span>{spanText}</span> {stickyHeaderContd}
				</h2>
				<p className='slide-up'>{paragraph}</p>
				{btn && (
					<NavLink
						to='/contact'
						className='btn slide-up'>
						Get Started Here
					</NavLink>
				)}
			</header>
			{!contents && (
				<figure className='sticky-img'>
					<img
						src={img}
						alt='pathway'
					/>
				</figure>
			)}
			{contents && (
				<ul>
					{contents.map((content) => (
						<li key={content.title}>
							<details>
								<summary>{content.title}</summary>
								<p className='slide-up'>{content.paragraph}</p>
							</details>
						</li>
					))}
				</ul>
			)}
		</article>
	);
}

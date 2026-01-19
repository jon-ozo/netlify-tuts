import { Link, redirect } from 'react-router';

interface componentProps {
	headerText: string;
	spanText: string;
	topText: string;
	contents: {
		mainSection: {
			id: number;
			header: string;
			subContentOneTopText: string;
			paragraph: string;
			paragraphSpan: string;
			paragraphCont: string;
		};
		subContentOne: {
			id: number;
			header: string;
			subContentTwoTopText: string;
			paragraph: string;
			paragraphSpan: string;
			paragraphCont: string;
		};
		subContentTwo: {
			id: number;
			header: string;
			subContentThreeTopText: string;
			paragraph: string;
			paragraphSpan: string;
		};
	};
	img: { imgOne: string; imgTwo: string; imgThree: string };
	href: { hrefOne: string; hrefTwo: string; hrefThree: string };
}

export default function BentoGrid({
	headerText,
	spanText,
	topText,
	contents,
	img,
	href,
}: componentProps) {
	const { mainSection, subContentOne, subContentTwo } = contents;

	function handleClick(route: string) {
		redirect(route);
	}

	return (
		<article className='parent-blur'>
			<header>
				<p className='small header-top-text_center slide-up'>{topText}</p>
				<h2 className='center-heading slide-up'>
					{headerText} {''}
					<span>{spanText}</span>
				</h2>
			</header>
			<ul className='bento-grid'>
				<li key={mainSection.id}>
					<Link to={href.hrefOne}>
						<div className='grid-display'>
							<header>
								<p className='small header-top-text slide-up'>
									{mainSection.subContentOneTopText}
								</p>
								<h3 className='slide-up'>{mainSection.header}</h3>
								<p className='slide-up'>
									{mainSection.paragraph}{' '}
									<span className='bento-span'>
										{mainSection.paragraphSpan}
									</span>{' '}
									{mainSection.paragraphCont}
								</p>
								<button
									onClick={() => handleClick(href.hrefOne)}
									className='btn slide-up btn-visible'>
									Discover More
								</button>
							</header>
							<figure>
								<img
									src={img.imgOne}
									alt={img.imgOne}
									className='slide-up'
								/>
							</figure>
						</div>
					</Link>
				</li>
				<li key={subContentOne.id}>
					<Link to={href.hrefTwo}>
						<div className='flex-row'>
							<header>
								<p className='small header-top-text slide-up'>
									{subContentOne.subContentTwoTopText}
								</p>
								<h3 className='slide-up'>{subContentOne.header}</h3>
								<p className='slide-up'>
									{subContentOne.paragraph}{' '}
									<span className='bento-span'>
										{subContentOne.paragraphSpan}
									</span>{' '}
									{subContentOne.paragraphCont}
								</p>
								<button
									onClick={() => handleClick(href.hrefTwo)}
									className='btn slide-up btn-visible'>
									Discover More
								</button>
							</header>
							<figure>
								<img
									src={img.imgTwo}
									alt={img.imgTwo}
									className='slide-up'
								/>
							</figure>
						</div>
					</Link>
				</li>
				<li key={subContentTwo.id}>
					<Link to={href.hrefThree}>
						<div className='flex-row'>
							<header>
								<p className='small header-top-text slide-up'>
									{subContentTwo.subContentThreeTopText}
								</p>
								<h3 className='slide-up'>{subContentTwo.header}</h3>
								<p className='slide-up'>
									{subContentTwo.paragraph}{' '}
									<span className='bento-span'>
										{subContentTwo.paragraphSpan}
									</span>
								</p>
								<p>&nbsp;</p>
								<button
									className='btn slide-up btn-visible'
									onClick={() => handleClick(href.hrefThree)}>
									Discover More
								</button>
							</header>
							<figure>
								<img
									width={1000}
									height={666}
									src={img.imgThree}
									alt={img.imgThree}
									className='slide-up'
								/>
							</figure>
						</div>
					</Link>
				</li>
			</ul>
			{/* <ul className='bento-grid grid-display'>
				<li key={mainSection.id}>
					<Link to={href.hrefOne}>
						<div className='grid-display'>
							<header>
								<p className='small header-top-text slide-up'>
									{mainSection.subContentOneTopText}
								</p>
								<h3 className='slide-up'>{mainSection.header}</h3>
								<p className='slide-up'>
									{mainSection.paragraph}{' '}
									<span className='bento-span'>
										{mainSection.paragraphSpan}
									</span>{' '}
									{mainSection.paragraphCont}
								</p>
								<button
									onClick={() => handleClick(href.hrefOne)}
									className='submit btn-visible'>
									Discover
								</button>
							</header>
							<figure>
								<img
									src={img.imgOne}
									alt={img.imgOne}
									className='slide-up'
								/>
							</figure>
						</div>
					</Link>
				</li>
				<li key={subContentOne.id}>
					<Link to={href.hrefTwo}>
						<div className='grid-row'>
							<header>
								<p className='small header-top-text slide-up'>
									{subContentOne.subContentTwoTopText}
								</p>
								<h3 className='slide-up'>{subContentOne.header}</h3>
								<p className='slide-up'>
									{subContentOne.paragraph}{' '}
									<span className='bento-span'>
										{subContentOne.paragraphSpan}
									</span>{' '}
									{subContentOne.paragraphCont}
								</p>
								<button
									onClick={() => handleClick(href.hrefTwo)}
									className='submit btn-visible'>
									Discover
								</button>
							</header>
							<figure>
								<img
									src={img.imgTwo}
									alt={img.imgTwo}
									className='slide-up'
								/>
							</figure>
						</div>
					</Link>
				</li>
				<li key={subContentTwo.id}>
					<Link to={href.hrefThree}>
						<div className='grid-row'>
							<header>
								<p className='small header-top-text slide-up'>
									{subContentTwo.subContentThreeTopText}
								</p>
								<h3 className='slide-up'>{subContentTwo.header}</h3>
								<p className='slide-up'>
									{subContentTwo.paragraph}{' '}
									<span className='bento-span'>
										{subContentTwo.paragraphSpan}
									</span>
								</p>
								<p>&nbsp;</p>
								<button
									className='submit btn-visible'
									onClick={() => handleClick(href.hrefThree)}>
									Discover
								</button>
							</header>
							<figure>
								<img
									width={1000}
									height={666}
									src={img.imgThree}
									alt={img.imgThree}
									className='slide-up'
								/>
							</figure>
						</div>
					</Link>
				</li>
			</ul> */}
		</article>
	);
}

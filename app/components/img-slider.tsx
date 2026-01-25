import { arrOfBrandLogo } from '~/utils/constants';

interface ImgProps {
	imgSrc: string;
	altSrc: string;
	width: string;
	height: string;
}

export function Img({ imgSrc, altSrc, width, height }: ImgProps) {
	return (
		<>
			<img
				src={imgSrc}
				alt={altSrc}
				width={width}
				height={height}
			/>
		</>
	);
}

export default function ImgSlider() {
	return (
		<section className='coverage container'>
			<header className='container ecosystem-container'>
				<h2 className='center-align-title zoom-out animation-timeline'>
					The Ecosystem We Built Upon
				</h2>
			</header>
			<ul className='slider slider-group'>
				{arrOfBrandLogo.map((logo) => (
					<li
						className='zoom-out animation-timeline'
						key={logo.alt}
					>
						<Img
							imgSrc={logo.src}
							altSrc={logo.alt}
							width='100'
							height='100'
						/>
					</li>
				))}
			</ul>
		</section>
	);
}

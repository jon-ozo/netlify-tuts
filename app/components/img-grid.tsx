import cityEurope from '~/assets/img/coverage_europe.jpg';
import cityAmerica from '~/assets/img/coverage_north-america.jpg';
import cityMiddleEast from '~/assets/img/coverage_middle-east-and-asia.jpg';
import cityAfrica from '~/assets/img/coverage_africa.jpg';

interface ImgProps {
	imgSrc: string;
	altSrc: string;
	caption: string;
	width: string;
	height: string;
}

export function Img({ imgSrc, altSrc, caption, width, height }: ImgProps) {
	return (
		<li>
			<figure className='zoom-out animation-timeline'>
				<img
					src={imgSrc}
					alt={altSrc}
					width={width}
					height={height}
				/>
				<figcaption>{caption}</figcaption>
			</figure>
		</li>
	);
}

export default function ImgGrid() {
	return (
		<section className='container img-grid'>
			<header>
				<h2 className='center-align-title zoom-out animation-timeline'>
					Our Coverage and Network
				</h2>
			</header>
			<ul className='margin-top'>
				<Img
					imgSrc={cityEurope}
					altSrc='A City in Europe.'
					caption='Europe'
					width='800'
					height='400'
				/>
				<Img
					imgSrc={cityAmerica}
					altSrc='City of New York.'
					caption='North America'
					width='800'
					height='400'
				/>
				<Img
					imgSrc={cityMiddleEast}
					altSrc='A City in Middle East Asia.'
					caption='Middle East & Asia'
					width='800'
					height='400'
				/>
				<Img
					imgSrc={cityAfrica}
					altSrc='City of Lagos.'
					caption='Africa'
					width='800'
					height='400'
				/>
			</ul>
		</section>
	);
}

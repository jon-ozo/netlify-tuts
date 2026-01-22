import { Link } from 'react-router';

interface HeroSectionProps {
	children: React.ReactNode;
	heroParagraph: string;
	video: string;
	linkText: string;
	link: string;
}

export default function HeroSection({
	children,
	heroParagraph,
	video,
	linkText,
	link,
}: HeroSectionProps) {
	return (
		<header className='hero-wrapper'>
			<video
				id='video'
				width='100%'
				height='100%'
				autoPlay
				muted
				playsInline
				loop
			>
				<source
					src={video}
					type='video/mp4'
				/>
				Your browser does not support HTML video.
			</video>
			<div className='overlay'></div>
			<section className='hero-text-wrapper'>
				{children}
				<p className='h1-sub-text slide-up'>{heroParagraph}</p>

				<Link
					to={link}
					className='pri-btn'
				>
					{linkText}
					<svg
						aria-hidden='true'
						clipRule='evenodd'
						fillRule='evenodd'
						strokeLinejoin='round'
						strokeMiterlimit='2'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='m18.787 9.473s-4.505-4.502-6.259-6.255c-.147-.146-.339-.22-.53-.22-.192 0-.384.074-.531.22-1.753 1.753-6.256 6.252-6.256 6.252-.147.147-.219.339-.217.532.001.19.075.38.221.525.292.293.766.295 1.056.004l4.977-4.976v14.692c0 .414.336.75.75.75.413 0 .75-.336.75-.75v-14.692l4.978 4.978c.289.29.762.287 1.055-.006.145-.145.219-.335.221-.525.002-.192-.07-.384-.215-.529z'
							fillRule='nonzero'
						/>
					</svg>
					{/* <svg
						aria-hidden='true'
						width='24'
						height='24'
						xmlns='http://www.w3.org/2000/svg'
						fillRule='evenodd'
						clipRule='evenodd'
						className='nav-arrow'
					>
						<path d='M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z' />
					</svg> */}
				</Link>
			</section>
		</header>
	);
}

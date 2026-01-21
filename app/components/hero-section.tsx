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
				</Link>
			</section>
		</header>
	);
}

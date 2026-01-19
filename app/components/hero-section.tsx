interface HeroSectionProps {
	heroHeader: string;
	heroParagraph: string;
  video: string;
}

export default function HeroSection({
	heroHeader,
	heroParagraph,
  video,
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
						loop>
						<source
							src={video}
							type='video/mp4'
						/>
						Your browser does not support HTML video.
					</video>
			<div className='overlay'></div>
			<section className='hero-text-wrapper'>
				<h1 className='flip-down'>{heroHeader}</h1>
				<p className='h1-sub-text slide-up'>{heroParagraph}</p>
			</section>
		</header>
	);
}

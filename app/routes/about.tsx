import { Link } from 'react-router';
import mdImg from '~/assets/img/md.jpg';
import aboutVideo from '~/assets/about-video.mp4';
import FooterCta from '~/components/footer-cta';
import HeroSection from '~/components/hero-section';

export default function About() {
	const coreValues = [
		{
			svg: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'>
					<path d='M13.931 10.245l2.021-2.042-2.778-.403-1.223-2.653-1.222 2.653-2.778.402 2.021 2.042-.492 2.903 2.471-1.391 2.472 1.391-.492-2.902zm-9.481 4.518c-.866-1.382-1.374-3.012-1.374-4.763 0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.792-.53 3.458-1.433 4.861-.607-.31-1.228-.585-1.862-.819.812-1.143 1.295-2.536 1.295-4.042 0-3.86-3.141-7-7-7s-7 3.14-7 7c0 1.476.462 2.844 1.244 3.974-.636.225-1.26.488-1.87.789zm15.307 2.45l-2.334 3.322c-1.603-.924-3.448-1.464-5.423-1.473-1.975.009-3.82.549-5.423 1.473l-2.334-3.322c2.266-1.386 4.912-2.202 7.757-2.211 2.845.009 5.491.825 7.757 2.211zm4.243 2.787h-2.359l-.566 3c-.613-1.012-1.388-1.912-2.277-2.68l2.343-3.335c1.088.879 2.052 1.848 2.859 3.015zm-21.14-3.015l2.343 3.335c-.89.769-1.664 1.668-2.277 2.68l-.566-3h-2.36c.807-1.167 1.771-2.136 2.86-3.015z' />
				</svg>
			),
			h3: 'Excellence',
			paragraph:
				'We purse excellence in everything we do. Our clients deserve the highest quality of insight, execution and support.',
		},
		{
			svg: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'>
					<path d='M21.169 19.754c.522-.79.831-1.735.831-2.754 0-2.761-2.238-5-5-5s-5 2.239-5 5 2.238 5 5 5c1.019 0 1.964-.309 2.755-.832l2.831 2.832 1.414-1.414-2.831-2.832zm-4.169.246c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm-4.89 2h-7.11l2.599-3h2.696c.345 1.152.976 2.18 1.815 3zm-2.11-5h-10v-17h22v12.11c-.574-.586-1.251-1.068-2-1.425v-8.685h-18v13h8.295c-.19.634-.295 1.305-.295 2zm-4-4h-2v-6h2v6zm3 0h-2v-9h2v9zm3 0h-2v-4h2v4z' />
				</svg>
			),
			h3: 'Data-driven Insights',
			paragraph:
				'We take a data-driven approach to advisory, ensuring that our deliverables are based on robust analysis and measurable outcomes.',
		},
		{
			svg: (
				<svg
					width='24'
					height='24'
					xmlns='http://www.w3.org/2000/svg'
					fillRule='evenodd'
					clipRule='evenodd'>
					<path d='M6.72 20.492c1.532.956 3.342 1.508 5.28 1.508 1.934 0 3.741-.55 5.272-1.503l1.24 1.582c-1.876 1.215-4.112 1.921-6.512 1.921-2.403 0-4.642-.708-6.52-1.926l1.24-1.582zm6.405-.992l-.594.391c-.077.069-.19.109-.307.109h-.447c-.118 0-.231-.04-.308-.109l-.594-.391h2.25zm10.875-.5h-6c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.883.586 1.414zm-18 0h-6c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.883.586 1.414zm7.146-.5c.138 0 .25.112.25.25s-.112.25-.25.25h-2.279c-.138 0-.25-.112-.25-.25s.112-.25.25-.25h2.279zm.247-.5c0-2.002 1.607-2.83 1.607-4.614 0-1.86-1.501-2.886-3.001-2.886s-2.999 1.024-2.999 2.886c0 1.784 1.607 2.639 1.607 4.614h2.786zm7.607-6c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm-18 0c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm12.87 2.385l1.349.612-.413.911-1.298-.588c.15-.3.275-.608.362-.935zm-7.739 0c.087.332.208.631.36.935l-1.296.588-.414-.911 1.35-.612zm9.369-1.885v1h-1.501c.01-.335-.02-.672-.093-1h1.594zm-9.406 0c-.072.327-.102.663-.092.997v.003h-1.502v-1h1.594zm6.928-1.714l1.242-.882.579.816-1.252.888c-.146-.291-.335-.566-.569-.822zm-6.044-.001c-.23.252-.418.525-.569.823l-1.251-.888.578-.816 1.242.881zm4.435-1.046l.663-1.345.897.443-.664 1.345c-.278-.184-.58-.332-.896-.443zm-2.826-.001c-.315.11-.618.258-.897.442l-.663-1.343.897-.443.663 1.344zm-2.587-9.054v2.149c-2.938 1.285-5.141 3.942-5.798 7.158l-2.034-.003c.732-4.328 3.785-7.872 7.832-9.304zm8 0c4.047 1.432 7.1 4.976 7.832 9.304l-2.034.003c-.657-3.216-2.86-5.873-5.798-7.158v-2.149zm-3.5 8.846c-.334-.039-.654-.041-1-.001v-1.529h1v1.53zm2.5-2.53h-6c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.884.586 1.414zm-3-7c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25z' />
				</svg>
			),
			h3: 'Innovation',
			paragraph:
				'We continuously seek better ways to solve problems and capture opportunities, helping our clients to future-proof their strategies.',
		},
		{
			svg: (
				<svg
					width='24'
					height='24'
					xmlns='http://www.w3.org/2000/svg'
					fillRule='evenodd'
					clipRule='evenodd'>
					<path d='M20.624 22.474l-1.624-.869-1.625.869.324-1.813-1.328-1.277 1.825-.252.804-1.658.804 1.658 1.825.252-1.329 1.277.324 1.813zm-7 0l-1.624-.869-1.625.869.325-1.813-1.329-1.277 1.825-.252.804-1.658.804 1.658 1.825.252-1.329 1.277.324 1.813zm-7 0l-1.624-.869-1.625.869.325-1.813-1.329-1.277 1.825-.252.804-1.658.804 1.658 1.825.252-1.329 1.277.324 1.813zm16.376-6.5h-22c-.552 0-1 .447-1 1v6c0 .553.448 1 1 1h22c.553 0 1-.447 1-1v-6c0-.553-.447-1-1-1zm-22.998-1h4.998c.008-1.214-.001-2.289 0-3.013.005-3.993 1.749-3.116 1.749-6.663 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.62 1.359-1.91 1.657-1.118.258-1.192 1.047-1.192 1.993l.002 3.221zm22.806-5.214c-1.29-.298-2.491-.558-1.91-1.657 1.77-3.342.47-5.129-1.399-5.129-1.265 0-2.248.817-2.248 2.324 0 3.324 1.719 2.704 1.749 6.676.008.972-.009 1.311 0 3h4.998l.002-3.221c0-.946-.074-1.735-1.192-1.993zm-4.811 5.214h-11.995l-.002-3.126c0-1.258.1-2.482 1.588-2.826 1.684-.389 3.344-.736 2.545-2.209-2.366-4.364-.674-6.839 1.866-6.839 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.569 1.589 2.829l-.002 3.123z' />
				</svg>
			),
			h3: 'Leadership',
			paragraph:
				'We aspire to be trusted advisors who inspire action and drive transformation across the markets we serve',
		},
	];

	const hero = {
		heroHeader: 'We provide',
		heroHeaderSpan: 'a pathway',
		heroSpan: 'ABOUT US',
		heroHeaderCont:
			'to business resilience and value creation with our expertise',
	};

	return (
		<>
			<HeroSection
				{...hero}
				video={aboutVideo}
			/>
			<div className='home-bg'>
				<article className='rows parent-blur'>
					<header>
						<h2 className='slide-up'>Who We Are</h2>
						<p className='slide-up'>
							<span>Advian Partners</span> is an independent advisory firm that
							supports private markets in creating value while navigating the
							evolving landscape of sustainability. With deep cross-sector
							expertise across ESG strategy, risk assessment and research, we
							partner with venture capital firms, private equity firms,
							institutional investors, and portfolio companies to embed
							sustainability at the core of their investments and operations.{' '}
						</p>
						<p className='slide-up'>
							Our approach is pragmatic, tailored, and forward-looking, designed
							to translate global standards and ambitions into actionable
							frameworks that create long-term value. We equip our clients with
							the insights and tools they need to lead with purpose in a
							changing world.
						</p>{' '}
					</header>
					<section className='core-values parent-blur'>
						<h2 className='slide-up'>Core Values</h2>
						<ul className='grid-display'>
							{coreValues.map((coreValue) => (
								<li key={coreValue.h3}>
									<div className='h3-icon'>
										{coreValue.svg}
										<h3 className='slide-in'>{coreValue.h3}</h3>
									</div>
									<p className='slide-in'>{coreValue.paragraph}</p>
								</li>
							))}
						</ul>
					</section>
				</article>
				<article className='key-numbers'>
					<h2 className='slide-up'>Key Facts</h2>
					<br />
					<p className='slide-up'>Since 2015</p>
					<ul>
						<li className='flex-display-column'>
							<span className='key_numbers'>
								11 <small className='key_numbers_contd'>sectors</small>
							</span>
							<span className='key_title'>
								specialised expertise with operational knowledge
							</span>
						</li>
						<li className='flex-display-column'>
							<span className='key_numbers'>
								25+ <small className='key_numbers_contd'>years</small>
							</span>
							<span className='key_title'>
								combined experience from partners and senior advisors
							</span>
						</li>
						<li className='flex-display-column'>
							<span className='key_numbers'>
								50+ <small className='key_numbers_contd'>companies</small>
							</span>
							<span className='key_title'>
								supported through their sustainability journeys
							</span>
						</li>
						<li className='flex-display-column'>
							<span className='key_numbers'>
								98%{' '}
								<small className='key_numbers_contd'>client satisfaction</small>
							</span>
							<span className='key_title'>
								delivery of sustainability projects from a financial risk
								perspective
							</span>
						</li>
					</ul>
				</article>
				<article className='leadership'>
					<h2 className='slide-up'>Leadership</h2>
					<div>
						<header>
							<p className='slide-up'>
								<span className='leadership-name'>Kachi Nwanna</span>
								<br />
								<span className='leadership-position'>Managing Partner</span>
							</p>
							<p className='slide-up'>
								<span className='mail-icon'>
									<Link to='mailto:kachi.nwanna@advianpartners.com'>
										<svg
											width='24'
											height='24'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
											fillRule='evenodd'
											clipRule='evenodd'>
											<path d='M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z' />
										</svg>
									</Link>
								</span>
								{'  '}
								<span>
									<Link to='https://www.linkedin.com/in/kachinwanna'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'>
											<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
										</svg>
									</Link>
								</span>
							</p>
							<br />
							<p className='slide-up'>
								Kachi oversees business operations and engagement with clients
								at Advian Partners. He brings over 12 years of experience in
								sustainability strategy and advisory, ESG and climate risk
								assessment from a corporate finance lens. He has managed various
								cross-sector ESG portfolios including projects at Vigeo Eiris,
								Moody's, and BNP Paribas CIB. He was most recently an Associate
								Director at BSR leading strategy and implementation for private
								market clients and financial institutions on the entity-,
								portfolio-, and product-level.
							</p>
							<br />
							<p className='slide-up'>
								Kachi holds an engineering degree, an MBA in Sustainability from
								IPAG Business School, and a Masters in Financial Engineering and
								Tax Law from ESCP Business School in Paris. He is also a
								certified ESG Investing professional with the CFA UK.
							</p>
						</header>
						<figure>
							<img
								src={mdImg}
								alt='MD Advian Partner Kachi Nwanna'
								className='rounded-img'
							/>
						</figure>
					</div>
				</article>
				<FooterCta />
			</div>
		</>
	);
}

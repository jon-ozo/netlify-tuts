import TwoColumnsSticky from '~/components/two-columns-sticky';
import { NavLink } from 'react-router';
import HeroSection from '~/components/hero-section';
import FooterCta from '~/components/footer-cta';
import video from '~/assets/expertise-video.mp4';

export default function Services() {
	const sustainabilityContents = [
		{
			title: 'Sustainability Operating and Sparring Partner Services',
			paragraph:
				'We act as your dedicated Sustainability Operating or Sparring Partner, embedding ESG expertise into the value creation process. Collaborating with deal teams and portfolio executives, we identify and scale initiatives that enhance performance and reduce risk. Grounded in real-world execution, we turn sustainability into a driver of operational excellence and competitive edge.',
		},
		{
			title: 'Climate Resilience Strategy',
			paragraph:
				'We deliver tailored climate risk assessments and resilience strategies aligned with leading frameworks, integrating climate considerations into business management and investment decisions. Our approach transforms climate risk into strategic foresight and unlocks new opportunities for long-term value.',
		},
		{
			title: 'Decarbonization and Net-Zero Strategy',
			paragraph:
				'We design and implement data-driven net-zero strategies aligned with investor expectations, regulations, and sector realities. From emissions baselines to roadmaps, our pragmatic approach delivers measurable impact, operational value, and long-term resilience.',
		},
		{
			title: 'Biodiversity Impact and Natural Capital Strategy',
			paragraph:
				'We help investors and portfolio companies craft actionable biodiversity strategies aligned with global nature-positive goals and emerging frameworks. By assessing nature-related risks and dependencies, we build tailored solutions that drive ecosystem resilience, regulatory readiness, and long-term portfolio sustainability.',
		},
		{
			title: 'Supply Chain Resilience',
			paragraph:
				'We assess ESG risks and dependencies to uncover opportunities for localization or diversification, embedding resilience into procurement and operations strategies. Boosting business continuity, safeguarding reputation, and driving long-term value across the supply chain.',
		},
		{
			title: 'Circular Economy',
			paragraph:
				'We help portfolio companies transition from linear to circular models by extending product lifecycles, reducing material dependency, and unlocking new revenue streams. Our strategies embed circularity across operations, procurement, and design, aligning with regulations and driving both sustainability and competitive advantage.',
		},
	];

	const researchContents = [
		{
			title: 'Research and Benchmarking',
			paragraph:
				'In a competitive landscape, we deliver research and benchmarking services that help private markets assess ESG performance, track trends, and identify best practices. Our sector-specific analysis and peer comparisons support strategic decisions, enabling alignment with market leaders and evolving expectations.',
		},
	];

	const hero = {
		heroHeader:
			'We support you through all investment cycles and irrespective of the sustainability maturities of',
		heroHeaderSpan: 'portfolio companies',
		heroSpan: 'EXPERTISE',
	};

	return (
		<>
			<HeroSection
				{...hero}
				video={video}
			/>
			<div className='home-bg'>
				<TwoColumnsSticky
					id='sustainability'
					headerText='Sustainability Strategy and Transformation'
					paragraph='Drive long-term value and resilience with tailored sustainability strategies built for investors and their portfolio companies. We help you move from just an investment thesis to execution—aligning operations, governance, and growth with sustainability goals and regulatory demands. We embed sustainability where it matters most: in strategy, performance, and value creation.'
					contents={sustainabilityContents}
					btn
				/>
				<article
					id='risk'
					className='article-padd grid-display'>
					<header className='sticky-header'>
						<h2 className='slide-up'>ESG Risk Assessment</h2>
						<p className='slide-up'>
							Identify and mitigate material ESG risks before they impact value.
							We deliver targeted ESG risk assessments for investors and
							portfolio companies irrespective of their sectors, enabling
							smarter decisions across deal sourcing, due diligence, and
							portfolio management.
						</p>
						<NavLink
							to='/contact'
							className='btn slide-up'>
							Get Started Here
						</NavLink>
					</header>
					<ul>
						<li>
							<details>
								<summary>ESG Due Diligence</summary>
								<p className='slide-up'>
									We provide comprehensive ESG due diligence to assess
									environmental, social, and governance impacts across
									investment targets. Our insights into material risks, value
									drivers, and compliance enable informed, risk-adjusted
									decisions that enhance portfolio resilience and long-term
									value.
								</p>
							</details>
						</li>
						<li>
							<details>
								<summary>Regulatory Services</summary>
								<p className='slide-up'>
									We provide expert ESG regulatory support to ensure compliance
									with global standards like SFDR, CSRD, and the EU Taxonomy.
									Our guidance on reporting, risk, and strategy alignment helps
									investors navigate evolving regulations with confidence while
									delivering sustainable value.
								</p>
							</details>
						</li>
					</ul>
				</article>
				<TwoColumnsSticky
					id='research'
					headerText='Research and Benchmarking'
					paragraph='Make informed sustainability decisions with data-driven ESG research and benchmarking tailored to private markets. We equip investors and portfolio companies with sector-specific insights, peer comparisons, and emerging best practices to stay ahead of market.'
					contents={researchContents}
					btn
				/>

				<article className='article-padd grid-display parent-blur'>
					<header className='sticky-header'>
						<h2 className='slide-up'>
							<span>Industries</span>
						</h2>
						<p className='slide-up'>
							We provide advisory across 11+ sectors, combining deep operational
							expertise with sustainability insight. We help clients drive
							performance, manage risk, and unlock long-term value through
							tailored, sector-specific solutions.
						</p>
					</header>
					<ul className='industry-name'>
						<li>Asset Management & Financial Institutions</li>
						<li>Energy & Utilities</li>
						<li>Software & Technology</li>
						<li>Biotech & Healthcare</li>
						<li>Infrastructure</li>
						<li>Real Estate</li>
						<li>Consumer Goods</li>
						<li>Industrials</li>
						<li>Professional Services</li>
						<li>Transport & Logistics</li>
						{/* {industriesContents.map((industry) => (
							<li key={industry.industry}>
								<figure>
									<img
										width={150}
										height={98}
										src={industry.img}
										alt={industry.industry}
										className='industry-img'
									/>
								</figure>
								<span>{industry.industry}</span>
							</li>
						))} */}
					</ul>
				</article>
				<FooterCta />
			</div>
		</>
	);
}

import HeroSection from '~/components/hero-section';
import FooterCta from '~/components/footer-cta';
import dealOriginationVideo from '~/assets/deal_origination_video.mp4';
import SingleCol from '~/components/single-col';
import OrderedList from '~/components/ordered-list';

export default function DealOrientation() {
	const hero = {
		heroHeader: 'Deal Origination',
		heroParagraph: 'Access proprietary deals beyond the competitive market',
	};

	const lists = [
		{
			title: 'Strategic Targeting',
			text: 'We define precisely what “the right deal” looks like for each client before any opportunity is sourced. Investment criteria, risk appetite, value-creation levers, and ESG considerations are translated into a focused origination blueprint that guides all sourcing activity.',
		},
		{
			title: 'Relationship-Led Sourcing',
			text: 'We originate opportunities directly through long-standing relationships with owners, executives, family offices, corporates, and local advisors. This enables access to businesses that are not formally for sale and avoids competitive auction dynamics.',
		},
		{
			title: 'Market Intelligence & Sector Insight',
			text: 'We maintain continuous insight into selected sectors, geographies, and ownership structures, allowing us to identify potential transactions before they become visible to the wider market.',
		},
		{
			title: 'Proprietary Screening & Qualification',
			text: 'Every opportunity is assessed against strategic, financial, operational, and sustainability criteria before it reaches a client. This disciplined filtering ensures that only high-conviction, relevant opportunities are progressed.',
		},
		{
			title: 'Transaction Readiness & Execution Support',
			text: 'We don’t just introduce opportunities; we help shape them into executable transactions. This includes engaging with owners, structuring discussions, supporting diligence, and ensuring alignment between buyer and seller from the outset.',
		},
	];

	return (
		<>
			<HeroSection
				{...hero}
				video={dealOriginationVideo}
			/>

			<SingleCol
				title='A Proprietary Deal Origination Model Built on Strategic Intelligence and Relationships'
				paragraph='At Advian Partners, we redefine deal origination by sourcing privately negotiated opportunities through deep sector insight and long-standing relationships. Our proprietary origination model combines strategic intelligence, on-the-ground market access across the EMEA region, and disciplined screening to deliver high-quality, off-market transactions aligned with each client’s investment objectives.'
			/>

			<OrderedList
				sectionTitle='Our Approach'
				lists={lists}
			/>

			<FooterCta />
		</>
	);
}

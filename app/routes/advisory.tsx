import advisoryVideo from '~/assets/advisory_video.mp4';
import FooterCta from '~/components/footer-cta';
import HeroSection from '~/components/hero-section';
import OrderedList from '~/components/ordered-list';
import SingleCol from '~/components/single-col';

export default function Advisory() {
	const hero = {
		heroHeader: 'Corporate Advisory',
		heroParagraph:
			'A Smarter Way to Navigate Strategy, Capital and Change. Helping boards, executives, and shareholders make the decisions that define long-term value.',
	};

	const lists = [
		{
			title: 'Capital Raising',
			text: 'We advise corporates on structuring and securing funding that supports their strategy, growth, and resilience. Our independent approach helps clients access the right mix of equity, debt, and alternative capital while aligning stakeholders and preserving long-term value.',
		},
		{
			title: 'Structured Trade Finance',
			text: 'We design and arrange tailored trade and working-capital solutions, including the structuring and establishment of SPVs across Europe and offshore jurisdictions. Our approach supports international operations and complex supply chains while improving liquidity, managing risk, and strengthening balance sheets without constraining strategic flexibility.',
		},
		{
			title: 'Financial Restructuring',
			text: 'We support organisations facing financial pressure by developing and executing restructuring solutions that stabilise liquidity, protect value, and restore long-term viability. We work closely with management, shareholders, and creditors to align interests and deliver sustainable outcomes.',
		},
		{
			title: 'Sustainable Finance & ESG Advisory',
			text: 'We help clients integrate sustainability into financing, strategy, and capital decisions. From green and sustainability-linked financing to ESG risk and regulatory readiness, we ensure that sustainability supports both financial performance and long-term competitiveness.',
		},
		{
			title: 'Business Set-up & Market Entry',
			text: 'We advise companies entering new markets or establishing new operations on strategy, structure, regulatory requirements, and capital needs. Our support helps clients move from opportunity to execution with clarity, control, and confidence.',
		},
	];

	return (
		<>
			<HeroSection
				{...hero}
				video={advisoryVideo}
			/>

			<SingleCol
				title='A Distinctive Corporate Advisory Model for the Decisions That Matter'
				paragraph='At Advian Partners, we redefine corporate advisory by helping organisations translate complexity into long-term value. Our bespoke advisory process integrates strategic, financial, operational, and sustainability expertise to deliver tailored solutions aligned with each client’s ambitions, stakeholders, and operating realities.'
			/>

			<OrderedList
				sectionTitle='Our Coverage'
				lists={lists}
			/>

			<FooterCta />
		</>
	);
}

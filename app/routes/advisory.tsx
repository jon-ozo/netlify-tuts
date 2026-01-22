import advisoryVideo from '~/assets/advisory_video.mp4';
import FooterCta from '~/components/footer-cta';
import HeroSection from '~/components/hero-section';
import OrderedList from '~/components/ordered-list';
import SingleCol from '~/components/single-col';
import {
	advisoryHero,
	advisoryLists,
	advisoryMarketing,
} from '~/utils/constants';

export default function Advisory() {
	return (
		<>
			<HeroSection
				{...advisoryHero}
				video={advisoryVideo}
				linkText='Connect With Us'
				link='/contact'
			>
				<h1 className='flip-down'>
					Strategic & Financial <br /> Advisory for Corporates
				</h1>
			</HeroSection>

			<SingleCol
				paragraph='At Advian Partners, we redefine corporate advisory by helping organisations translate complexity into long-term value. Our bespoke advisory process integrates strategic, financial, operational, and sustainability expertise to deliver tailored solutions aligned with each client’s ambitions, stakeholders, and operating realities.'
				marketingLists={advisoryMarketing}
			>
				<h2 className='slide-up'>
					A Distinctive <br />
					Corporate Advisory Model <br />
					for the Decisions That Matter
				</h2>
			</SingleCol>

			<OrderedList
				sectionTitle='How We Engage'
				lists={advisoryLists}
			/>

			<FooterCta />
		</>
	);
}

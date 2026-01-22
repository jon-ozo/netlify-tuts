import HeroSection from '~/components/hero-section';
import FooterCta from '~/components/footer-cta';
import dealOriginationVideo from '~/assets/deal_origination_video.mp4';
import SingleCol from '~/components/single-col';
import OrderedList from '~/components/ordered-list';
import {
	dealOriginationHero,
	dealOriginationLists,
	dealOriginationMarketing,
} from '~/utils/constants';

export default function DealOrientation() {
	return (
		<>
			<HeroSection
				{...dealOriginationHero}
				video={dealOriginationVideo}
				linkText='Discover More'
				link='/contact'
			>
				<h1 className='flip-down'>
					Access Proprietary <br /> Deals Beyond the <br /> Competitive Market
				</h1>
			</HeroSection>

			<SingleCol
				paragraph='At Advian Partners, we redefine deal origination by sourcing privately negotiated opportunities through deep sector insight and long-standing relationships. Our proprietary origination model combines strategic intelligence, on-the-ground market access across the EMEA region, and disciplined screening to deliver high-quality, off-market transactions aligned with each client’s investment objectives.'
				marketingLists={dealOriginationMarketing}
			>
				<h2 className='slide-up'>
					A Proprietary <br />
					Deal Origination <br />
					Model Built on Strategic <br />
					Intelligence and Relationships
				</h2>
			</SingleCol>

			<OrderedList
				sectionTitle='Our Approach'
				lists={dealOriginationLists}
			/>

			<FooterCta />
		</>
	);
}

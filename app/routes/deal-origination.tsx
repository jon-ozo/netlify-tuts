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
import ImgSlider from '~/components/img-slider';

export default function DealOrientation() {
	return (
		<>
			<HeroSection
				{...dealOriginationHero}
				video={dealOriginationVideo}
				linkText='Discover More'
				link='/contact'
			>
				<h1 className='slide-down'>
					Access Proprietary Deals Beyond the Competitive Market
				</h1>
			</HeroSection>

			<SingleCol
				paragraph='At Advian Partners, we redefine deal origination by sourcing privately negotiated opportunities through deep sector insight and long-standing relationships. Our proprietary origination model combines strategic intelligence, on-the-ground market access, and disciplined screening to deliver high-quality, off-market transactions aligned with each client’s investment objectives.'
				marketingLists={dealOriginationMarketing}
			>
				<h2 className='zoom-out animation-timeline'>
					A Proprietary <br />
					Deal Origination <br />
					Model Built on Strategic <br />
					Intelligence and Relationships
				</h2>
			</SingleCol>

			<OrderedList
				sectionTitle='Our Approach'
				parentClassName='ordered-list-wrapper'
				link='/contact'
				linkText='Learn More'
			>
				{dealOriginationLists.map((list) => (
					<li key={list.title}>
						<details
							name='advisory'
							className='details'
						>
							<summary>
								<h3>{list.title}</h3>
							</summary>
							<p className='slide-up animation-duration_1s dropdown-content'>
								{list.text}
							</p>
						</details>
					</li>
				))}
			</OrderedList>

			<ImgSlider />

			<FooterCta />
		</>
	);
}

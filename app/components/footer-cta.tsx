import { Link } from 'react-router';
import footerLogo from '~/assets/img/footer-logo.png';

export default function FooterCta() {
	return (
		<footer className='footer'>
			<ul className='center-heading flex-display-column row-gap-xs'>
				<li>
					<h2 className='slide-up'>Get in Touch</h2>
				</li>
				<li className='slide-up'>Limited Availability Per Quarter</li>
				<li>
					<Link
						to='/contact'
						className='sec-btn slide-up'
					>
						Contact Us
					</Link>
				</li>
			</ul>
			<div className='container margin-top flex-display-column row-gap-s'>
				<figure className='slide-up margin-top'>
					<img
						src={footerLogo}
						alt='business logo.'
						className='footer-logo'
						width={200}
						height={30}
					/>
				</figure>
				<address className='slide-up'>
					60, rue Francois 1er,
					<br /> 75008, Paris, <br /> France.
				</address>
				<p className='slide-up margin-top'>
					AdvianPartners.com (the "Advian Partners Website") is a website
					operated by Advian Partners SAS, a privately held France-based SAS
					company. Advian Partners SAS provides financial and strategic
					advisory, conslting sevices, mergers and acquisitions services, and
					capital raising services. Some of our transactions shown reflect deals
					done while our advisors or team were at prior firms.
				</p>
			</div>
		</footer>
	);
}

import { Link } from 'react-router';
import footerLogo from '~/assets/img/footer-logo.png';
import ImgGrid from './img-grid';
import Copyright from './copyright';

export default function FooterCta() {
	return (
		<footer className='footer opacity'>
			<ImgGrid />
			<ul className='container flex-display-column row-gap-xs'>
				<li>
					<h2 className='center-align-title slide-up'>Get in Touch</h2>
				</li>
				{/* <li className='center-sub-text slide-up'>
					Limited Availability Per Quarter
				</li> */}
				<li className='center-button'>
					<Link
						to='/contact'
						className='sec-btn margin-top slide-up'
					>
						Contact Us
					</Link>
				</li>
			</ul>
			<div className='footer-links-wrapper container grid-display'>
				<ul className='footer-links'>
					<li className='footer-logo-wrapper'>
						<Link to='/'>
							<figure className='slide-up'>
								<img
									src={footerLogo}
									alt='business logo.'
									className='footer-logo'
									width={200}
									height={42}
								/>
							</figure>
						</Link>
					</li>
					<li>
						<p className='address-title slide-up'>FRANCE</p>
						<address className='footer-address slide-up'>
							60, rue François 1er,
							<br /> 75008, Paris, <br /> France.
						</address>
					</li>
				</ul>
				<ul className='footer-links footer-page-links'>
					<li className='footer-links-title slide-up'>THE FIRM</li>
					<li className='slide-up'>
						<Link to='/'>HOME</Link>
					</li>
					<li className='slide-up'>
						<Link to='/deal-origination'>DEAL ORIGINATION</Link>
					</li>
					<li className='slide-up'>
						<Link
							to='/advisory'
							className='slide-up'
						>
							ADVISORY
						</Link>
					</li>
					<li className='slide-up'>
						<Link
							to='/contact'
							className='slide-up'
						>
							CONTACT
						</Link>
					</li>
				</ul>
				<ul className='footer-links'>
					<li className='footer-links-title slide-up'>CONNECT</li>
					<li className='slide-up'>
						<Link
							to='https://www.linkedin.com/company/advian-partners/'
							rel='noreferrer'
							className='footer-socials slide-up'
						>
							LinkedIn
						</Link>
						<span className='footer-socials-span slide-up'>
							Connect with us on LinkedIn.
						</span>
					</li>
					<li className='slide-up'>
						<Link
							to='https://x.com/AdvianPartners'
							rel='noreferrer'
							className='footer-socials slide-up'
						>
							X
						</Link>
						<span className='footer-socials-span slide-up'>
							Connect with us on X.
						</span>
					</li>
				</ul>
			</div>
			<div className='container footer-lastchild'>
				<p className='slide-up font-xs'>
					<Link
						to='https://www.advianpartners.com'
						className='web-link'
					>
						AdvianPartners.com
					</Link>{' '}
					(the "Advian Partners Website") is a website operated by Advian
					Partners SAS, a privately held France-based SAS company. Advian
					Partners SAS provides financial and strategic advisory, consulting
					sevices, mergers and acquisitions services, and capital raising
					services. Some of our transactions shown reflect deals done while our
					advisors or team were at prior firms.{' '}
					<Link to='/privacy-policy'>Privacy Policy</Link> |{' '}
					<Link to='/terms-of-service'>Terms</Link> |{' '}
					<Link to='/legal-notice'>Legal Notice</Link>.
				</p>
			</div>
			<Copyright />
		</footer>
	);
}

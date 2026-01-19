import { Link } from 'react-router';

export default function CookiePolicy() {
	return (
		<article className='policies'>
			<header>
				<h2 className='no-animation'>Cookie Policy for Advian Partners</h2>
				<p className='italics no-animation'>Effective Date: 28th April 2025</p>
				<br />
				<br />
				<p className='italics no-animation'>
					This Cookie Policy explains how Advian Partners ("we", "our", "us")
					uses cookies and similar technologies on our website{' '}
					<Link to='/'>https://www.advianpartners.com</Link> ("Site"). It also
					explains your rights to control the use of cookies.
				</p>
			</header>
			<ol>
				<li>
					<h3 className='no-animation'>What Are Cookies?</h3>
					<p className='no-animation'>
						Cookies are small text files stored on your device (computer,
						smartphone, or other) when you visit a website. They help websites
						function effectively, remember your preferences, and gather
						analytics.
					</p>
				</li>
				<li>
					<h3 className='no-animation'>Types of Cookies We Use</h3>
					<p className='no-animation'>We use the following types of cookies:</p>
					<ol className='inner_ordered_list'>
						<li>
							<h3 className='no-animation'>Strictly Necessary Cookies</h3>
							<p className='no-animation'>
								These are essential for the website to function properly. They
								enable core features such as security, network management, and
								accessibility.
							</p>
							<ul className='inner-list'>
								<li>Example: Session cookies that keep you logged in</li>
							</ul>
						</li>
						<li>
							<h3 className='no-animation'>
								Performance and Analytics Cookies
							</h3>
							<p className='no-animation'>
								These cookies help us understand how visitors interact with our
								website by collecting and reporting information anonymously
								(e.g., page views, traffic sources).
							</p>
							<ul className='inner-list'>
								<li>Example: Google Analytics</li>
							</ul>
						</li>
						<li>
							<h3 className='no-animation'>Functionality Cookies</h3>
							<p className='no-animation'>
								These cookies allow our website to remember choices you make
								(such as your language or region) and provide enhanced features.
							</p>
						</li>
						<li>
							<h3 className='no-animation'>
								Targeting/Advertising Cookies (if applicable)
							</h3>
							<p className='no-animation'>
								Used to deliver ads more relevant to you and your interests. We
								may work with third-party services for remarketing or
								behavioural advertising. <br /> <br /> (Note: Omit this section
								if you do not use advertising cookies.)
							</p>
						</li>
					</ol>
				</li>
				<li>
					<h3 className='no-animation'>Legal Basis for Using Cookies</h3>
					<p className='no-animation'>
						Under the General Data Protection Regulation (GDPR), we require your
						consent before placing cookies on your device, except for strictly
						necessary cookies.
					</p>
				</li>
				<li className='no-animation'>
					<h3 className='no-animation'>How to Manage Cookies</h3>
					<p className='no-animation'>
						You can control and manage cookies in the following ways:
					</p>
					<ul className='inner-list'>
						<li>Via our cookie consent banner on your first visit</li>
						<li>
							By changing your browser settings to block or delete cookies
						</li>
						<li>
							By visiting{' '}
							<Link
								to='http://www.aboutcookies.org or
								http://www.allaboutcookies.org'></Link>{' '}
							for detailed guidance
						</li>
					</ul>
					<p>
						Please note that blocking some cookies may affect the functionality
						of the website.
					</p>
				</li>
				<li className='no-animation'>
					<h3 className='no-animation'>Third-Party Cookies</h3>
					<p className='no-animation'>
						Some cookies may be set by third parties when you visit our site.
						These include services such as:
					</p>
					<ul className='inner-list'>
						<li>Google Analytics</li>
						<li>LinkedIn</li>
						<li>Twitter</li>
					</ul>
					<p>
						We recommend reviewing the cookie policies of these third parties
						for more information.
					</p>
				</li>
				<li className='no-animation'>
					<h3 className='no-animation'>Updates to This Cookie Policy</h3>
					<p className='no-animation'>
						We may update this Cookie Policy to reflect changes in the cookies
						we use or legal requirements. Please revisit this page regularly to
						stay informed.
					</p>
				</li>
				<li className='no-animation'>
					<h3 className='no-animation'>Contact Us</h3>
					<p className='no-animation'>
						If you have any questions about this Cookie Policy or our data
						practices, please contact: <br />
						<br />
						<b>Advian Partners</b> <br />
						Email: <Link to='mailto:'>contact@advianpartners.com</Link> <br />
						Website: <Link to='/'>www.advianpartners.com</Link>
					</p>
				</li>
			</ol>
		</article>
	);
}

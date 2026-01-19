import { Link } from 'react-router';

export default function TermsOfService() {
	return (
		<article className='policies'>
			<header>
				<h2 className='no-animation'>Terms of Service</h2>
				<p className='italics slide-in'>Effective Date: 28 April 2025</p>
				<br />
				<br />
				<p className='italics slide-in'>
					These Terms of Service (“Terms”) govern your access to and use of the
					website and services provided by <b>Advian Partners</b>, a strategic
					advisory firm (“Advian Partners,” “we,” “us,” or “our”). By accessing
					or using our website at <Link to='/'>[www.advianpartners.com]</Link>{' '}
					(the “Site”), you agree to comply with and be bound by these Terms. If
					you do not agree to these Terms, please do not use our Site or
					services.
				</p>
			</header>
			<ol>
				<li>
					<h3 className='no-animation'>About Advian Partners</h3>
					<p className='no-animation'>
						Advian Partners provides strategic, operational, and financial
						advisory services to businesses and organizations. Our website
						provides general information about our firm and its services and may
						include contact forms, blog articles, case studies, or event
						information.
					</p>
				</li>
				<li>
					<h3 className='no-animation'>Use of the Website</h3>
					<p className='no-animation'>
						You agree to use the Site only for lawful purposes and in a manner
						that does not infringe the rights of or restrict the use and
						enjoyment of this site by any third party. You agree not to:
					</p>
					<ul className='inner-list'>
						<li>
							Attempt to gain unauthorized access to our systems or networks;
						</li>
						<li>
							Reproduce, duplicate, copy, or resell any part of our website in
							contravention of these Terms;
						</li>
						<li>
							Transmit any unsolicited or unauthorized advertising or
							promotional material.
						</li>
					</ul>
					We reserve the right to restrict or terminate your access if we
					suspect misuse or violations of these Terms.
				</li>
				<li>
					<h3 className='no-animation'>Intellectual Property</h3>
					<p className='no-animation'>
						All content on this Site—including but not limited to text,
						graphics, logos, trademarks, service marks, images, and software—is
						the intellectual property of Advian Partners or its licensors, and
						is protected under applicable intellectual property laws. You may
						not copy, reproduce, or distribute any content without prior written
						consent from Advian Partners.
					</p>
				</li>
				<li className='no-animation'>
					<h3 className='no-animation'>Disclaimer of Warranties</h3>
					<p className='no-animation'>
						The content on our Site is provided for general information purposes
						only. While we strive to keep the information up to date and
						accurate, we make no warranties or representations of any kind
						regarding:
					</p>
					<ul className='inner-list'>
						<li>
							Attempt to gain unauthorized access to our systems or networks;
						</li>
						<li>
							Reproduce, duplicate, copy, or resell any part of our website in
							contravention of these Terms;
						</li>
						<li>
							Transmit any unsolicited or unauthorized advertising or
							promotional material.
						</li>
					</ul>
					All use of the Site is at your own risk.
				</li>
				<li className='no-animation'>
					<h3 className='no-animation'>Limitation of Liability</h3>
					<p className='no-animation'>
						To the fullest extent permitted by law, Advian Partners shall not be
						liable for any direct, indirect, incidental, consequential, or
						special damages arising out of or in any way connected with your
						access to or use of the Site, or for any errors or omissions in the
						content.
					</p>
				</li>
				<li className='no-animation'>
					<h3 className='no-animation'>External Links</h3>
					<p className='no-animation'>
						Our website may contain links to third-party websites. We do not
						endorse or take responsibility for the content, privacy practices,
						or terms of use of those external sites.
					</p>
				</li>
				<li className='no-animation'>
					<h3 className='no-animation'>Privacy</h3>
					<p className='no-animation'>
						Your use of the Site is also governed by our{' '}
						<Link to='/privacy'>[Privacy Policy]</Link>, which explains how we
						collect, use, and protect your personal data in accordance with
						applicable laws, including the GDPR.
					</p>
				</li>
				<li className='no-animation'>
					<h3 className='no-animation'>Modifications to the Terms</h3>
					<p className='no-animation'>
						We may update these Terms from time to time. Any changes will be
						posted on this page and, where appropriate, notified to you. Your
						continued use of the Site following any changes constitutes
						acceptance of those changes.
					</p>
				</li>
				<li className='no-animation'>
					<h3 className='no-animation'>Governing Law and Jurisdiction</h3>
					<p className='no-animation'>
						These Terms are governed by and construed in accordance with the
						laws of [France or relevant jurisdiction]. Any disputes arising in
						connection with these Terms shall fall within the exclusive
						jurisdiction of the competent courts in [Paris or relevant city].
					</p>
				</li>
				<li className='no-animation'>
					<h3 className='no-animation'>Contact Us</h3>
					<p className='no-animation'>
						If you have any questions about these Terms or the services provided
						by Advian Partners, you may contact us at: <br />
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

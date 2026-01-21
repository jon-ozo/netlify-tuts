import { Link } from 'react-router';

export default function LegalNotice() {
	return (
		<article className='policies'>
			<div className='container'>
				<header>
					<h2 className='no-animation'>Legal Notice</h2>
					<p className='italics no-animation'>
						In accordance with Articles 6-III and 19 of French Law No. 2004-575
						of June 21, 2004 for Confidence in the Digital Economy (LCEN), users
						of the website <Link to='/'>www.advianpartners.com</Link> are
						informed of the following information regarding its ownership and
						management.
					</p>
				</header>
				<ol>
					<li>
						<h3 className='no-animation'>Website Publisher</h3>
						<p className='no-animation'>
							<b>Company Name:</b> Advian Partners SAS
						</p>

						<p className='no-animation'>
							<b>Registered Office:</b> 60 rue François 1er 75008 Paris
						</p>

						<p className='no-animation'>
							<b>SIRET / RCS:</b> 94372858400013
						</p>
						<p className='no-animation'>
							<b>Director of Publication:</b> Kachi Nwanna
						</p>
						<p className='no-animation'>
							<b>Contact Email:</b> contact@advianpartners.com
						</p>
						<p className='no-animation'>
							<b>Phone Number:</b> +33786289658
						</p>
					</li>
					<li>
						<h3 className='no-animation'>Website Hosting</h3>
						<p className='no-animation'>
							<b>Hosting Provider:</b> Namecheap Company
						</p>
						<p className='no-animation'>
							<b>Company Name:</b> Namecheap, Inc
						</p>
						<p className='no-animation'>
							<b>Head Office Address:</b>
						</p>
						<p className='no-animation'>
							<b>Website:</b>{' '}
							<Link to='www.namecheap.com'>www.namecheap.com</Link>
						</p>
					</li>
					<li>
						<h3 className='no-animation'>Intellectual Property</h3>
						<p className='no-animation'>
							The website <Link to='/'>www.advianpartners.com</Link> and all of
							its components (text, images, graphics, logo, icons, sounds,
							software, etc.) are the exclusive property of Advian Partners,
							unless otherwise stated. Any reproduction, representation,
							modification, publication, or adaptation of all or part of the
							elements of the site, regardless of the means or process used, is
							prohibited without prior written authorization from Advian
							Partners.{' '}
						</p>
					</li>
					<li className='no-animation'>
						<h3 className='no-animation'>Personal Data</h3>
						<p className='no-animation'>
							Advian Partners is committed to complying with applicable data
							protection laws, including the General Data Protection Regulation
							(GDPR). For more information on how we collect and process your
							personal data, please refer to our{' '}
							<Link to='/privacy-policy'>[Privacy Policy]</Link>.
						</p>
					</li>
					<li className='no-animation'>
						<h3 className='no-animation'>Limitation of Liability</h3>
						<p className='no-animation'>
							While Advian Partners strives to ensure the accuracy and
							timeliness of the information published on this site, it cannot
							guarantee that it is free from errors or omissions. Users access
							and use this site at their own risk. Advian Partners cannot be
							held liable for any direct or indirect damages resulting from the
							use or inability to use the site.
						</p>
					</li>
					<li className='no-animation'>
						<h3 className='no-animation'>Governing Law</h3>
						<p className='no-animation'>
							This website is governed by the laws of France. Any dispute
							arising from its use shall fall under the exclusive jurisdiction
							of French courts.
						</p>
					</li>
				</ol>
			</div>
		</article>
	);
}

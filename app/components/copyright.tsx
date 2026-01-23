import { Link, useLocation } from 'react-router';

export default function Copyright() {
	const date = new Date().getFullYear();
	const location = useLocation();
	const className =
		location.pathname === '/contact'
			? 'container center-align-title copyright-contact-page'
			: 'container center-align-title copyright';

	return (
		<p className={className}>
			<small>
				&copy; {date} Advian Partners. All Rights Reserved. Designed by{' '}
				<Link
					to='https://www.johnozoemena.ng'
					target='_blank'
					rel='noreferrer'
				>
					John Ozoemena
				</Link>
			</small>
		</p>
	);
}

import { Link, useLocation } from 'react-router';
import logoImg from '../assets/img/logo.png';
import contactLogoImg from '../assets/img/contact-logo.png';

export default function Nav() {
	const location = useLocation();
	const imgSrc = location.pathname === '/contact' ? contactLogoImg : logoImg;
	const className =
		location.pathname === '/contact' ? 'contact-btn' : 'pri-btn';
	return (
		<>
			<nav className='slide-down'>
				<div className='container flex-display '>
					<figure className='logo'>
						<Link to='/'>
							<img
								src={imgSrc}
								alt='business logo'
								width={200}
								height={30}
							/>
						</Link>
					</figure>
					<p className='slide-in'>
						<Link
							to='/contact'
							className={className}
						>
							Contact Us
						</Link>
					</p>
				</div>
			</nav>
		</>
	);
}

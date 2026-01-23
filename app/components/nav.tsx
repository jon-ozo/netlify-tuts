import { Link, NavLink, useLocation } from 'react-router';
import logoImg from '../assets/img/logo.png';
import contactLogoImg from '../assets/img/contact-logo.png';
import { useState } from 'react';

export default function Nav() {
	const [isVisible, setIsVisible] = useState(false);

	function handleClick() {
		setIsVisible((prevStatus) => !prevStatus);
	}

	const location = useLocation();
	const imgSrc = location.pathname === '/contact' ? contactLogoImg : logoImg;
	const className = location.pathname === '/contact' ? 'contact-links' : '';
	const hamburger =
		location.pathname === '/contact' ? 'contact-links hamburger' : 'hamburger';

	return (
		<>
			<div className={isVisible ? 'mobile-nav slide-in' : 'mobile-nav'}>
				<ul>
					<li
						onClick={handleClick}
						className='cancel-btn'
					>
						<svg
							tabIndex={0}
							aria-label='Close Navigation Menu.'
							clipRule='evenodd'
							fillRule='evenodd'
							strokeLinejoin='round'
							strokeMiterlimit='2'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z' />
						</svg>
					</li>
					<li>
						<NavLink
							to='/'
							onClick={handleClick}
						>
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/deal-origination'
							onClick={handleClick}
						>
							DEAL ORIGINATION
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/advisory'
							onClick={handleClick}
						>
							ADVISORY
						</NavLink>
					</li>
					{/* <li>
						<NavLink
							to='https://insights.advianpartners.com/insights'
							className={({ isActive }) =>
								isActive ? 'active-link' : undefined
							}
						>
							Insights
						</NavLink>
					</li> */}
					<li>
						<NavLink
							to='/contact'
							onClick={handleClick}
						>
							CONTACT US
						</NavLink>
					</li>
				</ul>
				{/* <div>
					<NavLink to='https://www.linkedin.com/company/advian-partners/'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							className='linkedin-icon-mobile'
						>
							<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
						</svg>
					</NavLink>
				</div> */}
			</div>
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
					<ul className={`${className} top-nav-links`}>
						<li>
							<NavLink
								to='/deal-origination'
								className={({ isActive }) =>
									isActive ? 'active-link' : undefined
								}
							>
								DEAL ORIGINATION
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/advisory'
								className={({ isActive }) =>
									isActive ? 'active-link' : undefined
								}
							>
								ADVISORY
							</NavLink>
						</li>
						{/* <li>
							<NavLink
								to='https://insights.advianpartners.com/insights'
								className={({ isActive }) =>
									isActive ? 'active-link' : undefined
								}
							>
								Insights
							</NavLink>
						</li> */}
						<li>
							<NavLink
								to='/contact'
								className={({ isActive }) =>
									isActive ? 'active-link' : undefined
								}
							>
								CONTACT US
							</NavLink>
						</li>
					</ul>
					<svg
						width='24'
						height='24'
						xmlns='http://www.w3.org/2000/svg'
						fillRule='evenodd'
						clipRule='evenodd'
						tabIndex={0}
						className={hamburger}
						onClick={handleClick}
					>
						<path d='M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z' />
						<path d='M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z' />
					</svg>
				</div>
			</nav>
		</>
	);
}

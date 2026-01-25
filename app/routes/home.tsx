import { Link } from 'react-router';
import type { Route } from './+types/home';
import Svg from '~/components/svg';
import footerLogo from '~/assets/img/footer-logo.png';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Deal Origination | Advisory | Advian Partners' },
		{ name: 'description', content: 'Welcome to Advian Partners' },
		{
			name: 'description',
			content: 'Advian Partners website.',
		},
		{
			name: 'author',
			content: 'John Ozoemena',
		},
		// {
		// 	name: 'robots',
		// 	content: 'noindex',
		// },
		{
			name: 'keywords',
			content:
				'consultancy, consulting, business, business consultancy, business consulting, business development, business development consultancy, business development consulting, business development services, business development service, business development company, business development companies, business development firm, business development firms, business development agency, business development agencies, business development consultant, business development consultants, business development advisor, business development advisors, business development expert, business development experts, business development specialist, business development specialists, business development strategist, business development strategists, financial, financial consultancy, financial consulting, financial services, financial service, financial company, financial companies, financial firm, financial firms, financial agency, financial agencies, financial consultant, financial consultants, financial advisor, financial advisors, financial expert, financial experts, financial specialist, financial specialists, financial strategist, financial strategists, investment, investment consultancy, investment consulting, investment services, investment service, investment company, investment companies, investment firm, investment firms, investment agency, investment agencies, investment consultant, investment consultants, investment advisor, investment advisors, investment expert, investment experts, investment specialist, investment specialists, investment strategist, investment strategists',
		},
	];
}

export default function Home() {
	return (
		<article className='home'>
			<div className='container'>
				<header className='center-align-title'>
					<figure>
						<img
							className='home-logo'
							src={footerLogo}
							alt='business logo.'
							width={300}
							height={30}
						/>
					</figure>
					<p className='h1-sub-text slide-up'>SELECT YOUR INTEREST</p>
				</header>
				<menu className='menu'>
					<li>
						<Link
							to='deal-origination'
							className='menu-list'
						>
							<p className='slide-up animation-duration_1s'>
								<span className='paragraph-title'>Deal Origination</span>
								<span className='paragraph-sub-title'>
									Private Equity, Private Debt, Familiy Offices, Independent
									Sponsors
								</span>
							</p>
							<Svg
								svgProps={{
									clipRule: 'evenodd',
									fillRule: 'evenodd',
									strokeLinejoin: 'round',
									strokeMiterlimit: '2',
									viewBox: '0 0 24 24',
									xmlns: 'http://www.w3.org/2000/svg',
									className: 'home-arrow',
								}}
							>
								<path
									d='m18.787 9.473s-4.505-4.502-6.259-6.255c-.147-.146-.339-.22-.53-.22-.192 0-.384.074-.531.22-1.753 1.753-6.256 6.252-6.256 6.252-.147.147-.219.339-.217.532.001.19.075.38.221.525.292.293.766.295 1.056.004l4.977-4.976v14.692c0 .414.336.75.75.75.413 0 .75-.336.75-.75v-14.692l4.978 4.978c.289.29.762.287 1.055-.006.145-.145.219-.335.221-.525.002-.192-.07-.384-.215-.529z'
									fillRule='nonzero'
								/>
							</Svg>
						</Link>
					</li>
					<li>
						<Link
							to='advisory'
							className='menu-list'
						>
							<p className='slide-up animation-duration_1s'>
								<span className='paragraph-title'>Advisory</span>
								<span className='paragraph-sub-title'>
									Corporate Entities, Portfolio Companies, Start-ups
								</span>
							</p>
							<Svg
								svgProps={{
									clipRule: 'evenodd',
									fillRule: 'evenodd',
									strokeLinejoin: 'round',
									strokeMiterlimit: '2',
									viewBox: '0 0 24 24',
									xmlns: 'http://www.w3.org/2000/svg',
									className: 'home-arrow',
								}}
							>
								<path
									d='m18.787 9.473s-4.505-4.502-6.259-6.255c-.147-.146-.339-.22-.53-.22-.192 0-.384.074-.531.22-1.753 1.753-6.256 6.252-6.256 6.252-.147.147-.219.339-.217.532.001.19.075.38.221.525.292.293.766.295 1.056.004l4.977-4.976v14.692c0 .414.336.75.75.75.413 0 .75-.336.75-.75v-14.692l4.978 4.978c.289.29.762.287 1.055-.006.145-.145.219-.335.221-.525.002-.192-.07-.384-.215-.529z'
									fillRule='nonzero'
								/>
							</Svg>
						</Link>
					</li>
					{/* <li>
						<Link
							to='https://insights.advianpartners.com/insights/'
							className='menu-list'
						>
							<p className='slide-up'>
								<span className='paragraph-title'>Insight</span>
								<span className='paragraph-sub-title'>
									Read our insights on the markets, investment trends, and other
									topic
								</span>
							</p>
							<Svg
								svgProps={{
									xmlns: 'http://www.w3.org/2000/svg',
									width: '24',
									height: '24',
									viewBox: '0 0 24 24',
								}}
							>
								<path d='M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z' />
							</Svg>
						</Link>
					</li> */}
				</menu>
			</div>
		</article>
	);
}

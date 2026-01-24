import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLocation,
	useNavigation,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';
import Nav from './components/nav';
import { Suspense, useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';

export const links: Route.LinksFunction = () => [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '180x180',
		href: 'favicon-32x32.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '16x16',
		href: 'favicon-16x16.png',
	},
	{
		rel: 'apple-touch-icon',
		type: 'image/png',
		sizes: '180x180',
		href: 'apple-touch-icon.png',
	},
];

export function HydrateFallback() {
	return (
		<div id='loading-splash'>
			<div id='loading-splash-spinner' />
			<p>Loading, please wait...</p>
		</div>
	);
}

export function Layout({ children }: { children: React.ReactNode }) {
	const location = useLocation();
	const navigation = useNavigation();

	useEffect(() => {
		const script = document.createElement('script');
		script.textContent = `
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-NV6FCDSQLY');
		`;
		document.head.appendChild(script);
	}, []);

	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<Meta />
				<Links />
				{/* <!-- Google tag (gtag.js) --> */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-NV6FCDSQLY'
				></script>
				<title>Advian Partners | Strategic Advisory and Sustainability</title>
			</head>
			<body className={navigation.state === 'loading' ? 'loading' : ''}>
				{location.pathname === '/' ? null : <Nav />}
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<>
			<Outlet />
			<Suspense>
				<CookieConsent
					enableDeclineButton
					buttonText='I accept'
					cookieName='consentCookie'
					style={{ background: '#1c263254', color: '#EDE9DE' }}
					buttonStyle={{ background: '#1C2632', color: '#F1F7F6' }}
					declineButtonStyle={{ background: '#EDE9DE', color: '#1C2632' }}
					onAccept={() => {
						// Handle cookie acceptance (e.g., set analytics cookies)
						console.log('Cookies accepted');
					}}
					onDecline={() => {
						// Handle cookie decline (e.g., disable analytics)
						console.log('Cookies declined');
					}}
				>
					This website uses cookies to enhance the user experience.
				</CookieConsent>
			</Suspense>
		</>
	);
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oops!';
	let details = 'An unexpected error occurred.';
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';
		details =
			error.status === 404
				? 'The requested page could not be found.'
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className='pt-16 p-4 container mx-auto'>
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className='w-full p-4 overflow-x-auto'>
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}

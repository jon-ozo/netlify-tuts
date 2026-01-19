import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),
	route('deal-orientation', 'routes/deal-orientation.tsx'),
	route('advisory', 'routes/advisory.tsx'),
	route('cookie-policy', 'routes/cookie-policy.tsx'),
	route('contact', 'routes/contact.tsx'),
	route('contact/send-email', 'routes/send-email.tsx'),
] satisfies RouteConfig;

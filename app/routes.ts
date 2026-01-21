import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),
	route('deal-origination', 'routes/deal-origination.tsx'),
	route('advisory', 'routes/advisory.tsx'),
	route('cookie-policy', 'routes/cookie-policy.tsx'),
	route('contact', 'routes/contact.tsx'),
	route('contact/send-email', 'routes/send-email.tsx'),
	route('legal-notice', 'routes/legal-notice.tsx'),
	route('privacy-policy', 'routes/privacy-policy.tsx'),
	route('terms-of-service', 'routes/terms-of-service.tsx'),
] satisfies RouteConfig;

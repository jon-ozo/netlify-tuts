import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route('about', 'routes/about.tsx'), route('contact', 'contact.tsx'), route('services', 'routes/service.tsx')] satisfies RouteConfig;

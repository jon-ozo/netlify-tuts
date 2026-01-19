import { redirect } from 'react-router';
import type { Route } from './+types/send-email';
import { Resend } from 'resend';

const resend = new Resend('re_GHinGnub_Df9LYWkSs3T1tthSHPNyKdpc');

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
	const url = new URL(request.url);
	const arr: Array<string> = [];

	url.searchParams.forEach((param) => arr.push(param));

	const [firstName, lastName, title, company, email, message] = arr;

	const { data, error } = await resend.emails.send({
		from: 'no-reply <no-reply@advianpartners.com>',
		to: ['johnozoemena@gmail.com'],
		subject: 'New Contact Form Submission',
		html: `<h1>New Contact Form Message</h1>
	    <ul>
	      <li>First name: ${firstName}</li>
	      <li>Last name: ${lastName}</li>
	      <li>Title: ${title}</li>
	      <li>Company: ${company}</li>
	      <li>Email: ${email}</li>
	      <li>Message: ${message}</li>
	    </ul>
	    `,
	});

	redirect('/contact');
}

import emailjs from '@emailjs/browser';
// import ReCAPTCHA from 'react-google-recaptcha';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import contactImg from '~/assets/img/contact-logo.png';

export default function Contact() {
	const [successStatus, setSuccessStatus] = useState('');
	// const [capValue, setCapValue] = useState<string | null>(null);
	const form = useRef<HTMLFormElement | null>(null);
	const ref = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		setTimeout(() => {
			setSuccessStatus('');
		}, 5000);
	}, [successStatus]);

	const sendEmail = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_es2d1h7',
				'template_ux116fi',
				form.current as HTMLFormElement,
				{
					publicKey: 'rrg6q72AOcAvMiuIO',
				},
			)
			.then(
				() => {
					setSuccessStatus('success');
					console.log('SUCCESS!');
				},
				(error) => {
					setSuccessStatus('error');
					console.log('FAILED...', error.text);
				},
			);
	};

	function handleEmailHref() {
		let href = ref.current?.getAttribute('href');
		href = href + 'contact@advianpartners.com';
	}

	return (
		<article className='contact-page-container'>
			<header className='container margin-top flex-display-column row-gap-s'>
				<h2 className='container center-align-title slide-up margin-top'>
					Talk to Us
				</h2>
				<p className='center-sub-text slide-up'>
					For both our Deal Origination and advisory services, we deliver
					bespoke and tailored solutions to our clients. Complete this brief
					form to discuss engagement options.
				</p>
			</header>
			<form
				id='demo-form'
				ref={form}
				onSubmit={sendEmail}
			>
				<ul className='grid-display-form'>
					<li>
						<label htmlFor='firstName'>First name</label>
						<input
							type='text'
							id='firstName'
							name='fname'
							placeholder='First name'
							required
						/>
					</li>
					<li>
						<label htmlFor='lastName'>Last name</label>
						<input
							type='text'
							id='lastName'
							name='lname'
							placeholder='Last name'
							required
						/>
					</li>
				</ul>
				<div>
					<label htmlFor='company'>Company</label>
					<input
						type='text'
						id='company'
						name='company'
						placeholder='Company'
						required
					/>
				</div>

				<div>
					<label htmlFor='Email'>Email</label>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='Email'
						required
					/>
				</div>

				<div>
					<label htmlFor='interest'>Interest</label>
					<select
						id='interest'
						name='interest'
						required
					>
						<option
							value='Deal origination'
							disabled
							selected
						>
							What Service Peaked Your Interest?
						</option>
						<option value='Advisory'>Advisory Services</option>
					</select>
				</div>

				<div>
					<textarea
						name='message'
						cols={10}
						rows={10}
						id='mssg'
						placeholder='How May We Help?'
						required
					></textarea>
				</div>

				{/* <div>
					<ReCAPTCHA
						sitekey={'6LcNJTIrAAAAAG0oNXBhiUOSbqpswTqLlM5skEBs'}
						onChange={(val) => setCapValue(val)}
					/>
				</div> */}

				<div className='center-button'>
					<button
						type='submit'
						className='submit'
					>
						Submit
					</button>
				</div>

				{successStatus === 'success' && (
					<div className='success'>Email sent successfully</div>
				)}
				{successStatus === 'error' && (
					<div className='error'>Failed to send Email</div>
				)}
			</form>

			<address className='center-sub-text slide-up'>
				<figure className='container contact-logo'>
					<img
						src={contactImg}
						alt='business logo.'
						width={200}
						height={40}
					/>
				</figure>
				60, rue Francois 1er,
				<br />
				75008, Paris, <br /> France.
				<p className='center-sub-text slide-up'>
					<Link
						ref={ref}
						onClick={handleEmailHref}
						to='mailto:'
						className='email'
					>
						contact@<b className='hide-fake-text'>faketext</b>advianpartners.com
					</Link>
				</p>
			</address>
		</article>
	);
}

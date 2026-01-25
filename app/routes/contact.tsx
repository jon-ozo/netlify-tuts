import emailjs from '@emailjs/browser';
// import ReCAPTCHA from 'react-google-recaptcha';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import contactImg from '~/assets/img/contact-logo.png';
import Copyright from '~/components/copyright';
import Svg from '~/components/svg';

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
				<h2 className='container center-align-title slide-up animation-duration_1s margin-top'>
					Talk to Us
				</h2>
				<p className='center-sub-text slide-up animation-duration_1s'>
					For both our deal origination and advisory services, we deliver
					bespoke and tailored solutions to our clients. Complete this brief
					form to discuss engagement options.
				</p>
			</header>
			<form
				id='demo-form'
				ref={form}
				onSubmit={sendEmail}
				className='slide-up animation-duration_1s'
			>
				<ul className='grid-display-form animate-list'>
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

				<div className='custom-select'>
					<label htmlFor='interest'>Interest</label>
					<select
						id='interest'
						name='interest'
						required
					>
						<option value=''>What interests you?</option>
						<option value='deal origination'>Deal Origination</option>
						<option value='advisory'>Advisory Services</option>
					</select>
					<div className='select-arrow'>
						<Svg
							svgProps={{
								viewBox: '0 0 24 24',
								xmlns: 'http://www.w3.org/2000/svg',
								fillRule: 'evenodd',
								clipRule: 'evenodd',
							}}
						>
							<path d='M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z' />
						</Svg>
					</div>
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
				60, rue François 1er,
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
			<Copyright />
		</article>
	);
}

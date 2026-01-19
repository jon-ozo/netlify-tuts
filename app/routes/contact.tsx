import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
	const [successStatus, setSuccessStatus] = useState('');
	const [capValue, setCapValue] = useState<string | null>(null);
	const form = useRef<HTMLFormElement | null>(null);

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

	return (
		<article className='contact-page-container'>
			<header className='center-heading margin-top flex-display-column row-gap-s'>
				<h2 className='slide-up margin-top'>Talk to Us</h2>
				<p className='slide-up align-text-left'>
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
							value=''
							disabled
							selected
						>
							What Service Peaked Your Interest?
						</option>
						{/* <option value='Financial Advisory'>Financial Advisory</option>
						<option value='Mergers & Acquisitions'>
							Mergers & Acquisitions
						</option>
						<option value='Capital Raising'>Capital Raising</option>
						<option value='Consulting Services'>Consulting Services</option> */}
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

				<div>
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
		</article>
	);
}

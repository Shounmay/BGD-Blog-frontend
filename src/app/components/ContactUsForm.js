import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const ContactUsForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle the form submission logic here
		console.log({ name, email, phone, message });
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col space-y-4  p-4 rounded'
		>
			<input
				type='text'
				placeholder='Name'
				value={name}
				onChange={(e) => setName(e.target.value)}
				className='p-2 border border-gray-300 rounded'
			/>
			<input
				type='email'
				placeholder='Email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className='p-2 border border-gray-300 rounded'
			/>
			<PhoneInput
				placeholder='Phone number'
				value={phone}
				onChange={setPhone}
				className='p-2 border border-gray-300 rounded'
			/>
			<textarea
				placeholder='Message'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				className='p-2 border border-gray-300 rounded'
				rows='4'
			/>
			<button
				type='submit'
				className='bg-black text-white font-semibold py-2 rounded hover:bg-gray-700 transition duration-300'
			>
				Contact Us
			</button>
		</form>
	);
};

export default ContactUsForm;

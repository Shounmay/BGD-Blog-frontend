'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleLogin = () => {
		// Implement your login logic here
		// ...

		// Example: Check credentials and redirect after successful login
		if (email === 'user@example.com' && password === 'password') {
			// Redirect to dashboard or any other protected route
			// You can replace '/dashboard' with the desired route
			window.location.href = '/dashboard';
		} else {
			setError('Invalid email or password');
		}
	};

	return (
		<div>
			<Navbar />
			<div className='flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500'>
				<div className='bg-white p-8 rounded shadow-md w-96'>
					<h1 className='text-3xl font-extrabold mb-6 text-center text-gray-800'>
						Login
					</h1>
					<input
						type='email'
						placeholder='Email'
						className='w-full p-2 mb-4 rounded border border-gray-300'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type='password'
						placeholder='Password'
						className='w-full p-2 mb-4 rounded border border-gray-300'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					{error && <p className='text-red-500 mb-4'>{error}</p>}

					<button
						className='bg-blue-500 text-white p-2 rounded w-full'
						onClick={handleLogin}
					>
						Login
					</button>

					{/* Link to redirect to signup page */}
					<Link href='/signup' className='text-blue-500 block mt-4 text-center'>
						Don't have an account? Signup
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;

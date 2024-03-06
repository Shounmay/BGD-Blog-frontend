// pages/signup.js

'use client';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import api from '../../../../../Blog-Dashboard/frontend/src/utils/api';
import { useRouter } from 'next/navigation';

const Signup = () => {
	const router = useRouter();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [profilePicture, setProfilePicture] = useState(null);
	const [fileType, setFileType] = useState('');
	const handleSignup = async () => {
		try {
			let image = '';
			if (profilePicture) {
				console.log(fileType);
				const { data } = await api.post('/upload-image', {
					image: profilePicture,
					type: fileType,
				});
				setProfilePicture(data.Location);
				image = data.Location;
			}
			if (!profilePicture) {
				image = "<i className='bi bi-person-circle'></i>";
			}

			// Form validation

			if (name.length < 3) {
				throw new Error('Name should be at least 3 characters long');
			}

			// Form validation
			if (!name || !email || !password || !confirmPassword) {
				throw new Error('Please fill in all fields');
			}

			// Password validation
			if (password.length < 6) {
				throw new Error('Password should be at least 6 characters long');
			}

			// Password matching
			if (password !== confirmPassword) {
				throw new Error('Passwords do not match');
			}

			// send request to backend server to register user and get the tokens

			const { data: authData } = await api.post('/auth/register', {
				name,
				email,
				password,
				profileImage: image,
			});

			// console.log(authData.newUser);

			const { sessionToken: token } = authData.newUser.authentication;
			// console.log(token);
			const res = await fetch('/api/setToken', {
				method: 'POST',
				body: { token },
			});
			console.log(res);

			toast.success('Signup successful');
			// router.push('/');
		} catch (error) {
			toast.error(error.response.data);
			// console.log(error.response.data);
		}
	};
	const handleProfilePictureChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();
			setFileType(file.type.split('/')[1]);

			reader.onloadend = () => {
				setProfilePicture(reader.result);
			};

			reader.readAsDataURL(file);
		}
	};

	return (
		<div>
			<Navbar />
			<div className='flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500'>
				<div className='bg-gray-200 p-8 rounded shadow-md w-96'>
					<h1 className='text-2xl font-bold mb-4'>Signup</h1>
					<input
						type='text'
						placeholder='Name'
						className='w-full p-2 mb-2 rounded'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type='email'
						placeholder='Email'
						className='w-full p-2 mb-2 rounded'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<div className='relative'>
						<input
							type={showPassword ? 'text' : 'password'}
							placeholder='Password'
							className='w-full p-2 mb-2 rounded'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<span
							className='absolute top-2 right-2 cursor-pointer'
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? '👁️' : '👁️‍🗨️'}
						</span>
					</div>
					<div className='relative'>
						<input
							type={showConfirmPassword ? 'text' : 'password'}
							placeholder='Confirm Password'
							className='w-full p-2 mb-2 rounded'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						<span
							className='absolute top-2 right-2 cursor-pointer'
							onClick={() => setShowConfirmPassword(!showConfirmPassword)}
						>
							{showConfirmPassword ? '👁️' : '👁️‍🗨️'}
						</span>
					</div>

					<div className='mb-2'>
						<label htmlFor='profilePicture' className='block text-gray-700'>
							Profile Picture
						</label>
						<input
							type='file'
							id='profilePicture'
							accept='image/*'
							onChange={handleProfilePictureChange}
						/>
					</div>

					{profilePicture ? (
						<div className='mb-2'>
							<img
								src={profilePicture}
								alt='profile'
								className='rounded-full w-16 h-16 object-cover'
							/>
						</div>
					) : (
						<div className='mb-2'>
							<div className='rounded-full w-8 h-8 bg-gray-300 flex items-center justify-center'>
								<i className='bi bi-person-circle'></i>
							</div>
						</div>
					)}

					<button
						className='bg-blue-500 text-white p-2 rounded mt-4'
						onClick={handleSignup}
					>
						Signup
					</button>

					{/* Link to redirect to login page */}
					<Link href='/login' className='text-blue-500 block mt-2'>
						Already have an account? Login
					</Link>

					{/* Toast Container for displaying notifications */}
					<ToastContainer />
				</div>
			</div>
		</div>
	);
};

export default Signup;

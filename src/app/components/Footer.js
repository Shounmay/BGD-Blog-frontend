'use client';

import React from 'react';
// Replace with your actual logo SVG

const Footer = () => {
	return (
		<footer className='bg-gray-100 text-gray-800 py-6'>
			<div className='max-w-6xl mx-auto px-4'>
				<div className='flex flex-wrap justify-between'>
					<div className='w-full sm:w-auto mb-6 sm:mb-0'>
						<ul className='space-y-4'>
							<li>
								<a href='/work-with-us' className='hover:underline'>
									Work With Us
								</a>
							</li>
							<li>
								<a href='/advertise' className='hover:underline'>
									Advertise With Us
								</a>
							</li>
							<li>
								<a href='/report' className='hover:underline'>
									Report a Bug
								</a>
							</li>
						</ul>
					</div>
					<div className='w-full sm:w-auto mb-6 sm:mb-0'>
						<ul className='space-y-4'>
							<li>
								<a href='/coaching' className='hover:underline'>
									Private Coaching
								</a>
							</li>
							<li>
								<a href='/our-work' className='hover:underline'>
									Our Work
								</a>
							</li>
						</ul>
					</div>
					<div className='w-full sm:w-auto mb-6 sm:mb-0'>
						<ul className='space-y-4'>
							<li>
								<a href='/about' className='hover:underline'>
									About Us
								</a>
							</li>
							<li>
								<a href='/faqs' className='hover:underline'>
									FAQs
								</a>
							</li>
						</ul>
					</div>
					<div className='w-full sm:w-auto mb-6 sm:mb-0'>
						<ul className='space-y-4'>
							<li>
								<a href='/support' className='hover:underline'>
									Support Us
								</a>
							</li>
							<li>
								<a href='/business-advice' className='hover:underline'>
									Business Advices
								</a>
							</li>
							<li>
								<a href='/our-team' className='hover:underline'>
									Our Team
								</a>
							</li>
						</ul>
					</div>
					<div className='w-full sm:w-auto'>
						<ul className='space-y-4'>
							<li>
								<a href='/commitment' className='hover:underline'>
									Our Commitment
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='flex flex-wrap justify-center mt-8'>
					<a href='/instagram' className='mx-2'>
						<i className='fab fa-instagram'></i>
					</a>
					<a href='/twitter' className='mx-2'>
						<i className='fab fa-twitter'></i>
					</a>
					<a href='/facebook' className='mx-2'>
						<i className='fab fa-facebook-f'></i>
					</a>
					<a href='/linkedin' className='mx-2'>
						<i className='fab fa-linkedin-in'></i>
					</a>
				</div>
				<div className='flex justify-center mt-8'>
					<img src='/logo.png' alt='Logo' className='h-10' />{' '}
					{/* Adjust height as needed */}
				</div>
				<div className='text-center mt-8'>
					<p className='text-sm'>Copyright © 2023 Bigstate.inc</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

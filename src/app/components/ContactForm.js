'use client';

import { Popover } from '@headlessui/react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useState } from 'react';
import ContactFormModal from './ContactFormModal';
export default function ContactForm() {
	const [showContactFormModal, setShowContactFormModal] = useState(undefined);
	function openContactFormModal() {
		setShowContactFormModal({
			onClose: () => {
				setShowContactFormModal(undefined);
			},
		});
	}
	return (
		<div>
			<div className=' p-2 flex justify-center items-center'>
				<div className='text-left'>
					<h2 className='text-2xl font-semibold text-gray-700 mb-3'>
						Looking for Your Dream Home?
					</h2>
					<p className='text-gray-600 mb-6'>
						Get in touch with us today and let us help you find the perfect
						property!
					</p>
					<button
						onClick={openContactFormModal}
						className='bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition-all duration-200 cursor-pointer'
					>
						Contact Us
					</button>
				</div>
			</div>
			<ContactFormModal
				isOpen={!!showContactFormModal}
				onClose={showContactFormModal && showContactFormModal.onClose}
			/>
		</div>
	);
}

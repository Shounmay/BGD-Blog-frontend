'use client';

import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useParams, useRouter } from 'next/navigation';
export default function CategoryDropdown(props) {
	const { categories } = props;

	const params = useParams();

	const router = useRouter();
	return (
		<div className='  text-right'>
			<Menu as='div' className='relative inline-block text-left'>
				<div>
					<Menu.Button className='inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-slate-700  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'>
						{params?.category
							? decodeURIComponent(params.category)
							: 'Categories'}
						<ChevronDownIcon
							className='-mr-1 ml-2 h-5 w-5 text-slate-700 hover:text-slate-800'
							aria-hidden='true'
						/>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter='transition ease-out duration-100'
					enterFrom='transform opacity-0 scale-95'
					enterTo='transform opacity-100 scale-100'
					leave='transition ease-in duration-75'
					leaveFrom='transform opacity-100 scale-100'
					leaveTo='transform opacity-0 scale-95'
				>
					<Menu.Items className='absolute p-2 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
						{categories.map((category) => (
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active ? 'bg-blue-500 text-white' : 'text-gray-900'
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
										onClick={() => {
											router.push(`/home/${category}/1`);
										}}
									>
										{category}
									</button>
								)}
							</Menu.Item>
						))}
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}

function EditInactiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4 13V16H7L16 7L13 4L4 13Z'
				fill='#EDE9FE'
				stroke='#A78BFA'
				strokeWidth='2'
			/>
		</svg>
	);
}

function EditActiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4 13V16H7L16 7L13 4L4 13Z'
				fill='#8B5CF6'
				stroke='#C4B5FD'
				strokeWidth='2'
			/>
		</svg>
	);
}

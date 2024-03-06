'use client';
import { RWebShare } from 'react-web-share';
import {
	ChartBarIcon,
	ShareIcon,
	UserCircleIcon,
	ClockIcon,
	MinusIcon,
} from '@heroicons/react/24/solid';

export default function ShareComponent({ title, slug }) {
	const handleShareClick = () => {};
	return (
		<RWebShare
			data={{
				text: 'Share Blog',
				title: `${title}`,
				url: `http://localhost:3000/Blog/${slug}`,
			}}
		>
			<button
				onClick={handleShareClick}
				className='flex flex-col items-center justify-center w-4 h-4 rounded-full shadow'
			>
				<ShareIcon className='w-4 h-4 text-white font-medium' />
			</button>
		</RWebShare>
	);
}

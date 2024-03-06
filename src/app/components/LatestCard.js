import { ClockIcon, MinusIcon } from '@heroicons/react/24/solid';

const LatestCard = ({ title, description, date, readingTime }) => {
	return (
		<div className='mb-4 border bg-white  p-4 rounded'>
			<p className='font-bold mb-1'>{title}</p>
			<p className='text-sm mb-2'>{description}</p>
			<div className='flex items-center space-x-2  text-xs'>
				<p>{date}</p>
				<MinusIcon className='w-4' />
				<ClockIcon className='w-2 ' />
				<p>{readingTime} minute read</p>
			</div>
		</div>
	);
};

export default LatestCard;

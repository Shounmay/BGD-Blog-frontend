import { ClockIcon, MinusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
const YouMayLikeCard = ({
	imageSrc,
	title,
	description,
	date,
	readingTime,
	slug,
}) => {
	return (
		<Link href={`http://localhost:3000/Blog/${slug}`} className='col-span-4'>
			<div className='mb-4'>
				{/* Image */}
				<img
					src={imageSrc}
					alt={title}
					className='w-full h-48 object-cover mb-2'
				/>

				{/* Title */}
				<p
					className='font-bold mb-1'
					style={{
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
					}}
				>
					{title}
				</p>

				{/* Description */}
				<p
					className='text-sm mb-2'
					style={{
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
					}}
				>
					{description}
				</p>

				{/* Date, Clock Icon, and 2 Minute Read */}
				<div className='flex items-center space-x-2 text-gray-500 text-xs'>
					<p className='mr-2'>{date}</p>
					<MinusIcon className='w-8 pl-0' />
					<ClockIcon className='w-3' />
					<p>{readingTime} minute read</p>
				</div>
			</div>
		</Link>
	);
};

export default YouMayLikeCard;

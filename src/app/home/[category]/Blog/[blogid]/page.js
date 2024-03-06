import LatestCard from '@/app/components/LatestCard';
import Navbar from '@/app/components/Navbar';
import YouMayLikeCard from '@/app/components/YouMayLikeCard';
import api from '@/utils/api';
import {
	ChartBarIcon,
	ShareIcon,
	UserCircleIcon,
	ClockIcon,
	MinusIcon,
} from '@heroicons/react/24/solid';

export async function getBlog(slug) {
	const { data } = await api.get(`/blog/${slug}`);

	return data;
}
export default async function Blog({ params }) {
	const slug = params.blogid;
	const data = await getBlog(slug);

	const {
		content,
		youtubeLikes,
		coverImageUrl,
		coverTitle,
		coverDescription,
		metaLikes,
		xLikes,
		instaLikes,
		views,
		shares,
		readingTime,
		title,
		description,
		createdAt,
	} = data;
	const username = 'BGD';
	let postedAt = new Date(createdAt);
	postedAt = `${postedAt.getDate()}-${
		postedAt.getMonth() + 1
	}-${postedAt.getFullYear()}`;

	const generateHTML = () => {
		return { __html: content };
	};

	return (
		<div>
			<Navbar />

			{/* Image Section with Text Aligned Downwards */}
			<div
				className='relative h-96 bg-cover bg-center'
				style={{ backgroundImage: `url(${coverImageUrl})` }}
			>
				<div className='absolute bg-overlay inset-0 flex flex-col justify-end p-6 pl-32 '>
					{/* Blog Content */}
					<h2 className='text-4xl font-bold mb-2 text-white w-1/2'>
						{coverTitle}
					</h2>
					<p className='text-white  font-medium text-lg w-1/3'>
						{coverDescription}
					</p>

					{/* <p className='text-white font-normal'>
						by Author - <ClockIcon className='w-4' />2 min read - 1.6K views
					</p> */}
					<div className='flex items-center '>
						<p className='mr-2 text-white font-normal'>By {username}</p>
						<MinusIcon className='w-16 text-white' />

						{/* Clock Icon */}
						<ClockIcon className='w-3 text-white ' />

						{/* 2 min read */}
						<p className=' text-white pl-2'>{readingTime} min read</p>

						<MinusIcon className='w-16 text-white' />

						<ChartBarIcon className='w-3 text-white' />

						<p className='text-white pl-2'>{views} views</p>
					</div>
				</div>
			</div>

			{/* Body Section */}
			<div className='container mx-auto mt-8 flex gap-8'>
				{/* Left End */}
				<div className='flex flex-col'>
					<div className='bg-gray-200 p-4 mb-4'>
						<ChartBarIcon className='w-5' />
						<p className='font-normal text-sm '>Views</p>
						<p className='font-normal text-sm '>{views}</p>
					</div>
					<div className='bg-gray-200 p-4'>
						<ShareIcon className='w-5' />
						<p className='font-normal text-sm '>Shares</p>
						<p className='font-normal text-sm '>{shares}</p>
					</div>
					<div className='bg-gray-200 p-4'>
						<ShareIcon className='w-5' />
						<p className='font-normal text-sm '>Shares</p>
						<p className='font-normal text-sm '>{shares}</p>
					</div>
				</div>

				{/* Center */}
				<div className='flex-1'>
					{/* Blog Body */}
					<div
						className='text-lg pr-2 text-justify'
						dangerouslySetInnerHTML={{ __html: content }}
					></div>
					<div className='flex items-center space-x-64 mt-4'>
						{/* Replace these with actual social media icons */}
						<div>
							<i className='bi bi-facebook'></i>
							<p>{metaLikes}</p>
						</div>
						<div>
							<i className='bi bi-twitter-x'></i>
							<p>{xLikes}</p>
						</div>
						<div>
							<i className='bi bi-instagram'></i>
							<p>{instaLikes}</p>
						</div>
						<div>
							<i className='bi bi-youtube'></i>
							<p>{youtubeLikes}</p>
						</div>
					</div>

					{/* View Comments Button */}
					{/* <button className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 cursor-pointer mt-4'>
						View Comments
					</button> */}
					<div className='mt-8'>
						<p className='font-bold'>Sign Up For Our Newsletter</p>
						<p className='text-gray-500'>Get Notified Of the Best Deals</p>
						<div className='flex mt-4'>
							<input
								type='email'
								placeholder='Enter Your Email'
								className='w-1/2 p-2 border border-gray-300 rounded mr-2'
							/>
							<input
								type='text'
								placeholder='Enter Your Name'
								className='w-1/2 p-2 border border-gray-300 rounded'
							/>
						</div>
						<button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer mt-4'>
							Subscribe
						</button>
						<div className='flex items-center mt-2'>
							<input type='checkbox' className='mr-2' />
							<p className='text-gray-500 text-sm'>
								I agree to the Terms and Conditions
							</p>
						</div>
					</div>
					<div className='mt-8'>
						<h4 className='text-md font-bold text-slate-800 mb-3'>
							You May Also Like
						</h4>

						{/* Row 1 */}
						<div className='flex space-x-4'>
							{/* Card 1 */}
							<YouMayLikeCard
								imageSrc='/House-9.jpg'
								title='Card 1 Title'
								description='Card 1 Description line 1. Card 1 Description line 2.'
								date={postedAt}
								readingTime={readingTime}
							/>

							{/* Card 2 */}
							<YouMayLikeCard
								imageSrc='/House-9.jpg'
								title='Card 2 Title'
								description='Card 2 Description line 1. Card 2 Description line 2.'
								date={postedAt}
								readingTime={readingTime}
							/>

							{/* Card 3 */}
							<YouMayLikeCard
								imageSrc='/House-9.jpg'
								title='Card 3 Title'
								description='Card 3 Description line 1. Card 3 Description line 2.'
								date={postedAt}
								readingTime={readingTime}
							/>

							{/* Card 4 */}
							<YouMayLikeCard
								imageSrc='/House-9.jpg'
								title='Card 4 Title'
								description='Card 4 Description line 1. Card 4 Description line 2.'
								date={postedAt}
								readingTime={readingTime}
							/>
						</div>

						{/* Row 2 */}
						<div className='flex space-x-4 mt-4'>
							{/* Card 5 */}
							<YouMayLikeCard
								imageSrc='/House-9.jpg'
								title='Card 5 Title'
								description='Card 5 Description line 1. Card 5 Description line 2.'
								date={postedAt}
								readingTime={readingTime}
							/>

							{/* Card 6 */}
							<YouMayLikeCard
								imageSrc='/House-9.jpg'
								title='Card 6 Title'
								description='Card 6 Description line 1. Card 6 Description line 2.'
								date={postedAt}
								readingTime={readingTime}
							/>

							{/* Card 7 */}
							<YouMayLikeCard
								imageSrc='/House-9.jpg'
								title='Card 7 Title'
								description='Card 7 Description line 1. Card 7 Description line 2.'
								date={postedAt}
								readingTime={readingTime}
							/>

							{/* Card 8 */}
							<YouMayLikeCard
								imageSrc='/House-9.jpg'
								title='Card 8 Title'
								description='Card 8 Description line 1. Card 8 Description line 2.'
								date={postedAt}
								readingTime={readingTime}
							/>
						</div>
					</div>
				</div>

				{/* Right End */}
				<div className='flex flex-col'>
					{/* Follow Us Title */}
					<div className='bg-gray-200 p-4 mb-4'>
						<p className='font-bold mb-2'>Follow Us</p>
						{/* Social Media Icons */}
						<div className='flex space-x-16'>
							{/* Replace these with actual social media icons */}

							<div>
								<i className='bi bi-facebook'></i>
								<p>{metaLikes}</p>
							</div>
							<div>
								<i className='bi bi-twitter-x'></i>
								<p>{xLikes}</p>
							</div>
							<div>
								<i className='bi bi-instagram'></i>
								<p>{instaLikes}</p>
							</div>
							<div>
								<i className='bi bi-youtube'></i>
								<p>{youtubeLikes}</p>
							</div>
						</div>
					</div>

					{/* Subscribe Section */}
					<div className='bg-gray-200 p-4 mb-4'>
						{/* Subscribe Input */}
						<input
							type='email'
							placeholder='Your Email'
							className='w-full p-2 border border-gray-300 rounded'
						/>
					</div>
					<div className='bg-gray-200 p-4'>
						{/* Subscribe Button */}
						<button className='w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer'>
							Subscribe
						</button>
						<div className='flex items-center pt-4'>
							<input type='checkbox' className='mr-2' />
							<p>I agree to the Terms and Conditions</p>
						</div>
					</div>
					<div className='bg-gray-200 p-4'>
						<h4 className='text-md font-bold text-slate-800 mb-3'>Latest</h4>

						{/* Card 1 */}
						<LatestCard
							title='Latest News Title 1'
							description='Description line 1. Description line 2. Description line 3.'
							date={postedAt}
							readingTime={readingTime}
						/>

						{/* Card 2 */}
						<LatestCard
							title='Latest News Title 2'
							description='Description line 1. Description line 2. Description line 3.'
							date={postedAt}
							readingTime={readingTime}
						/>

						{/* Card 3 */}
						<LatestCard
							title='Latest News Title 3'
							description='Description line 1. Description line 2. Description line 3.'
							date={postedAt}
							readingTime={readingTime}
						/>

						{/* Card 4 */}
						<LatestCard
							title='Latest News Title 4'
							description='Description line 1. Description line 2. Description line 3.'
							date={postedAt}
							readingTime={readingTime}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

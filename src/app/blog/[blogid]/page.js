import LatestCard from '@/app/components/LatestCard';
import Navbar from '@/app/components/Navbar';
import Head from 'next/head';
import YouMayLikeCard from '@/app/components/YouMayLikeCard';
import api from '@/utils/api';
import HtmlContent from '@/app/components/HtmlContent';
import DOMPurify from 'isomorphic-dompurify';
import Script from 'next/script';
import {
	ChartBarIcon,
	ShareIcon,
	UserCircleIcon,
	ClockIcon,
	MinusIcon,
} from '@heroicons/react/24/solid';
import ShareComponent from '@/app/components/ShareComponent';
import ContactForm from '@/app/components/ContactForm';
import ContactFormModal from '@/app/components/ContactFormModal';
import SocialShare from '@/app/components/SocialShare';
import SocialShareVertical from '@/app/components/SocialShareVertical';

export async function getBlog(slug) {
	const { data } = await api.get(`/blog/${slug}`);

	return data;
}

export async function getRelatedBlogs(category) {
	const blogs = (await api.get(`/blog/get-highest-score-blog/${category}`))
		.data;

	return blogs;
}

export async function generateMetadata({ params }) {
	const slug = params.blogid;
	const data = await getBlog(slug);
	return {
		title: data.coverTitle,
		description: data.coverDescription,
		openGraph: {
			title: data.coverTitle,
			description: data.coverDescription,
			images: [data.coverImageUrl],
		},
	};
}

export default async function Blog({ params }) {
	const slug = params.blogid;
	const data = await getBlog(slug);
	const blogs = await getRelatedBlogs(data.category);
	const relatedBlogs = blogs.map((blog) => {
		// Add the 'username' property with the value 'BGD'
		blog.username = 'BGD';

		// Extract the 'updatedAt' value and create a 'posted' property with the formatted date
		const updatedAt = new Date(blog.updatedAt);
		const posted = `${updatedAt.getDate()}-${
			updatedAt.getMonth() + 1
		}-${updatedAt.getFullYear()}`;

		blog.posted = posted;

		// Return the updated blog object
		return blog;
	});
	let latestBlogs = relatedBlogs.slice(0, 4); // Get the first 4 objects
	let relatedList = relatedBlogs.slice(0, 6); // Get the first 6 objects

	const latestCards = latestBlogs.map((blog, index) => (
		<LatestCard
			key={index} // Don't forget to provide a unique key
			title={blog.title}
			description={blog.description}
			date={blog.posted}
			readingTime={blog.readingTime}
		/>
	));

	const relatedCards = relatedList.map((blog, index) => (
		<YouMayLikeCard
			key={index}
			imageSrc={blog.coverImageUrl}
			title={blog.title}
			description={blog.description}
			date={blog.posted}
			readingTime={blog.readingTime}
			slug={blog.slug}
		/>
	));

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

	const tags = ['tag1', 'tag2', 'tag3'];

	const username = 'BGD';
	const innerHtml = DOMPurify.sanitize(content);
	console.log(innerHtml);
	let postedAt = new Date(createdAt);
	postedAt = `${postedAt.getDate()}-${
		postedAt.getMonth() + 1
	}-${postedAt.getFullYear()}`;

	const generateHTML = () => {
		return { __html: content };
	};

	return (
		<div>
			<Head>
				<title>{coverTitle}</title>
				<meta name='description' content={coverDescription} key='desc' />
			</Head>
			<Navbar />

			{/* Image Section with Text Aligned Downwards */}
			<div
				className='relative min-h-[480px] bg-cover bg-center sm:min-h-[34rem] flex items-end justify-center'
				style={{ backgroundImage: `url(${coverImageUrl})` }}
			>
				<div className='max-w-7xl mx-auto z-20 flex gap-8'>
					<div className='w-1/12'></div>
					<div className='w-8/12 flex flex-col justify-start '>
						{/* Blog Content */}

						<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white uppercase mt-8 md:mt-32'>
							{coverTitle}
						</h2>
						<p className='text-white text-xl sm:text-3xl font-light mb-4 mt-4'>
							{coverDescription}
						</p>

						{/* Info Bar */}
						<div className='flex items-center  space-x-1   md:mt-8 mb-14'>
							<p className='text-white font-medium text-xs sm:text-sm '>
								by {username}
							</p>
							<MinusIcon className='w-3 h-3 text-white' />
							<div className='flex items-center'>
								<ClockIcon className='w-3 h-3 text-white mr-2' />
								<p className='text-white font-medium text-xs sm:text-sm truncate'>
									{readingTime} min read
								</p>
							</div>
							<MinusIcon className='w-3 h-3 text-white' />
							<div className='flex items-center'>
								<ChartBarIcon className='w-3 h-3 text-white mr-2' />
								<p className='text-white font-medium text-xs sm:text-sm truncate'>
									{views} views
								</p>
							</div>
						</div>

						{/* Tag Bar */}
						<div className='flex items-center space-x-1  mb-14 gap-4'>
							{tags.map((tag, index) => (
								<div
									key={index}
									className='bg-white bg-opacity-50 flex gap-1 text-white font-light italic text-xs sm:text-sm px-3 py-1 rounded-full truncate'
								>
									<span className='text-slate-200'>#</span>
									<span>{tag}</span>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='absolute bg-overlay top-0 right-0 left-0 bottom-0 z-10'></div>
			</div>

			{/* Body Section */}
			<div className='container max-w-7xl mx-auto mt-8 flex flex-col md:flex-row gap-8'>
				{/* Center */}
				<div className='w-1/12'></div>
				<div className='w-full md:w-8/12 flex-1'>
					{/* Blog Body */}
					<div
						className='text-lg md:pr-10 innerhtml pb-4    '
						id='innerhtml'
						dangerouslySetInnerHTML={{
							__html: content,
						}}
					></div>
					<SocialShare
						views={views}
						shares={shares}
						xLikes={xLikes}
						instaLikes={instaLikes}
						slug={slug}
					/>

					<div className='mt-8 sm:py-2 px-0 p-4 '>
						<p className='font-bold'>Sign Up For Our Newsletter</p>
						<p className='text-gray-500'>Get Notified Of the Best Deals</p>
						<div className='flex mt-4'>
							<input
								type='email'
								placeholder='Enter Your Email'
								className='w-1/3 p-2 border border-gray-300 rounded mr-8'
							/>
							<input
								type='text'
								placeholder='Enter Your Name'
								className='w-1/3 p-2 border border-gray-300 rounded mr-8'
							/>
							<button className='w-1/3 bg-gray-800 text-white font-light rounded-sm tracking-widest text-center py-1 hover:bg-gray-700 transition-all duration-200 cursor-pointer'>
								SUBSCRIBE
							</button>
						</div>

						<div className='flex items-center mt-2'>
							<input type='checkbox' className='mr-2' />
							<p className='text-gray-500 text-sm'>
								I agree to the Terms and Conditions
							</p>
						</div>
					</div>
					<div className='mt-8 py-4 md:py-8 px-0'>
						<h4 className='text-md font-bold text-slate-800 mb-3'>
							You May Also Like
						</h4>

						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12 gap-4'>
							{relatedCards.slice(0, 3)}
						</div>

						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12 gap-4 mt-4'>
							{relatedCards.slice(3)}
						</div>
					</div>
				</div>

				{/* Right End */}
				<div className='w-full md:w-3/12 relative'>
					<div className=' flex flex-col sticky top-0 '>
						{/* Follow Us Title */}
						<div className=' py-4 mb-4 pl-2 pr-0 '>
							<p className='font-semibold mb-8 text-lg'>Follow Us</p>
							{/* Social Media Icons */}
							<div className='flex space-x-12 sm:space-x-16'>
								{/* Replace these with actual social media icons */}

								<div>
									<i className='bi bi-facebook'></i>
									<p className='text-xs text-gray-700 py-2 font-medium'>
										{metaLikes}
									</p>
								</div>
								<div>
									<i className='bi bi-twitter-x'></i>
									<p className='text-xs text-gray-700 py-2 font-medium'>
										{xLikes}
									</p>
								</div>
								<div>
									<i className='bi bi-instagram'></i>
									<p className='text-xs text-gray-700 py-2 font-medium'>
										{instaLikes}
									</p>
								</div>
								<div>
									<i className='bi bi-youtube'></i>
									<p className='text-xs text-gray-700 py-2 font-medium'>
										{youtubeLikes}
									</p>
								</div>
							</div>
						</div>

						{/* Subscribe Section */}
						<div className='pb-4'>
							<ContactForm />
						</div>

						<div className=' p-4'>
							<h4 className='text-lg font-medium text-slate-800 mb-3'>
								Latest
							</h4>

							{latestCards}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

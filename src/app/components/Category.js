import Link from 'next/link';
import api from '../../../../../Blog-Dashboard/frontend/src/utils/api';

import { formatDistanceToNow } from 'date-fns';
const Categories = async ({ category }) => {
	const categoryBlogs = (
		await api.get(`/blog/get-highest-score-blog/${category}`)
	).data;

	categoryBlogs.map((blog) => {
		const updatedAt = new Date(blog.updatedAt);
		const now = new Date();
		const duration = formatDistanceToNow(updatedAt, { addSuffix: true });
		blog.duration = duration;
	});

	const categories = (await api.get('/blog/get-categories')).data;

	const firstColBlog = [categoryBlogs[0]];
	const secondColBlogs = categoryBlogs.slice(1, 5);
	const thirdColBlogs = categoryBlogs.slice(5);

	const largeImageHeight = '70'; // Replace 'x' with the actual height of the large image
	const currentCategory = category;

	return (
		<div className='container p-5 mx-16 my-10 '>
			<div className='grid grid-cols-1 lg:grid-cols-12 gap-10 mt-4'>
				<div className='lg:col-span-5 border-2 border-gray-200 p-4 rounded-lg flex flex-col'>
					<h4 className='text-lg font-extrabold mb-4'>Trending</h4>
					<div className='flex flex-col space-y-10'>
						{thirdColBlogs.map((post, index, array) => (
							<Link href={`/blog/${post.slug}`} key={index}>
								<div
									className={`flex flex-col md:flex-row gap-6 cursor-pointer `}
								>
									<div className='w-full md:w-1/2'>
										<img
											src={post.coverImageUrl}
											alt='Trending Post Image'
											className='w-full h-32 object-cover mb-2 rounded-md'
										/>
									</div>
									<div className='md:w-1/2'>
										<p className='font-bold text-base md:line-clamp-4 '>
											{post.title}
										</p>
										<p className='text-gray-500 text-xs'>{post.duration}</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
				{/* Box 1 with border, containing two horizontal columns */}
				<div className='lg:col-span-6 border-2 border-gray-200 p-4  rounded-lg lg:flex lg:flex-row xl:gap-8 '>
					{/* Large Image Column with View Post button - Col-1 */}
					<div className='flex flex-col w-full xl:w-3/5 '>
						<Link href={`/blog/${firstColBlog[0].slug}`}>
							<div className='cursor-pointer'>
								<img
									src={firstColBlog[0].coverImageUrl}
									alt='Post Image'
									className='w-full object-cover mb-6 rounded-md'
								/>
								<div>
									<p className='font-bold text-lg mb-3 line-clamp-1'>
										{firstColBlog[0].title}
									</p>
									<p className='text-sm mb-2 line-clamp-2 '>
										{firstColBlog[0].description}
									</p>
									<p className='text-gray-500 text-sm mb-1 '>
										{firstColBlog[0].duration}
									</p>
								</div>
							</div>
						</Link>
						<div className='flex '>
							<Link
								href={`/blog/${firstColBlog[0].slug}`}
								className='font-semibold text-slate-700 text-center border-b-2 border-solid border-slate-500 px-1 py-1 hover:px-4 hover:font-light hover:rounded-full   hover:border-slate-800 hover:text-slate-100 hover:bg-blue-600 transition-all duration-200 cursor-pointer
								mt-16 md:mb-0'
							>
								View Post
							</Link>
						</div>
					</div>

					{/* Smaller Images Column with Title and Posted Date - Col-2 */}
					<div className='w-full md:hidden xl:flex lg:w-2/5 flex flex-col space-y-10'>
						{secondColBlogs.map((post, index) => (
							<Link href={`/blog/${post.slug}`} key={index}>
								<div className='cursor-pointer flex flex-col lg:flex-row gap-4'>
									<img
										src={post.coverImageUrl}
										alt='Other Post Image'
										className='w-full lg:w-1/2 h-24 object-cover mr-2 rounded-md'
									/>
									<div className='flex flex-col  flex-1 min-w-0'>
										<p className='font-bold text-base line-clamp-3 '>
											{post.title}
										</p>
										<p className='text-gray-500 text-xs'>{post.duration}</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
			<div className='md:mt-4 w-full hidden xl:hidden  md:flex md:flex-row md:items-start gap-4 border-2 border-gray-200 p-4 '>
				{secondColBlogs.map((post, index) => (
					<Link href={`/blog/${post.slug}`} key={index}>
						<div className='cursor-pointer md:flex  md:flex-col gap-4'>
							<img
								src={post.coverImageUrl}
								alt='Other Post Image'
								className='w-full  h-48 object-cover mr-2 rounded-md'
							/>
							<div className='flex flex-col gap-2  flex-1 min-w-0'>
								<p className='font-bold text-base line-clamp-3 '>
									{post.title}
								</p>
								<p className='text-gray-500 text-xs'>{post.duration}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Categories;

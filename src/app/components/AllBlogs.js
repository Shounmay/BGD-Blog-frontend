import Link from 'next/link';
import api from '../../../../../Blog-Dashboard/frontend/src/utils/api';
import { ChartBarIcon, MinusIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
const AllBlogs = async ({ category, page }) => {
	const blogList = (await api.get(`/blog/get-all?page=${page}`)).data;
	console.log(Object.keys(blogList));
	const blogs = blogList.allBlogs;
	const updatedBlogs = blogs.map((blog) => {
		// Add the 'username' property with the value 'BGD'
		blog.username = 'BGD';

		// Extract the 'updatedAt' value and create a 'posted' property with the formatted date
		const updatedAt = new Date(blog.updatedAt);
		const posted = format(updatedAt, 'do MMM yyyy');

		blog.posted = posted;

		// Return the updated blog object
		return blog;
	});
	return (
		<div
			className=' p-5  lg:p-5 md:p-12 container mx-16 my-10 w-[92%] '
			id='allblogs'
		>
			{/* 3 rows with 3 columns */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>
				{updatedBlogs.map((blog, index) => (
					<Link href={`/blog/${blog.slug}`}>
						<div key={index} className='flex flex-col    '>
							{/* Image */}

							<img
								src={blog.coverImageUrl}
								alt='Blog Image'
								className='w-full h-48 object-cover mb-2 rounded-t-md'
							/>

							{/* Title */}
							<div className='p-4'>
								<p
									className='font-bold text-lg mb-1 overflow-hidden whitespace-nowrap'
									style={{ maxWidth: '100%', textOverflow: 'ellipsis' }}
								>
									{blog.title}
								</p>
								<p
									className='text-sm mb-2 overflow-hidden whitespace-nowrap text-gray-500 '
									style={{ maxWidth: '100%', textOverflow: 'ellipsis' }}
								>
									{blog.description}
								</p>

								{/* Information Row */}
								<div className='flex items-center text-gray-500 mb-2 mt-2'>
									<p className='text-base'>{blog.username}</p>
									<MinusIcon className='w-8 ml-1' />

									<p className='text-xs'>{blog.posted}</p>
									<p className='ml-2 mr-1'>•</p>

									<ChartBarIcon className='w-2 text-gray-500 mr-1 ' />
									<p className='text-xs'>{`${blog.views} views`}</p>
								</div>

								{/* Description */}

								{/* View Post Button */}
								<div className='flex'>
									<button className='font-semibold text-slate-700 text-center border-b-2 border-solid border-slate-500 px-2 py-1 hover:px-4 hover:font-light   hover:border-slate-800 hover:rounded-full hover:text-slate-100 hover:bg-blue-600 transition-all duration-200 cursor-pointer'>
										View Post
									</button>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
			<div className='flex justify-center mt-8 space-x-4 '>
				{page > 1 && (
					<Link href={`/home/${category}/${Number(page) - 1}#allblogs`}>
						<button className='font-light text-slate-700 text-center border-2 border-solid border-slate-500 px-4 py-1   hover:border-slate-800 hover:text-slate-900 hover:bg-slate-300 transition-all duration-200 cursor-pointer'>
							Prev
						</button>
					</Link>
				)}
				{blogList.remDocs && (
					<Link href={`/home/${category}/${Number(page) + 1}#allblogs`}>
						<button className='font-light	 text-slate-700 text-center border-2 border-solid border-slate-500 px-4 py-1   hover:border-slate-800 hover:text-slate-900 hover:bg-slate-300 transition-all duration-200 cursor-pointer'>
							Load More
						</button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default AllBlogs;

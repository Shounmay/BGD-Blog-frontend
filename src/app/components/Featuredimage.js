import api from '../../../../../Blog-Dashboard/frontend/src/utils/api';
import Link from 'next/link';
const FeaturedImageSection = async () => {
	const featuredBlog = await (await api.get('/blog/get-featured-blog')).data;

	return (
		<div className='mt-8 mb-4 lg:p-5 md:p-12 p-5 '>
			<div className='relative min-h-[450px] sm:h-96 bg-cover bg-center border border-gradient-to-r from-white to-transparent sm:overflow-hidden'>
				{/* Featured Blog Content */}
				<div
					style={{
						backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${featuredBlog.coverImageUrl})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
					className='absolute inset-0 flex flex-col justify-center items-center text-white p-4 rounded-t-md'
				>
					{/* Ribbon */}
					<div className='bg-red-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wide px-2 py-1 rounded-full absolute top-8 left-8 transform -rotate-45 -translate-x-1/2 -translate-y-1/2'>
						Featured
					</div>

					{/* Heading */}
					<h2 className='text-2xl sm:text-4xl font-bold mb-1 text-center'>
						{featuredBlog.title}
					</h2>
					{/* Description */}
					<p className='mb-2 text-center text-sm sm:text-base'>
						{featuredBlog.description}
					</p>
					{/* Button - View Blog */}
					<div className='absolute bottom-4 left-0 right-0 text-center'>
						<Link href={`/blog/${featuredBlog.slug}`}>
							<button className='font-semibold text-slate-100 text-center border-b-2 border-dashed border-slate-500 px-2 py-1   hover:border-slate-800 hover:text-slate-50 hover:bg-slate-300/30 transition-all duration-200 cursor-pointer'>
								View Blog
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedImageSection;

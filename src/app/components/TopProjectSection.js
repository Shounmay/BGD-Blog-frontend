import Link from 'next/link';
import api from '../../../../../Blog-Dashboard/frontend/src/utils/api';
const TopProjectsSection = async () => {
	const topBlogProjects = (await api.get('/blog/get-top-blogs')).data;

	return (
		<div className='mb-4 mt-8 container  md:p-5 p-3  '>
			<h1 className='text-2xl font-bold text-center text-black mt-4 mb-4 sm:text-3xl'>
				Top Projects
			</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 '>
				{topBlogProjects.map((blog, index) => (
					<Link key={index} href={`/blog/${blog.slug}`}>
						<div className='relative flex flex-col p-2 bg-white border rounded-md overflow-hidden'>
							{/* Ribbon */}
							<div className=' text-white font-bold text-xs sm:text-sm uppercase tracking-wide px-2 py-1 rounded-tl-md rounded-br-md absolute top-0 left-0 transform -rotate-45'>
								<span role='img' aria-label='star' className='mr-1'>
									<img
										width={30}
										src='/premium-badge.png'
										alt=''
										className='z-10'
									/>
								</span>
							</div>

							<img
								src={blog.coverImageUrl}
								alt='Blog Image'
								className='w-full h-40 object-cover mb-2'
							/>

							<p
								className='font-bold text-lg mb-2 overflow-hidden whitespace-nowrap'
								style={{ maxWidth: '100%', textOverflow: 'ellipsis' }}
							>
								{blog.title}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default TopProjectsSection;

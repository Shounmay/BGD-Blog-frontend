import Navbar from './components/Navbar.js';
import Categories from './components/Category.js';
import AllBlogs from './components/AllBlogs.js';
import FeaturedImageSection from './components/Featuredimage.js';
import TopProjectsSection from './components/TopProjectSection.js';
import { redirect } from 'next/navigation';
const HomePage = () => {
	// return (
	// 	<div className='min-h-screen flex flex-col'>
	// 		<Navbar />
	// 		<Categories />
	// 		<AllBlogs />
	// 		<FeaturedImageSection />
	// 		<TopProjectsSection />
	// 	</div>
	// );

	return redirect('/home/category-0/1');
};

export default HomePage;

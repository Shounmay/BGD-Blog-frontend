import Navbar from '../../../components/Navbar.js';
import Categories from '../../../components/Category.js';
import AllBlogs from '../../../components/AllBlogs.js';
import FeaturedImageSection from '../../../components/Featuredimage.js';
import TopProjectsSection from '../../../components/TopProjectSection.js';
import Footer from '@/app/components/Footer.js';

const HomePage = ({ params }) => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Navbar currentCategory={params.category} />

			<Categories category={params.category} />

			<AllBlogs category={params.category} page={params.page} />

			<FeaturedImageSection />

			<TopProjectsSection />

			<Footer />
		</div>
	);
};

export default HomePage;

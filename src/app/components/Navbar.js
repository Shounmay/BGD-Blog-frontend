import Link from 'next/link';
import CategoryDropdown from './CategoryDropdown';
import api from '@/utils/api';
import CityDropdown from './CityDropdown';
import HamburgerMenu from './HamburgerMenuNav';
import HamburgerMenuNav from './HamburgerMenuNav';
import CategoryList from './CategoryList';
import AuthenticationComponent from './AuthenticationComponent';
const Navbar = async (params) => {
	const categories = (await api.get('/blog/get-categories')).data;
	const { currentCategory } = params;
	return (
		<div className='sticky top-0 z-50 w-full mx-auto'>
			<div className='bg-white text-gray-800 p-4 shadow-md flex justify-start items-center'>
				<Link href='/' passHref>
					<div className='text-2xl font-bold cursor-pointer ml-12'>
						<img
							src='/logo.png'
							alt='Your Logo'
							className='h-16 cursor-pointer'
						/>
					</div>
				</Link>
				<div className='md:hidden'>
					<HamburgerMenuNav
						categories={categories}
						currentCategory={currentCategory}
					/>
				</div>

				<div className='md:flex hidden  '>
					<CategoryList
						categories={categories}
						currentCategory={currentCategory}
					/>
					<CityDropdown />

					<AuthenticationComponent />

					{/* <CategoryDropdown
						categories={categories}
						currentCategory={currentCategory}
					/> */}
				</div>
			</div>
		</div>
	);
};

export default Navbar;

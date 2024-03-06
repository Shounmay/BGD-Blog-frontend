'use client';

// components/HamburgerMenu.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import CityDropdown from './CityDropdown';
import CategoryDropdown from './CategoryDropdown';

const HamburgerMenuNav = (props) => {
	const { categories, currentCategory } = props;
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='relative'>
			<button onClick={toggleMenu} className='text-2xl focus:outline-none'>
				{isOpen ? <FaTimes /> : <FaBars />}
			</button>
			{isOpen && (
				<nav className='absolute right-0 mt-2 bg-white rounded-md shadow-lg w-56 z-50'>
					<ul className='list-none  '>
						<li className='p-2 hover:bg-gray-100'>
							<CityDropdown />
						</li>
						<li className='p-2 hover:bg-gray-100'>
							<CategoryDropdown
								categories={categories}
								currentCategory={currentCategory}
							/>
						</li>
					</ul>
				</nav>
			)}
		</div>
	);
};

export default HamburgerMenuNav;

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
const CategoryList = (props) => {
	const { categories, currentCategory } = props;
	const router = useRouter();
	return (
		<div className='flex  overflow-x-auto ml-4 mr-2'>
			{categories.map((category, index) => (
				<button
					key={index}
					className={`flex-none px-4 py-2 m-2 rounded ${
						category === decodeURIComponent(currentCategory)
							? 'underline text-blue-600'
							: ''
					}`}
					style={{
						textDecorationColor:
							category === decodeURIComponent(currentCategory) ? '#3461FF' : '',
					}}
					onClick={() => {
						router.push(`/home/${category}/1`);
					}}
				>
					{category}
				</button>
			))}
		</div>
	);
};

export default CategoryList;

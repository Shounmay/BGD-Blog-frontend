'use client';

import React from 'react';

const AuthenticationComponent = () => {
	return (
		<div className='flex space-x-2 ml-32 pl-20 mr-0 pr-0 mt-3'>
			<button className='h-8 px-6 py-1 text-sm rounded-full text-blue-600 bg-transparent hover:bg-blue-100 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition ease-in-out duration-150'>
				Sign up
			</button>
			<button className='h-8 px-6 py-1 text-sm rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition ease-in-out duration-150'>
				Log in
			</button>
		</div>
	);
};

export default AuthenticationComponent;

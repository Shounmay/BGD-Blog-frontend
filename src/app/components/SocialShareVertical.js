// components/SocialShare.js

'use client';
import { useState } from 'react';
// Import specific icons
import { Eye, ShareFill, Twitter, Instagram } from 'react-bootstrap-icons';
import ShareComponent from './ShareComponent';
import { RWebShare } from 'react-web-share';
const SocialShareVertical = (props) => {
	const { views, shares, xlikes, instaLikes } = props;
	// Dummy data for the counts
	const counts = {
		views,
		shares,
		tweets: xlikes,
		insta: instaLikes,
	};

	const shareHandler = () => {};

	return (
		<div className='flex flex-col flex-nowrap align-items-center gap-[150px] '>
			<div className='flex items-center'>
				<Eye className='mr-1' />
				<span className='text-sm p-0 '>{counts.views} Views</span>
			</div>

			<RWebShare
				data={{
					text: 'Share Blog',
					title: `${views}`,
					url: `http://localhost:3000/Blog/${views}`,
				}}
			>
				<button className='flex items-center'>
					<ShareFill className='me-1' />
					<span className='text-sm p-0 '> Share</span>
				</button>
			</RWebShare>
			<RWebShare
				data={{
					text: 'Share Blog',
					title: `${views}`,
					url: `http://localhost:3000/Blog/${views}`,
				}}
			>
				<button className='flex items-center'>
					<Twitter className='me-1' />
					<span className='text-sm p-0 '> Tweet</span>
				</button>
			</RWebShare>
			<RWebShare
				data={{
					text: 'Share Blog',
					title: `${views}`,
					url: `http://localhost:3000/Blog/${views}`,
				}}
			>
				<button className='flex items-center' onClick={shareHandler}>
					<Instagram className='me-1' />
					<span className='text-sm p-0 '>Post</span>
				</button>
			</RWebShare>
		</div>
	);
};

export default SocialShareVertical;

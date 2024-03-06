// components/SocialShare.js

'use client';
import { useState } from 'react';
// Import specific icons
import { Eye, ShareFill, Twitter, Instagram } from 'react-bootstrap-icons';
import ShareComponent from './ShareComponent';
import { RWebShare } from 'react-web-share';
const SocialShare = (props) => {
	const { views, shares, xlikes, instaLikes, slug } = props;
	// Dummy data for the counts
	const counts = {
		views,
		shares,
		tweets: xlikes,
		insta: instaLikes,
	};

	const fbShareUri = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
		`https://bgdnetwork.vercel.app/blog/${slug}`
	)}`;

	const shareHandler = () => {
		window.open(fbShareUri, '_blank');
	};

	return (
		<div className='flex flex-wrap align-items-center gap-y-2   md:justify-between '>
			<div className='flex items-center  w-[calc(99%)] md:w-1/4 justify-center border-b border-solid border-blue-400 py-2 mx-1'>
				<Eye className='mr-1' />
				<span className='text-sm p-0 '>{counts.views} Views</span>
			</div>

			<RWebShare
				data={{
					text: 'Share Blog',
					title: `${slug}`,
					url: `/blog/${slug}`,
				}}
			>
				<button className='flex items-center  w-[calc(99%)] md:w-1/4 justify-center border-b border-solid border-blue-400 py-2 mx-1'>
					<ShareFill className='me-1' />
					<span className='text-sm p-0 '> Share</span>
				</button>
			</RWebShare>

			<RWebShare
				data={{
					text: 'Share Blog',
					title: `${slug}`,
					url: `/blog/${slug}`,
				}}
			>
				<button className='flex items-center  w-[calc(99%)] md:w-1/4 justify-center border-b border-solid border-blue-400 py-2 mx-1'>
					<Twitter className='me-1' />
					<span className='text-sm p-0 '> Tweet</span>
				</button>
			</RWebShare>

			<button
				className='flex items-center  w-[calc(99%)] md:w-1/4 justify-center border-b border-solid border-blue-400 py-2 mx-1'
				onClick={shareHandler}
			>
				<Instagram className='me-1' />
				<span className='text-sm p-0 '>Post</span>
			</button>
		</div>
	);
};

export default SocialShare;

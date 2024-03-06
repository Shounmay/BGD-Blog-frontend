'use client';

import React, { useEffect } from 'react';
import { Remarkable } from 'remarkable';

import DOMPurify from 'isomorphic-dompurify';
import Script from 'next/script';
const HtmlContent = ({ content }) => {
	const md = new Remarkable();
	const markup = { __html: DOMPurify.sanitize(content) };

	function createMarkup(content) {
		return { __html: md.render(content) };
	}
	const sanitizedHtml = DOMPurify.sanitize(content);

	return (
		<div
			className=' innerhtml '
			id='html'
			dangerouslySetInnerHTML={{
				__html: content,
			}}
		></div>
	);
};

export default HtmlContent;

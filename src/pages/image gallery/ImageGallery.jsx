import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const ImageGallery = () => {
	// State to store the image URLs
	const [imageUrls, setImageUrls] = useState([]);

	// Define the URL of the publicly shared Google Drive folder
	const folderUrl =
		'https://drive.google.com/drive/folders/1MQW7bWI5J7v-_93slmFRc8-luAM4sYh5';

	// Function to fetch image URLs from the Google Drive folder
	const fetchImageUrls = async () => {
		try {
			// Make a GET request to the folder URL
			const response = await axios.get(folderUrl);

			// Load the HTML content of the folder page using Cheerio
			const $ = cheerio.load(response.data);

			// Find all anchor tags containing image URLs
			const imageLinks = $('a.WlydVc');

			// Extract image URLs from anchor tags
			const urls = [];
			imageLinks.each((index, element) => {
				const url = $(element).attr('href');
				if (url) {
					urls.push(url);
				}
			});

			// Set the image URLs in state
			setImageUrls(urls);
		} catch (error) {
			console.error('Error fetching image URLs:', error);
		}
	};

	// Fetch image URLs when the component mounts
	useEffect(() => {
		fetchImageUrls();
	}, []);

	return (
		<div>
			<h1>Image Gallery</h1>
			<div>
				{/* Render the image URLs */}
				{imageUrls.map((url, index) => (
					<img
						key={index}
						src={url}
						alt={`Image ${index + 1}`}
						style={{ maxWidth: '100%', marginBottom: '10px' }}
					/>
				))}
			</div>
		</div>
	);
};

export default ImageGallery;








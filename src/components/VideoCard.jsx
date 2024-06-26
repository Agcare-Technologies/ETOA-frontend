import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { MdPlayCircleOutline } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';

const VideoCard = ({ src, videoId }) => {
	const [showVideo, setShowVideo] = useState(false);
	const [startTime, setStartTime] = useState(null);
	const [totalPlayedTime, setTotalPlayedTime] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		let interval;
		if (showVideo) {
			if (isPlaying) {
				interval = setInterval(() => {
					const elapsedTime = Date.now() - startTime;
					setTotalPlayedTime(elapsedTime);
					console.log('Total Played Time:', elapsedTime);
				}, 1000);
			}
		} else {
			clearInterval(interval);
			setTotalPlayedTime(0);
			setStartTime(null);
		}
		return () => clearInterval(interval);
	}, [showVideo, isPlaying, startTime]);

	const toggleVideo = () => {
		setShowVideo(!showVideo);
		if (!showVideo) {
			setStartTime(Date.now());
			setIsPlaying(true);
		} else {
			setIsPlaying(false);
		}
	};

	const closeVideo = () => {
		setShowVideo(false);
		setIsPlaying(false);
	};

	const onPlayerStateChange = (event) => {
		if (event.data === YouTube.PlayerState.PLAYING) {
			setIsPlaying(true);
		} else {
			setIsPlaying(false);
		}
	};

	const videoModal = (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
			<div className='w-2/4 max-w-screen-lg bg-white rounded-lg relative'>
				<div className='relative aspect-w-16 flex aspect-h-9'>
					<YouTube
						videoId={videoId}
						onStateChange={onPlayerStateChange}
						opts={{ playerVars: { autoplay: 1 } }}
					/>
					<AiOutlineClose onClick={closeVideo} color='red' />
				</div>
				<p>Total Played Time: {Math.floor(totalPlayedTime / 1000)} seconds</p>
			</div>
		</div>
	);

	return (
		<div className='w-72 h-60 rounded-md bg-teal-50 shadow-xl flex flex-col m-4 hover:scale-105'>
			<h3 className='text-xs px-2 rounded-md mt-2 text-white bg-green-500 self-end pr-2'>
				ONLINE
			</h3>
			<img className='mx-2 w-48' src={src} alt='' />
			<div className='flex items-center justify-between mx-2'>
				<p className='text-sm text-green-500'>Training 1</p>
				<MdPlayCircleOutline color='green' onClick={toggleVideo} />
			</div>
			<div className='text-xs text-left mx-2'>
				<p>Heading</p>
				<p>Due Date</p>
				<p>Some Extra Info</p>
			</div>
			{showVideo && videoModal}
		</div>
	);
};

export default VideoCard;

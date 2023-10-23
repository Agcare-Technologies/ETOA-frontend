import React from "react";
import VideoCard from "../../components/VideoCard";

const TrainingPage = () => {
  return (
    <div className='text-4xl font-semibold text-center bg-gray-50 h-screen'>
      <h3>Training Videos</h3>
      <div className='flex flex-wrap'>
        <VideoCard src='/assets/training.png' videoId='ZbfofckOjKw' />
        <VideoCard src='/assets/training.png' />
      </div>
    </div>
  );
};

export default TrainingPage;

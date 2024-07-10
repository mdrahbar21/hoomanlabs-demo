import React from 'react';

type VideoComponentProps = {
  videoUrl: string;
};

const VideoComponent: React.FC<VideoComponentProps> = ({ videoUrl }) => {
  return (
    <div className='h-full md:h-screen'>
    <div className="hidden md:flex">
    <iframe
      width="800"
      height="450"
      src={videoUrl}
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded YouTube Video"
    />
    </div>
    <div className="md:hidden">
    <iframe
      width=""
      height=""
      src={videoUrl}
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded YouTube Video"
    />
    </div>
    </div>
  );
};

export default VideoComponent;

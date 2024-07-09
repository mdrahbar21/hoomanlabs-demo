import React from 'react';

type VideoComponentProps = {
  videoUrl: string;
};

const VideoComponent: React.FC<VideoComponentProps> = ({ videoUrl }) => {
  return (
    <iframe
      width="800"
      height="450"
      src={videoUrl}
      allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded YouTube Video"
    />
  );
};

export default VideoComponent;

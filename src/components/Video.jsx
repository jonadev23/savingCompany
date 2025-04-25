import React, { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";

const Video = ({ src, className, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className={`relative w-full  h-full ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-2xl"
        controls={isPlaying}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <div
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
          onClick={handlePlay}
        >
          <div className="text-white bg-black/50 p-10 rounded-full text-4xl">
            <FaPlay />
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;

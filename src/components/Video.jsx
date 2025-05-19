import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Video = ({ src, className, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play().catch(error => {
        console.error("Error playing video:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoClick = () => {
    setShowControls(true);
    if (!isPlaying) handlePlayPause();
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Space") handlePlayPause();
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isPlaying]);

  return (
    <div className={`relative w-full rounded-2xl h-full ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-2xl cursor-pointer"
        onClick={handleVideoClick}
        muted
        loop
        playsInline
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {(!isPlaying || showControls) && (
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/30 transition-opacity duration-300"
          onClick={handleVideoClick}
        >
          <div className="text-white bg-black/50 p-4 rounded-full text-4xl hover:bg-black/70 transition-colors">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
        </div>
      )}

      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            onChange={(e) => {
              const time = (e.target.value / 100) * videoRef.current.duration;
              videoRef.current.currentTime = time;
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Video;
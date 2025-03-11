import { motion } from "framer-motion";
import React, { useState } from "react";
import "./Video.css";

const Video = () => {
  const [videos, setVideos] = useState([
    { src: require("./Frame1618873854(3).png"), isPlaying: false, isMuted: true },
    { src: require("./Frame1618873854.png"), isPlaying: false, isMuted: true },
    { src: require("./Frame1618873854(1).png"), isPlaying: false, isMuted: true },
    { src: require("./Frame1618873854(2).png"), isPlaying: false, isMuted: true },
  ]);

  const togglePlay = (index) => {
    setVideos((prev) =>
      prev.map((video, i) =>
        i === index ? { ...video, isPlaying: !video.isPlaying } : video
      )
    );
  };

  const toggleMute = (index) => {
    setVideos((prev) =>
      prev.map((video, i) => (i === index ? { ...video, isMuted: !video.isMuted } : video))
    );
  };

  return (
    <div className="video-container">
      <h1 className="video-title">Real Stories, Real Impact: Our Users Share Their Experience</h1>
      <div className="video-grid">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ scale: index === 1 || index === 2 ? 1.2 : 1 }}
            animate={{ scale: index === 1 || index === 2 ? 1.3 : 1 }}
            transition={{ duration: 0.5 }}
            className={`video-card ${index === 1 || index === 2 ? "large" : "small"}`}
          >
            <video
              src={video.src}
              className="video-element"
              autoPlay={video.isPlaying}
              muted={video.isMuted}
              loop
            />
            <div className="video-controls">
              <button className="video-button" onClick={() => togglePlay(index)}>
                {video.isPlaying ? "Pause" : "Play"}
              </button>
              <button className="video-button" onClick={() => toggleMute(index)}>
                {video.isMuted ? "Unmute" : "Mute"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Video;

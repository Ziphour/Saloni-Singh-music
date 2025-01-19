import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const WaveformPlayer = ({ audioFile }) => {
  const waveformRef = useRef(null); // Reference to the waveform container
  const waveSurfer = useRef(null); // Reference to the WaveSurfer instance
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Initialize WaveSurfer instance
    waveSurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#ddd", // Wave color
      progressColor: "#4a90e2", // Progress color
      cursorColor: "#fff", // Cursor color
      height: 80, // Height of the waveform
      responsive: true,
    });

    // Load the audio file
    waveSurfer.current.load(audioFile);

    // Clean up on unmount
    return () => {
      waveSurfer.current.destroy();
    };
  }, [audioFile]);

  // Handle Play/Pause
  const togglePlay = () => {
    if (waveSurfer.current) {
      waveSurfer.current.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button
        onClick={togglePlay}
        style={{
          backgroundColor: "#4a90e2",
          border: "none",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <div
        ref={waveformRef}
        style={{ margin: "20px auto", width: "100%", maxWidth: "600px" }}
      ></div>
    </div>
  );
};

export default WaveformPlayer;

import ReactAudioPlayer from "react-audio-player";
import TBU from "../assets/audio/TBU"; // Adjust the path based on your structure

const AudioPlayer = () => {
  return (
    <div>
      <h2>T</h2>
      <ReactAudioPlayer src="../assets/audio/TBU" controls />
    </div>
  );
};

export default AudioPlayer;

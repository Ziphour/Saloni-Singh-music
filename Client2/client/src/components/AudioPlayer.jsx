import ReactAudioPlayer from "react-h5-audio-player";
// import TBU from "../assets/audio/TBU.mp3"; // Adjust the path based on your structure
import "react-h5-audio-player/lib/styles.css";

const AudioPlayer = (music) => {
  console.log(music);
  return (
    <div className="player-wrapper">
      <ReactAudioPlayer
        src={music}
        onPlay={() => console.log("Playing audio")}
        showJumpControls={false} // Hide jump forward/backward buttons
        customAdditionalControls={[]} // Hide additional controls like loop
        layout="stacked" // Other option: "stacked"
      />
    </div>
  );
};

export default AudioPlayer;

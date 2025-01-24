import ReactAudioPlayer from "react-h5-audio-player";
// import TBU from "../assets/audio/TBU.mp3"; // Adjust the path based on your structure
// import "react-h5-audio-player/lib/styles.css";

const AudioPlayer = ({ music }) => {
  console.log(music);
  return (
    <div className="player-wrapper">
      <ReactAudioPlayer
        autoPlay={false}
        src={music}
        onPlay={(e) => console.log("Playing")}
        customAdditionalControls={[]} // Remove extra controls
        customVolumeControls={[]} // Remove volume slider
        style={{
          borderRadius: "20px", // Rounded corners
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow
        }}
      />
    </div>
  );
};

export default AudioPlayer;

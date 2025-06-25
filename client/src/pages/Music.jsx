import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Music.css";
import AudioPlayer from "../components/AudioPlayer";
import TBU from "../assets/audio/TBU.mp3";

const Music = () => {
  // const [tracks, setTracks] = useState([]);
  // setTracks(0);
  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/api/music`).then((response) => {
  //     setTracks(response);
  //     console.log(process.env.REACT_APP_API_URL);
  //   });
  // }, []);

  return (
    <div className=" main-content big-flow">
      <h1>Discography</h1>
      <div className="Small-flow">
        <div className="flex">
          <div>
            <h2>Thinking bout you</h2>
          </div>
        </div>
        <AudioPlayer music={TBU} />
        {/* how to render this? */}
      </div>
      <div className="">
        <div className="flex">
          <h2>Boyfriend</h2>
        </div>
        <AudioPlayer music={TBU} />
        {/* how to render this? */}
      </div>
      <div className="">
        <div className="flex">
          <h2>HiLo</h2>
        </div>
        <AudioPlayer music={TBU} />
        {/* how to render this? */}
      </div>
    </div>
  );
};

export default Music;

// <h1>Music</h1>
// <div className="track-list">
//   {tracks.map((track) => (
//     <div key={track.id} className="track">
//       {/* could flex */}
//       <h3>{track.title}</h3>
//       <p>Artist: {track.artist}</p>
//       <WaveformPlayer audioFile={TBU} />
//     </div>
//   ))}
// </div>

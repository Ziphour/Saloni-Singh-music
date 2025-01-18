import { useEffect, useState } from "react";
// import axios from "axios";
import "../styles/Music.css";

const Music = () => {
  const [tracks, setTracks] = useState([]);
  setTracks(0);
  useEffect(() => {
    // axios.get(`${process.env.REACT_APP_API_URL}/api/music`).then((response) => {
    //   setTracks(response.data);
    // });
  }, []);

  return (
    <div className="music">
      <h1>Music</h1>
      <div className="track-list">
        {tracks.map((track) => (
          <div key={track.id} className="track">
            <h3>{track.title}</h3>
            <p>Artist: {track.artist}</p>
            <p>Album: {track.album}</p>
            <audio controls>
              <source src={track.track_url} type="audio/mpeg" />
              {/* Might need to change audio MPEG */}
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;

// RightPanel.jsx
import AudioPlayer from "./AudioPlayer";

const RightPanel = () => (
  <div className="right-panel ">
    <h2>Thinking bout you</h2>
    <a href="https://soundcloud.com/salonismusic/thinking-bout-you-dua-lipa-cover?ref=clipboard&p=i&c=1&si=9666916F8D2D4E58A15C0FCF9F255F20">
      Listen to her latest now:
    </a>
    <AudioPlayer />
    {/* how to render this? */}
  </div>
);

export default RightPanel;

// TourDates.jsx
import Dove from "../assets/artworks-Dove.jpg"; // Adjust the path based on your structure
import TBY from "../assets/artworks-TBY.jpg"; // Adjust the path based on your structure
import HiLo from "../assets/artworks-T.jpg"; // Adjust the path based on your structure

const Upcoming = () => (
  <div className="tour-dates">
    {/* change the name later on */}
    <h2>Latest Works:</h2>
    <div className="concert-images">
      <div>
        <img src={TBY} alt="song" className="hoverExpand" />
        <h2>Cover: Dove Cameron: Boyfriend</h2>
        <a href="https://soundcloud.com/salonismusic/boyfriend-dove-cameron-cover-by-saloni">
          Link
        </a>
      </div>
      <div>
        <img src={Dove} alt="song" className="hoverExpand" />
        <h2>Cover: Dua Lipa: Thinking bout you</h2>
        <a href="https://soundcloud.com/salonismusic/thinking-bout-you-dua-lipa-cover">
          Link
        </a>
      </div>
      <div>
        <img src={HiLo} alt="song" className="hoverExpand" />
        <h2>Cover: Dua Lipa: Thinking bout you</h2>
        <a href="https://soundcloud.com/salonismusic/hi-lo-by-saloni">Link</a>
      </div>
    </div>
  </div>
);

export default Upcoming;

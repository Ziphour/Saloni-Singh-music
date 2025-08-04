// ConcertImages.jsx

import concert1 from "../assets/concert1.jpg"; // Adjust the path based on your structure
import concert2 from "../assets/concert2.jpg"; // Adjust the path based on your structure
import concert3 from "../assets/concert3.jpg"; // Adjust the path based on your structure
import concert4 from "../assets/concert4.jpg"; // Adjust the path based on your structure
import concert5 from "../assets/concert5.jpg"; // Adjust the path based on your structure
import concert6 from "../assets/concert6.webp"; // Adjust the path based on your structure

const ConcertImages = () => (
  <div className="concert-images crop gap-1">
    <img src={concert1} alt="Concert" />
    <img src={concert2} alt="Concert" />
    <img src={concert3} alt="Concert" />
    <img src={concert4} alt="Concert" />
    <img src={concert5} alt="Concert" />
    <img src={concert6} alt="Concert" />
  </div>
);

export default ConcertImages;

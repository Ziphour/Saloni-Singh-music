// ConcertImages.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules"; // arrows + auto swipe
import "swiper/css"; // core styles
import "swiper/css/navigation"; // arrow styles
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import concert1 from "../assets/concert1.jpg"; // Adjust the path based on your structure
// import concert2 from "../assets/concert2.jpg"; // Adjust the path based on your structure
// import concert3 from "../assets/concert3.jpg"; // Adjust the path based on your structure
// import concert4 from "../assets/concert4.jpg"; // Adjust the path based on your structure
// import concert5 from "../assets/concert5.jpg"; // Adjust the path based on your structure
// import concert6 from "../assets/concert6.webp"; // Adjust the path based on your structure

const ConcertImages = () => (
  <>
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      autoplay={{
        delay: "3000",
        disableOnInteraction: true,
      }}
      loop={true}
      speed={1200}
      slidesPerView={1}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide>
        <img src="/assets/Gallery/1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/Gallery/2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/Gallery/3.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  </>
);

// Can use for Loop to make all the swiper slides appear, Removing the need
// To impliment them each time

export default ConcertImages;

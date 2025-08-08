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
  <div className="marginEven" style={{ width: "500px" }}>
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
        <img src="/assets/Gallery/GalleryIMG.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/Gallery/G.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/Gallery/bf6.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  </div>
);

export default ConcertImages;

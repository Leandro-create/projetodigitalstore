import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Gallery = () => {
  const imagens = [
    "/projetodigitalstore/images/home-slide-7.jpeg",
    "/projetodigitalstore/images/home-slide-6.jpeg",
    "/projetodigitalstore/images/home-slide-1.jpeg",
    "/projetodigitalstore/images/home-slide-8.jpeg",
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[681px]"
    >
      {imagens.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Gallery;

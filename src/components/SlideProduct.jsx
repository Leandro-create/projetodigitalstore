import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useState, useRef } from 'react';

const SlideProduct = ({ images = [], width, radius }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const handleThumbClick = (index) => {
    if (swiperRef.current && swiperRef.current.slideTo) {
      swiperRef.current.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <div
      className="flex flex-col gap-4 w-full"
      style={{ width }}
    >
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="productSwiper w-full aspect-square max-h-[500px]"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        style={{
          borderRadius: radius,
          overflow: 'hidden',
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={`Produto ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-2 flex-wrap justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-16 h-16 border-2 rounded-lg overflow-hidden cursor-pointer ${
              activeIndex === index ? 'border-[#C92071]' : 'border-gray-200'
            }`}
            onClick={() => handleThumbClick(index)}
          >
            <img
              src={image.src}
              alt={`Miniatura ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideProduct;

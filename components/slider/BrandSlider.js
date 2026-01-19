"use client";

import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSlider = () => {
  const brands = [
    { 
      name: "Google", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      color: "#4285F4"
    },
    { 
      name: "Netflix", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      color: "#E50914"
    },
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      color: "#FF9900"
    },
    { 
      name: "Microsoft", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      color: "#0078D4"
    },
    { 
      name: "Apple", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      color: "#000000"
    },
    { 
      name: "Meta", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      color: "#0081FB"
    },
    { 
      name: "YouTube", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
      color: "#FF0000"
    },
    { 
      name: "Spotify", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
      color: "#1DB954"
    },
    { 
      name: "Disney+", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
      color: "#113CCF"
    },
    { 
      name: "HBO Max", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
      color: "#000000"
    },
    { 
      name: "Paramount+", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Paramount_Plus.svg",
      color: "#0074FF"
    },
    { 
      name: "Prime Video", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
      color: "#00A8E1"
    },
  ];

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <Slider
      {...sliderProps.brandCarouselActive}
      className="brand-carousel-active"
    >
      {duplicatedBrands.map((brand, index) => (
        <div key={`${brand.name}-${index}`} className="brand-image">
          <img 
            src={brand.logo}
            alt={brand.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://via.placeholder.com/150x60/${brand.color.replace('#', '')}/ffffff?text=${encodeURIComponent(brand.name)}`;
            }}
            style={{ 
              maxHeight: '45px', 
              width: 'auto', 
              objectFit: 'contain', 
              filter: 'none',
              opacity: 1
            }}
          />
        </div>
      ))}
    </Slider>
  );
};
export default BrandSlider;

export const BrandSlider2 = () => {
  return (
    <Swiper {...sliderProps.brandSlider2} className="swiper brand-slider-2">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img src="assets/img/brand/client-1.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img src="assets/img/brand/client-2.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img src="assets/img/brand/client-3.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img src="assets/img/brand/client-4.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img src="assets/img/brand/client-5.png" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img src="assets/img/brand/client-6.png" alt="img" />
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

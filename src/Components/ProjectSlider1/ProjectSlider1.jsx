import React from "react";
import "./ProjectSlider1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Github from "../../images/Github.png";
import Website from "../../images/www.png";

const ProjectSlider1 = ({ projects }) => {
  console.log(window);
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="p-slider"
      >
        {projects.map((items, val) => (
          <SwiperSlide>
            <div className="slide">
              <img src={items.image} alt="" />
              <div className="hover-slide">
                <div className="hover-slide-heading">
                  <span>{items.name}</span>
                  <span>{items.desc}</span>
                </div>

                <div className="hover-slide-image">
                  <a href={items.github} target="_blank">
                    <img src={Github} alt="" />
                  </a>
                  <a href={items.website} target="_blank">
                    <img src={Website} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProjectSlider1;

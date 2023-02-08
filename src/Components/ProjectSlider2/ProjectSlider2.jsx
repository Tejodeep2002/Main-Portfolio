import React, { useState } from "react";
import "./ProjectSlider2.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Github from "../../images/Github.png";
import Website from "../../images/www.png";

const ProjectSlider2 = ({ projects }) => {
  const [count, setCount] = useState();
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="p2-slider"
      >
        <SwiperSlide>
          <div className="super-slider">
            {projects.map((items, val) =>
              val < 6 ? (
                <div className="p2-slide" key={val}>
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
              ) : null
            )}
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default ProjectSlider2;

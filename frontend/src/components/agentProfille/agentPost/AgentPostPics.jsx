import React, { useState, useRef } from "react";
import AgentPic from "../AgentPic";
import PostImg from "../images/post-img.svg";
import Camera from "../images/camera.svg";

import LocationBlackIcon from "./images/location-black-icon.svg";
import ArrowRight from "./images/arrow-right.svg";
// import Item1 from "./images/item1.svg";
import Item2 from "./images/item2.svg";
import Item3 from "./images/item3.svg";
import Item4 from "./images/item4.svg";
import Item5 from "./images/item5.svg";
import Item6 from "./images/item6.svg";
import Item7 from "./images/item7.svg";
import Item8 from "./images/item8.svg";

const Item = [
  {
    id: 1,
    image: PostImg,
  },
  {
    id: 2,
    image: Item2,
  },
  {
    id: 3,
    image: Item3,
  },
  {
    id: 4,
    image: Item4,
  },
  {
    id: 5,
    image: Item5,
  },
  {
    id: 6,
    image: Item6,
  },
  {
    id: 7,
    image: Item7,
  },
  {
    id: 8,
    image: Item8,
  },
];

function AgentPostPics() {
  const [selectedImage, setSelectedImage] = useState(Item[0].image);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const newScrollPosition = scrollPosition + 100; // Adjust the scroll amount as needed
      setScrollPosition(newScrollPosition);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pb-10">
      <div>
        <div className="mt-10">
          <div className="flex items-center">
            <img src={LocationBlackIcon} alt="" />
            <p className="text-[1.1875rem] text-[#282D3A] font-Roboto lg:text-[1.75rem]">
              Design District, Miami
            </p>
          </div>
          <div className="overflow-hidden relative cursor-pointer mt-5">
            <div className="absolute w-[358px] sm:w-[550px] lg:w-[520px] lg:h-[350px] xl:w-[712px] xl:h-[427px] opacity-45 bg-gradient-to-t from-black to-transparent via-opacity-50"></div>
            <img
              src={selectedImage}
              alt="Post"
              className="w-[358px] sm:w-[550px] lg:w-[520px] lg:h-[350px] xl:w-[712px] xl:h-[427px] object-cover"
            />
            <div className="absolute bottom-0 pb-2 flex w-[358px] sm:w-[550px] lg:w-[520px] xl:w-[712px] items-center justify-end px-3">
              <div className="flex items-center gap-2">
                <img src={Camera} alt="Camera" className="" />
                <p className="text-[0.8125rem] text-white font-medium font-Roboto">
                  {Item.length}
                </p>
              </div>
            </div>
          </div>
          {/* Other pictures start */}
          <div className="mt-5 max-w-[358px] sm:max-w-[550px] lg:max-w-[520px] xl:max-w-[712px] flex items-center">
            <div
              ref={scrollContainerRef}
              className="no-scrollbar flex gap-2 w-[712px] overflow-x-scroll"
            >
              {Item.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt=""
                  className={`w-[100px] h-[60px] cursor-pointer ${
                    selectedImage === item.image
                      ? "opacity-100"
                      : "opacity-50 lg:hover:scale-105"
                  }`}
                  onClick={() => handleClick(item.image)}
                />
              ))}
            </div>
            <img
              src={ArrowRight}
              alt=""
              className="cursor-pointer w-5"
              onClick={handleScrollRight}
            />
          </div>
          {/* Other pictures end */}
        </div>
      </div>
    </div>
  );
}

export default AgentPostPics;

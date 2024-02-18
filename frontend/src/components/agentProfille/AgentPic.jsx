import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProfilePic from "./images/profile-pic.svg";
import Like from "./images/like-icon.svg";
import { Link } from "react-router-dom";

function AgentPic(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
      async function fetchItems() {
          try {
              const response = await axios.get('http://127.0.0.1:8000/api/model/realEstateUpload/');
              setItems(response.data);
              console.log(response.data)
          } catch (error) {
              console.error('Error fetching items:', error);
          }
      }
      fetchItems();
  }, []);
  return (
    <>
      {items.map(item => (
    <div key={item.id}>
      <div className="flex items-center gap-5">
        <div className="rounded-full object-cover">
          <img
            src={item.posterAvatar}
            alt=""
            className={`w-[88.25px] h-[88.25px] ${props.size} rounded-full object-cover`}
          />
        </div>
        <div>
          <p className="text-[0.96519rem] text-[#222325] font-bold font-Roboto lg:text-[1.75rem]">
          {item.posterName}
          </p>
          <div className="flex items-center gap-2">
            <img src={Like} alt="" />
            <p className="text-[0.44813rem] text-[#404145] font-Roboto lg:text-[0.8125rem]">
              (1.4k)
            </p>
          </div>
        </div>
      </div>
    </div>
    ))}
    </>
  );
}

export default AgentPic;

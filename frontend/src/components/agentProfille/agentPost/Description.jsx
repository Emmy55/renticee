import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Description() {
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
    <div key={item.id} className="mt-10">
      <p className="text-[1.1875rem] text-[#222325] font-bold font-Roboto">
      {item.description}
      </p>
      <p className="text-base text-[#404145] font-Roboto mt-3">
      {item.posterName}
      </p>
    </div>
    ))}
    </>
  );
}

export default Description;

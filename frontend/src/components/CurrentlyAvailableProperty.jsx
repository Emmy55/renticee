import React from "react";

function CurrentlyAvailableProperty() {
  return (
    <div className="md:relative h-[194px]  mt-12 shadow-xl border border-solid border-gray-50 text-xl p-2 sm:p-4">
      <h3 className=" pb-2 font-Roboto">
        Currently Available Property For Rent
      </h3>
      <div className="flex">
        <h2>Types</h2>
        <p className="text-xs p-2 pl-4 font-Roboto">1 bed</p>
        <p className="text-xs p-2 pl-4 font-Roboto">2 bed</p>
        <p className="text-xs p-2 pl-4 font-Roboto">3 bed</p>
        <p className="text-xs p-2 pl-4 font-Roboto">4 bed</p>
        <p className="text-xs p-2 pl-4 font-Roboto">5 bed</p>
      </div>
      <div className="flex">
        <h2 className="text-sm mt-1 font-Roboto">Flats</h2>
        <p className="text-xs p-2 pl-6 ml-3 relative left-1 font-Roboto">
          2256
        </p>
        <p className="text-xs p-2 pl-6 font-Roboto">2835</p>
        <p className="text-xs p-2 pl-6 font-Roboto">2420</p>
        <p className="text-xs p-2 pl-6 font-Roboto">351</p>
        <p className="text-xs p-2 pl-7 font-Roboto">47</p>
      </div>
      <div className="flex">
        <h2 className="text-sm mt-1 font-Roboto">Houses</h2>
        <p className="text-xs p-2 pl-5 ml-5 relative -left-3 font-Roboto">81</p>
        <p className="text-xs p-2 pl-5 relative left-0 font-Roboto">902</p>
        <p className="text-xs p-2 pl-5 relative left-1 font-Roboto">1268</p>
        <p className="text-xs p-2 pl-7 font-Roboto">3234</p>
        <p className="text-xs p-2 pl-5 font-Roboto">849</p>
      </div>
    </div>
  );
}

export default CurrentlyAvailableProperty;

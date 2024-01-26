import React, { useState } from "react";
import DateRangePicker from "./DateRangePicker";

import Plus from "../images/plus.svg";
import Search from "../images/search.svg";

function TransactionMain() {
  const [selectedDateRange, setSelectedDateRange] = useState(null);

  const handleDateChange = (dates) => {
    // setSelectedDateRange(dates);
    // Perform your search or fetch transaction history based on the selected date range
  };

  // For search
  const handleSearch = (event) => {
    event.preventDefault();
    // You can perform the search logic here
    // Call the onSearch callback with the input value
    onSearch(event.target.elements.searchInput.value);
  };

  // const handleSearch = (searchTerm) => {
  //   // Perform the search logic based on the search term
  //   console.log("Searching for:", searchTerm);
  //   // Add your search functionality here
  // };

  // Table data
  const data = [
    {
      column1: "Nov 20, 2023 7:40PM",
      column2: "Airtime",
      column3: "12345678990",
      column4: "Bill Payment",
      column5: "Wallet",
      column6: "₦600",
      column7: "Done",
    },
    // Add more data rows as needed
    {
      column1: "Nov 20, 2023 7:40PM",
      column2: "Airtime",
      column3: "12345678990",
      column4: "Bill Payment",
      column5: "Wallet",
      column6: "₦600",
      column7: "Fail",
    },
    // Add more data rows as needed
  ];

  return (
    <div>
      <div className="">
        <div>
          <div className="mt-8">
            <div className="pl-3 min-[380px]:pl-5">
              <h1 className="text-2xl font-bold mb-4">Transaction History</h1>
              <div className="flex gap-4 md:gap-10">
                <DateRangePicker onDateChange={handleDateChange} />
                <div>
                  <form
                    onSubmit={handleSearch}
                    className="flex items-center flex-col md:flex-row gap-4 md:gap-10"
                  >
                    <div className="relative">
                      <input
                        type="text"
                        id="searchInput"
                        placeholder={"Search..."}
                        className="w-[136px] h-[38.84px] md:w-[222px] md:h-[43px] pl-8 border border-[#63666D] rounded focus:outline-none focus:ring focus:border-blue-300"
                      />
                      <img
                        src={Search}
                        alt="search"
                        className="absolute top-[9px] md:top-3 ml-2"
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex items-center justify-center bg-blue-500 text-white w-[136px] h-[38.84px] md:w-[165px] md:h-[44px] font-Roboto rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                      <img src={Plus} alt="Filter" />
                      Add Filter
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Display transaction history or perform search based on selectedDateRange */}
            {selectedDateRange && (
              <div className="mt-4">
                <p>
                  Showing transactions from{" "}
                  {selectedDateRange.start.toDateString()} to{" "}
                  {selectedDateRange.end.toDateString()}
                </p>
                {/* Render your transaction history here */}
              </div>
            )}
            <div className=" overflow-x-auto">
              <table className="w-[1000px] lg:w-full mt-10 min-w-full">
                <thead>
                  <tr className="">
                    <th className="border-b border-r font-normal border-r-[#DFE2E6] border-b-[#DFE2E6] w-[188px]">
                      Date & Time
                    </th>
                    <th className="border-b border-r font-normal border-r-[#DFE2E6] border-b-[#DFE2E6] w-[188px]">
                      Transaction
                    </th>
                    <th className="border-b border-r font-normal border-r-[#DFE2E6] border-b-[#DFE2E6] w-[188px]">
                      Transaction ID
                    </th>
                    <th className="border-b border-r font-normal border-r-[#DFE2E6] border-b-[#DFE2E6] w-[188px]">
                      Details
                    </th>
                    <th className="border-b border-r font-normal border-r-[#DFE2E6] border-b-[#DFE2E6] w-[188px]">
                      Payment Source
                    </th>
                    <th className="border-b border-r font-normal border-r-[#DFE2E6] border-b-[#DFE2E6] w-[188px]">
                      Amount
                    </th>
                    <th className="border-b border-r font-normal border-r-[#DFE2E6] border-b-[#DFE2E6] w-[188px]">
                      Statues
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index}>
                      <td className="border p-2 h-[86px] pl-5">
                        {row.column1}
                      </td>
                      <td className="border p-2 h-[86px]">{row.column2}</td>
                      <td className="border p-2 h-[86px]">{row.column3}</td>
                      <td className="border p-2 h-[86px]">{row.column4}</td>
                      <td className="border p-2 h-[86px]">{row.column5}</td>
                      <td className="border p-2 h-[86px]">{row.column6}</td>
                      <td className="border p-2 h-[86px]">{row.column7}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default TransactionMain;

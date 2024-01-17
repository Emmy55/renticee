// DateRangePicker.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../images/calender.svg";

const DateRangePicker = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onDateChange({ start, end });

    // Log the selected dates to the console
    console.log("Selected Dates:", { start, end });
  };

  return (
    <div className="flex ">
      <DatePicker
        selected={startDate}
        onChange={(date) => handleDateChange([date, endDate])}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start Date"
        className="border border-[#63666D] text-sm pl-2 w-[86px] h-[38px] md:h-[43px] md:w-[97px] rounded-l-[7px] outline-none"
      />
      <div className="relative">
        <DatePicker
          selected={endDate}
          onChange={(date) => handleDateChange([startDate, date])}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          name="endDate"
          id="endDate"
          placeholderText="End Date"
          className="border appearance-none text-sm border-[#63666D] border-l-0 pl-2 w-[110px] h-[38px] md:h-[43px] md:w-[125px] rounded-r-[7px] outline-none"
        />
        <label
          forHtml="endDate"
          className="pointer-events-none absolute inset-y-0 top-[-55px]  md:top-0 right-0 pr-1 md:pr-3 flex items-center"
        >
          <img src={Calendar} alt="calendar" />
        </label>
      </div>
    </div>
  );
};

export default DateRangePicker;

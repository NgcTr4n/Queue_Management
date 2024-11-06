import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";
import "./Calendar.css";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date()); // Set initial selected date to today

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  const renderHeader = () => {
    const monthFormat = "MMMM yyyy";
    return (
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button onClick={handlePrevMonth} className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M7.58337 10.6665L12.3334 15.3332C12.6667 15.6665 13.1667 15.6665 13.5 15.3332C13.8334 14.9998 13.8334 14.4998 13.5 14.1665L9.41671 9.99984L13.5 5.83317C13.8334 5.49984 13.8334 4.99984 13.5 4.6665C13.3334 4.49984 13.1667 4.4165 12.9167 4.4165C12.6667 4.4165 12.5 4.49984 12.3334 4.6665L7.58337 9.33317C7.25004 9.74984 7.25004 10.2498 7.58337 10.6665C7.58337 10.5832 7.58337 10.5832 7.58337 10.6665Z"
              fill="#FF7506"
            />
          </svg>
        </button>
        <span
          className="fw-bold"
          style={{
            fontSize: "16px",
            color: "#FF7506",
            fontWeight: "700",
          }}
        >
          {format(currentDate, monthFormat)}
        </span>
        <button onClick={handleNextMonth} className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M13.45 9.40845L8.73334 4.70011C8.65587 4.622 8.5637 4.56001 8.46215 4.5177C8.3606 4.4754 8.25168 4.45361 8.14167 4.45361C8.03166 4.45361 7.92274 4.4754 7.82119 4.5177C7.71964 4.56001 7.62747 4.622 7.55001 4.70011C7.3948 4.85625 7.30768 5.06746 7.30768 5.28761C7.30768 5.50777 7.3948 5.71898 7.55001 5.87511L11.675 10.0418L7.55001 14.1668C7.3948 14.3229 7.30768 14.5341 7.30768 14.7543C7.30768 14.9744 7.3948 15.1856 7.55001 15.3418C7.62718 15.4205 7.71922 15.4832 7.82078 15.5261C7.92235 15.569 8.03142 15.5913 8.14167 15.5918C8.25193 15.5913 8.361 15.569 8.46256 15.5261C8.56412 15.4832 8.65616 15.4205 8.73334 15.3418L13.45 10.6334C13.5346 10.5554 13.6021 10.4607 13.6483 10.3553C13.6944 10.2499 13.7183 10.136 13.7183 10.0209C13.7183 9.90586 13.6944 9.79202 13.6483 9.68661C13.6021 9.58119 13.5346 9.48648 13.45 9.40845Z"
              fill="#FF7506"
            />
          </svg>
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    return (
      <div className="row">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="col text-center fw-bold"
            style={{ color: "#FF9138", fontSize: "14px", fontWeight: "700" }}
          >
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const isToday = selectedDate && isSameDay(day, selectedDate);
        const isCurrentMonth = isSameMonth(day, monthStart);

        days.push(
          <div
            key={day.toISOString()}
            className={`col text-center py-2 ${
              isCurrentMonth ? "" : "text-muted"
            } ${isToday ? "bg-orange text-white" : ""}`}
            style={{
              borderRadius: "10px",
            }}
            onClick={() => handleDateClick(day)}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day.toISOString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="calendar p-3 rounded">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;

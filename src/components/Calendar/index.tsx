"use client";

import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
} from "date-fns";
import clsx from "clsx";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  // TODO: save nowDate in State Management
  const nowDate = new Date();
  
  // Mendapatkan nama bulan dan tahun untuk tampilan header
  const monthName = format(currentDate, "MMMM");
  const year = format(currentDate, "yyyy");

  // Fungsi untuk mendapatkan hari-hari dalam bulan tersebut
  const getDaysInMonth = () => {
    const startDate = startOfWeek(startOfMonth(currentDate)); // Hari pertama dalam bulan
    const endDate = endOfWeek(endOfMonth(currentDate)); // Hari terakhir dalam bulan

    return eachDayOfInterval({
      start: startDate,
      end: endDate,
    });
  };

  // Fungsi untuk mengubah bulan
  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const days = getDaysInMonth(); // Semua hari dalam baris dan kolom

  return (
    <div className="p-4 border border-scheme-1-foreground rounded-xl w-full mx-0 my-auto">
      {/* Header untuk menampilkan nama bulan dan tahun */}
      <div className="flex justify-between items-center mb-8">
        <button onClick={handlePrevMonth}>Prev</button>
        <div className="font-bold text-2xl">
          {monthName} {year}
        </div>
        <button onClick={handleNextMonth}>Next</button>
      </div>

      {/* Grid untuk hari-hari dalam satu minggu */}
      <div className="h-auto grid grid-cols-7 gap-5">
        {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
          <div key={day} className="font-bold text-center text-lg text-scheme-1-foreground">
            {day}
          </div>
        ))}

        {/* Baris dan kolom hari-hari */}
        {days.map((day) => (
          <button
            key={day.toISOString()}
            className={clsx(
              "text-center p-3",
              {
                "text-scheme-1-foreground/0" : format(day, "MM") !== format(currentDate, "MM"),
                "text-scheme-1-background bg-scheme-1-foreground rounded-xl" : format(day, "d") === format(nowDate, "d") && format(day, "MM") === format(nowDate, "MM"),
              },
            )}
          >
            {format(day, "d")}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

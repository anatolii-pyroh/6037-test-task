"use client";

import {
  addWeeks,
  eachDayOfInterval,
  format,
  isFirstDayOfMonth,
  isLastDayOfMonth,
  startOfDay,
} from "date-fns";
import { useState } from "react";

import { SessionDateInfo } from "@/typings/date.type";

import DaySelector from "@/components/views/book-session-view/components/day-selector";
import TimeSelector from "@/components/views/book-session-view/components/time-selector";

const DateSelector = () => {
  // generating dates ranges for the next 6 weeks
  const [dateRanges, setDateRanges] = useState<SessionDateInfo[]>(() => {
    const today = startOfDay(new Date());
    const endDate = startOfDay(addWeeks(today, 6));

    const dateRange = eachDayOfInterval({ start: today, end: endDate });

    return dateRange.map((date) => ({
      date,
      dayName: format(date, "EEE"),
      dayNumber: format(date, "d"),
      month: format(date, "MMM"),
      timestamp: Math.floor(date.getTime() / 1000),
      isFirstDay: isFirstDayOfMonth(date),
      isLastDay: isLastDayOfMonth(date),
    })) as SessionDateInfo[];
  });

  return (
    <>
      <DaySelector dates={dateRanges} />

      <TimeSelector />
    </>
  );
};

export default DateSelector;

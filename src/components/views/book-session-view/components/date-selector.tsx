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

import { Session, SessionDateOption } from "@/typings/date.type";

import DaySelector from "@/components/views/book-session-view/components/day-selector";
import TimeSelector from "@/components/views/book-session-view/components/time-selector";

const DateSelector = () => {
  const [session, setSession] = useState<Session>(null);
  const [dateRanges, setDateRanges] = useState<SessionDateOption[]>(() => {
    const today = startOfDay(new Date());
    const endDate = startOfDay(addWeeks(today, 6));

    const dateRange = eachDayOfInterval({ start: today, end: endDate });

    return dateRange.map((date) => ({
      date,
      dayName: format(date, "EEE"),
      dayNumber: format(date, "d"),
      month: format(date, "MMM"),
      isFirstDay: isFirstDayOfMonth(date),
      isLastDay: isLastDayOfMonth(date),
    })) as SessionDateOption[];
  });

  return (
    <>
      <DaySelector
        dates={dateRanges}
        session={session}
        setSession={setSession}
      />

      {session?.date ? <TimeSelector /> : null}
    </>
  );
};

export default DateSelector;

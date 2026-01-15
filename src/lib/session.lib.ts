import {
  addWeeks,
  eachDayOfInterval,
  format,
  isBefore,
  isFirstDayOfMonth,
  isLastDayOfMonth,
  isToday,
  setHours,
  setMinutes,
  startOfDay,
} from "date-fns";

import {
  SessionDateOption,
  SessionTimeSlotOption,
} from "@/typings/session.type";

// date ranges for 6 weeks from today
export const generateDateRanges = () => {
  const today = startOfDay(new Date());
  const endDate = startOfDay(addWeeks(today, 6));

  const dateRange = eachDayOfInterval({ start: today, end: endDate });

  const dateRanges = dateRange.map((date) => ({
    date,
    dayName: format(date, "EEE"),
    dayNumber: format(date, "d"),
    month: format(date, "MMM"),
    isFirstDay: isFirstDayOfMonth(date),
    isLastDay: isLastDayOfMonth(date),
  })) as SessionDateOption[];

  return dateRanges;
};

// time slots from 8am to 8pm with 15-minute intervals
export const generateTimeSlots = (date: Date) => {
  const timeSlots = Array.from({ length: 49 }, (_, index) => {
    const totalMinutes = index * 15;
    const hour = 8 + Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;

    const timeString = format(
      setHours(setMinutes(date, minute), hour),
      "h:mm a",
    );

    return {
      hour,
      minute,
      timeString,
    };
  }) as SessionTimeSlotOption[];

  return timeSlots;
};

export const calculateIsTimeSlotDisabled = (
  selectedDate: Date,
  minute: number,
  hour: number,
) => {
  if (!isToday(selectedDate)) return false;

  const slotDateTime = setHours(setMinutes(selectedDate, minute), hour);
  return isBefore(slotDateTime, new Date());
};

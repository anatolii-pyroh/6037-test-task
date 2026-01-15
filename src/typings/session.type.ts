export interface SessionDateOption {
  date: Date;
  dayName: string;
  dayNumber: string;
  month: string;
  isFirstDay: boolean;
  isLastDay: boolean;
}

export interface SessionTimeSlotOption {
  hour: number;
  minute: number;
  timeString: string;
}

export type Session = {
  date: Date;
  time: string | null;
  timestamp: number | null;
} | null;

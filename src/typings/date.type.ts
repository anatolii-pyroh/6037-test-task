export interface SessionDateOption {
  date: Date;
  dayName: string;
  dayNumber: string;
  month: string;
  isFirstDay: boolean;
  isLastDay: boolean;
}

export type Session = {
  date: Date;
  time: string;
  timestamp: number | null;
} | null;

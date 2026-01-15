"use client";

import { useState } from "react";

import { generateDateRanges } from "@/lib/session.lib";
import { Session, SessionDateOption } from "@/typings/session.type";

import DaySelector from "@/components/views/book-session-view/components/day-selector";
import TimeSelector from "@/components/views/book-session-view/components/time-selector";

const DateSelector = () => {
  const [session, setSession] = useState<Session>(null);
  const [dateRanges, setDateRanges] = useState<SessionDateOption[]>(() => {
    return generateDateRanges();
  });

  return (
    <>
      <DaySelector
        dates={dateRanges}
        session={session}
        setSession={setSession}
      />

      {session ? (
        <TimeSelector session={session} setSession={setSession} />
      ) : null}
    </>
  );
};

export default DateSelector;

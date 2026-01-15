"use client";

import { useState } from "react";
import { toast } from "sonner";

import { delay } from "@/lib/common.lib";
import { generateDateRanges } from "@/lib/session.lib";
import { Session, SessionDateOption } from "@/typings/session.type";

import MotionDiv from "@/components/common/motion-div";
import { Button } from "@/components/ui/button";
import DaySelector from "@/components/views/book-session-view/components/day-selector";
import TimeSelector from "@/components/views/book-session-view/components/time-selector";

const DateSelector = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState<Session>(null);
  const [dateRanges, setDateRanges] = useState<SessionDateOption[]>(() => {
    return generateDateRanges();
  });

  const handleConfirm = async () => {
    const { timestamp } = session as NonNullable<Session>;

    setIsLoading(true);

    await delay(1000);
    toast.success("Session confirmed");
    console.log({ timestamp });

    setIsLoading(false);
  };

  return (
    <>
      <DaySelector
        dates={dateRanges}
        session={session}
        setSession={setSession}
      />

      <MotionDiv visible={!!session}>
        {session ? (
          <TimeSelector session={session} setSession={setSession} />
        ) : null}
      </MotionDiv>

      <Button
        className="mt-auto w-full max-w-[370px]"
        loading={isLoading}
        disabled={!session?.timestamp}
        onClick={handleConfirm}
      >
        Confirm
      </Button>
    </>
  );
};

export default DateSelector;

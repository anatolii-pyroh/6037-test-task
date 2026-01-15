"use client";

import BookSessionContainer from "@/components/views/book-session-view/components/book-session-container";
import DateSelector from "@/components/views/book-session-view/components/date-selector";
import SectionHeading from "@/components/views/book-session-view/components/section-heading";

const BookSessionView = () => {
  return (
    <div className="container flex grow items-center justify-center py-2">
      <BookSessionContainer>
        <SectionHeading />

        <DateSelector />
      </BookSessionContainer>
    </div>
  );
};

export default BookSessionView;

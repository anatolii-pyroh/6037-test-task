"use client";

import BookSessionContainer from "@/components/views/book-session-view/components/book-session-container";
import DateSelector from "@/components/views/book-session-view/components/date-selector";
import SectionHeading from "@/components/views/book-session-view/components/section-heading";

const BookSessionView = () => {
  return (
    <BookSessionContainer>
      <SectionHeading />

      <DateSelector />
    </BookSessionContainer>
  );
};

export default BookSessionView;

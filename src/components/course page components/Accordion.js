import React, { useState } from "react";
import { AccordionItem } from "./AccordionItem";
import "../components styles/course page styles/Accordion.css";

export const Accordion = ({ content, toggleAll }) => {
  const itemList = content.map((lecture) => (
    <AccordionItem key={lecture[0]} lecture={lecture} toggleAll={toggleAll} />
  ));

  const [seeMore, setSeeMore] = useState(false);
  const seeAll = () => {
    setSeeMore(true);
  };

  const renderedItemList = seeMore ? itemList : itemList.slice(0, 5);
  let seeMoreButton = (
    <button className="see-more-button" onClick={() => seeAll()}>
      See all lectures
    </button>
  );
  seeMoreButton = seeMore ? null : seeMoreButton;
  return (
    <>
      <div>{renderedItemList}</div>
      {seeMoreButton}
    </>
  );
};

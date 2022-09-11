import React from "react";
import "../components styles/course page styles/ShortcutNav.css";
import { HashLink } from "react-router-hash-link";

export const ShortcutNav = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -140;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div className="short-nav">
      <HashLink smooth to={"./#overview"} scroll={(el) => scrollWithOffset(el)}>
        Overview
      </HashLink>
      <HashLink smooth to={"./#content"} scroll={(el) => scrollWithOffset(el)}>
        Curriculum
      </HashLink>
      <HashLink
        smooth
        to={"./#instructor"}
        scroll={(el) => scrollWithOffset(el)}
      >
        Instructor
      </HashLink>
      <HashLink smooth to={"./#reviews"} scroll={(el) => scrollWithOffset(el)}>
        Reviews
      </HashLink>
    </div>
  );
};

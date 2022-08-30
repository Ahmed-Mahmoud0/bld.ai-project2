import React from "react";
import CourseList from "./CourseList";
import ExploreButton from "./ExploreButton";
import SectionDescription from "./SectionDescription";
import SectionTitle from "./SectionTitle";
import "./components styles/CourseSection.css";

function CourseSection() {
  return (
    <div className="course-section">
      <SectionTitle />
      <SectionDescription />
      <ExploreButton />
      <CourseList />
    </div>
  );
}

export default CourseSection;

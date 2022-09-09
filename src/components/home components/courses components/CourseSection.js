import React from "react";
import CourseList from "./CourseList";
import ExploreButton from "./ExploreButton";
import SectionDescription from "./SectionDescription";
import SectionTitle from "./SectionTitle";
import "../../components styles/courses styles/CourseSection.css";
import { CoursesIntro } from "./CoursesIntro";

function CourseSection() {
  return (
    <>
      <CoursesIntro />
      <div className="course-section">
        <SectionTitle />
        <SectionDescription />
        <ExploreButton />
        <CourseList />
      </div>
    </>
  );
}

export default CourseSection;

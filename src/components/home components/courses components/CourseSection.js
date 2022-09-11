import React from "react";
import CourseList from "./CourseList";
import ExploreButton from "./ExploreButton";
import SectionDescription from "./SectionDescription";
import SectionTitle from "./SectionTitle";
import "../../components styles/courses styles/CourseSection.css";
import { CoursesIntro } from "./CoursesIntro";
import { LoadingSpinner } from "../../../components/LoadingSpinner";

function CourseSection({ loading }) {
  return (
    <>
      <CoursesIntro />
      <div className="course-section">
        <SectionTitle />
        <SectionDescription />
        <ExploreButton />
        {loading ? <LoadingSpinner /> : <CourseList />}
      </div>
    </>
  );
}

export default CourseSection;

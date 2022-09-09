import React from "react";
import "../components styles/course page styles/CourseHeader.css";
import { CreatedBy } from "./CreatedBy";
import { OneCourseIntroduction } from "./OneCourseIntroduction";
import { OneCourseRatings } from "./OneCourseRatings";
import { OneCourseTitle } from "./OneCourseTitle";
import { TopicsPath } from "./TopicsPath";
import { UpdateAndLang } from "./UpdateAndLang";

export const CourseHeader = ({ course }) => {
  return (
    <div className="course-header">
      <TopicsPath />
      <OneCourseTitle title={course.title} />
      <OneCourseIntroduction Introduction={course.Introduction} />
      <OneCourseRatings
        rate={course.rate}
        ratingCount={course.ratingCount}
        enrollCount={course.enrollCount}
      />
      <CreatedBy instructor={course.instructor.name} />
      <UpdateAndLang lastUpdate={course.lastUpdate} />
    </div>
  );
};

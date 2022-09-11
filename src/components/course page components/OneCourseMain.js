import React from "react";
import "../components styles/course page styles/OneCourseMain.css";
import { CourseContent } from "./CourseContent";
import { CourseOverview } from "./CourseOverview";
import { Instructor } from "./Instructor";
import { Reviews } from "./Reviews";
import { StudentFeedback } from "./StudentFeedback";

export const OneCourseMain = ({ course }) => {
  return (
    <div className="course-main">
      <CourseOverview overview={course.overview} />
      <CourseContent
        sectionsCount={course.sectionsCount}
        lecturesCount={course.lecturesCount}
        totalLength={course.totalLength}
        content={course.content}
        requirements={course.requirements}
        description={course.description}
      />
      <Instructor instructor={course.instructor} />
      <StudentFeedback
        rate={course.rate}
        feedbackRating={course.studentFeedback}
      />
      <Reviews reviews={course.reviews} />
    </div>
  );
};

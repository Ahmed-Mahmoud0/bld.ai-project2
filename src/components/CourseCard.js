import React from "react";
import Courses from "../data/db.json";
import CourseImage from "./CourseImage";
import CourseTitle from "./CourseTitle";
import CourseInstructor from "./CourseInstructor";
import CourseRating from "./CourseRating";
import CoursePrice from "./CoursePrice";
import "./components styles/CourseCard.css";

function CourseCard(props) {
  return (
    <div className="course-card">
      <CourseImage url={Courses.courses[0].image} />
      <CourseTitle title={Courses.courses[0].title} />
      <CourseInstructor instructor={Courses.courses[0].instructor} />
      <CourseRating
        rate={Courses.courses[0].rate}
        enrolled={Courses.courses[0].enrollCount}
      />
      <CoursePrice
        price={Courses.courses[0].price}
        originalPrice={Courses.courses[0].originalPrice}
      />
    </div>
  );
}

export default CourseCard;

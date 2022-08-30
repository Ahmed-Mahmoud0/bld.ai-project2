import React from "react";
import CourseImage from "./CourseImage";
import CourseTitle from "./CourseTitle";
import CourseInstructor from "./CourseInstructor";
import CourseRating from "./CourseRating";
import CoursePrice from "./CoursePrice";
import "./components styles/CourseCard.css";

function CourseCard(props) {
  return (
    <div className="course-card">
      <CourseImage url={props.course.image} />
      <CourseTitle title={props.course.title} />
      <CourseInstructor instructor={props.course.instructor} />
      <CourseRating
        rate={props.course.rate}
        enrolled={props.course.enrollCount}
      />
      <CoursePrice
        price={props.course.price}
        originalPrice={props.course.originalPrice}
      />
    </div>
  );
}

export default CourseCard;

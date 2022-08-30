import React from "react";
import Courses from "../data/db.json";
import CourseCard from "./CourseCard";
import "./components styles/CourseList.css";

function CourseList() {
  const courseCardList = Courses.courses.map((course) => (
    <CourseCard key={course.id} course={course} />
  ));
  return <div className="card-list">{courseCardList}</div>;
}

export default CourseList;

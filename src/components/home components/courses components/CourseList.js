import React, { useContext, useEffect } from "react";
import CourseCard from "./CourseCard";
import "../../components styles/courses styles/CourseList.css";
import { CoursesContext } from "../../../App";

function CourseList() {
  let courses = useContext(CoursesContext);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(courses));
  }, [courses]);
  const data = window.localStorage.getItem("items");
  courses = JSON.parse(data);

  const courseCardList = courses.map((course) => (
    <CourseCard key={course.id} course={course} />
  ));
  return <div className="card-list">{courseCardList}</div>;
}

export default CourseList;

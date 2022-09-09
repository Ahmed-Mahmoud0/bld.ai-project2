import React, { useContext, useEffect } from "react";
import CourseCard from "./CourseCard";
import "../../components styles/courses styles/CourseList.css";
import { CoursesContext } from "../../../App";
import { useSearchParams } from "react-router-dom";

function CourseList() {
  let courses = useContext(CoursesContext);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(courses));
  }, [courses]);
  const data = window.localStorage.getItem("items");
  courses = JSON.parse(data);

  const [searchParams, setSearchParams] = useSearchParams();
  let searchValue = searchParams.get("filter");
  if (searchValue && searchValue.trim().length > 0) {
    searchValue = searchValue.trim().toLowerCase();
  }
  if (searchValue != null) {
    courses = courses.filter((course) =>
      course.title.trim().toLowerCase().includes(searchValue)
    );
  }

  const courseCardList = courses.map((course) => (
    <CourseCard key={course.id} course={course} />
  ));
  return <div className="card-list">{courseCardList}</div>;
}

export default CourseList;

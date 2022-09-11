import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import { CoursesContext } from "../../App";
import { OneCoursePage } from "./OneCoursePage";

export const CoursePage = () => {
  let courses = useContext(CoursesContext);
  const [data] = useState(window.localStorage.getItem("items"));
  courses = JSON.parse(data);
  const { courseId } = useParams();
  const course = courses.filter((course) => course.id == courseId);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  let searchValue = searchParams.get("filter");
  if (searchValue) {
    navigate("/");
  }

  return (
    <div>
      <OneCoursePage course={course[0]} />
    </div>
  );
};

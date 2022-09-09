import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CoursesContext } from "../../App";
import { OneCoursePage } from "./OneCoursePage";

export const CoursePage = () => {
  let courses = useContext(CoursesContext);
  const [data] = useState(window.localStorage.getItem("items"));
  courses = JSON.parse(data);

  const { courseId } = useParams();
  // const [id, setId] = useState();
  // useEffect(() => {
  //   setId(courseId);
  // }, [courseId]);

  // console.log(id);

  const course = courses.filter((course) => course.id == courseId);

  return (
    <div>
      <OneCoursePage course={course[0]} />
    </div>
  );
};

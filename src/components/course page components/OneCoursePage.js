import React from "react";
import { CourseHeader } from "./CourseHeader";
import { OneCourseMain } from "./OneCourseMain";
import { ShortcutNav } from "./ShortcutNav";

export const OneCoursePage = ({ course }) => {
  return (
    <div>
      <CourseHeader course={course} />
      <ShortcutNav />
      <OneCourseMain course={course} />
    </div>
  );
};

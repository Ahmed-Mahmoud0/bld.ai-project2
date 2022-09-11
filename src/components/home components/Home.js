import React from "react";
import { Header } from "./Header";
import CourseSection from "./courses components/CourseSection";

export const Home = ({ loading }) => {
  return (
    <div>
      <Header />
      <CourseSection loading={loading} />
    </div>
  );
};

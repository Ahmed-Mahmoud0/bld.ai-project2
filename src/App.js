import "./App.css";
import { NavBar } from "./components/navbar components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home components/Home";
import { CoursePage } from "./components/course page components/CoursePage";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "./components/course page components/Footer";

const baseURL = "http://localhost:3000/courses";

export const CoursesContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(data));
  }, [data]);

  return (
    <div className="App">
      <CoursesContext.Provider value={data}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home loading={loading} />} />
          <Route path="/course-page/:courseId" element={<CoursePage />} />
        </Routes>
        <Footer />
      </CoursesContext.Provider>
    </div>
  );
}

export default App;

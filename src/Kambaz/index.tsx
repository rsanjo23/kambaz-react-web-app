import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import { addEnrollment } from "./reducer";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    name: "New",
    number: "NEW1000",
    startDate: "2025-03-10",
    endDate: "2025-03-11",
    department: "N/A",
    credits: 4,
    description: "New",
    author: "654f9ec2ea7ead465908d1e3",
    image: "onepiecelogo.jpg",
  });
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
    dispatch(addEnrollment({ user: currentUser._id, course: newCourse._id }));
    fetchCourses();
  };
  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    })
    );
  };
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);
  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="/Kambaz/Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                  fetchCourses={fetchCourses}
                />
              </ProtectedRoute>
            } />
            <Route path="/Courses/:cid/*" element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            } />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}

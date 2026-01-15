import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar";

import ProtectedRoute from "./Components/ProtectedRoute";
import Card from "./Components/Card";

import Auth from "./Pages/Auth";
import Courses from "./Pages/Courses";
import CourseDetails from "./Pages/CourseDetails";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";

export default function App() {
  const isAuthenticated = true; // replace later with real auth

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />

        <Route element={<ProtectedRoute isAuth={isAuthenticated} />}>
          <Route
            path="/*"
            element={
              <div className="flex min-h-screen">
                <Sidebar />
                <div className="flex-1 p-0">
                  <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/courses/:id" element={<CourseDetails />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </div>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

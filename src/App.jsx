import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './components/sidebar';
import Threeboxes from './components/Threeboxes';
import Todaytimetable from './components/Todaytimetable';
import Fulltimetable from './components/Fulltimetable';
import Academicschedule from './components/Academicschedule';

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ This route ONLY renders Todaytimetable when visiting /todaytimetable */}
        <Route path="/todaytimetable" element={<Todaytimetable />} />
        <Route path="/fulltimetable" element={<Fulltimetable />} />
        <Route path="/academicschedule" element={<Academicschedule />} />


        {/* ✅ This route renders Sidebar and Threeboxes for all other pages */}
        <Route 
          path="/*" 
          element={
            <>
              <Sidebar />
              <Threeboxes />
              {/* <h1>Welcome to Home Page</h1> Example home content */}
            </>
          } />
      </Routes>
    </Router>
  );
}

export default App;

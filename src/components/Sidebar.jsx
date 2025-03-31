import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    // State to track sidebar visibility
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible,setIsVisible] = useState(true);
    

    // Function to open sidebar
    const openSidebar = () => {
        setIsOpen(true);
    };

    // Function to close sidebar
    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {/* Menu Icon */}
                <div className="toplayer">
                <img src="menu.png" className={`menu ${isOpen ? "open": ""}`} onClick={openSidebar} />
                <div className="heading">CSE C CENTER</div>
                </div>

            {/* Sidebar - Controlled via CSS class */}
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <img src="cross.png" className="cross" onClick={closeSidebar} alt="Close" />
                <div className="sections">
                    <div className="section0">
                        {/* <a href="todaytimetable.html">Today Time Table</a> */}
                        <Link to="/todaytimetable">Today time table</Link>
                    </div>
                    <div className="section1">
                        {/* <a href="fulltimetable.html">View Full Time Table</a> */}
                        <Link to="/fulltimetable">Full time table</Link>
                    </div>
                    <div className="section2">
                        {/* <a href="academic.html">Academic Schedule</a> */}
                        <Link to="/academicschedule">Academic Schedule</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

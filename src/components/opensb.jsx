import React from "react";
function Opensb(){
    return(
        <div className="sidebar" id="sb">
        <img src="cross.png" className="cross" onClick="closesb()" id="cross"/>
        <div className="sections">
            <div className="section0">
                <a href="todaytimetable.html">Today Time Table</a>
            </div>
            <div className="section1">
                <a href="fulltimetable.html">View Full Time Table</a>
            </div>
            <div className="section2">
                <a href="academic.html">Academic Schedule</a>
            </div>
        </div>
    </div>
    );
}
export default Opensb;
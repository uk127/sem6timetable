import React from "react";
function Academicschedule(){
    return(
        <>
        <img 
                src="left-arrow.png" 
                className="backbtn" 
                onClick={() => window.location.href = "index.html"} 
                style={{ height: "80px",width: "80px",left: "-10px" ,top: "10px" }}
            />
        <h1>Academic schedule</h1>
        <div className="academic_images">
        <img src="Academic Schedule1.jpg"/>
        <img src="Academic Schedule2.jpg"/>
        </div>
        </>
    );
}
export default Academicschedule;
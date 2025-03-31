

import React, { useEffect, useState } from "react";

const timeTables = {
    1: { name: "Monday TimeTable", schedule: [["8:30-9:20", "OE"], ["9:20-10:10", "Cryptography Lab"], ["10:10-10:25", "Break"], ["10:25-11:15", "Cryptography Lab"], ["11:15-12:05", "Cryptography Lab"], ["12:05-12:45", "Lunch"], ["12:45-1:35", "Complier Design"], ["1:35-2:25", "Cryptography"], ["2:25-3:15", "IoT"]] },
    2: { name: "Tuesday TimeTable", schedule: [["8:30-9:20", "OE"], ["9:20-10:10", "Cryptography"], ["10:10-10:25", "Break"], ["10:25-11:15", "SPM"], ["11:15-12:05", "Complier Design"], ["12:05-12:45", "Lunch"], ["12:45-1:35", "IoT"], ["1:35-2:25", "Cloud Computing"], ["2:25-3:15", "Cryptography"]] },
    3: { name: "Wednesday TimeTable", schedule: [["8:30-9:20", "OE"], ["9:20-10:10", "SPM"], ["10:10-10:25", "Break"], ["10:25-11:15", "IoT"], ["11:15-12:05", "Cloud Computing"], ["12:05-12:45", "Lunch"], ["12:45-1:35", "Cloud Computing Lab"], ["1:35-2:25", "Cloud Computing Lab"], ["2:25-3:15", "Cloud Computing Lab"]] },
    4: { name: "Thursday TimeTable", schedule: [["8:30-9:20", "Complier Design"], ["9:20-10:10", "EDA"], ["10:10-10:25", "Break"], ["10:25-11:15", "EDA"], ["11:15-12:05", "EDA"], ["12:05-12:45", "Lunch"], ["12:45-1:35", "SPM"], ["1:35-2:25", "Gen AI"], ["2:25-3:15", "Cloud Computing"]] },
    5: { name: "Friday TimeTable", schedule: [["8:30-9:20", "Gen AI"], ["9:20-10:10", "Cloud Computing"], ["10:10-10:25", "Break"], ["10:25-11:15", "Cryptography"], ["11:15-12:05", "IoT"], ["12:05-12:45", "Lunch"], ["12:45-1:35", "Complier Design"], ["1:35-2:25", "Placement Training"], ["2:25-3:15", "Placement Training"]] }
};

function Timetable() {
    const [day, setDay] = useState(null);

    useEffect(() => {
        const today = new Date().getDay(); 
        // const today = 3;
        if (timeTables[today]) {
            setDay(timeTables[today]);
        }
    }, []);

    return (
        <div className="timetable-container">
            <img 
                src="left-arrow.png" 
                className="backbtn" 
                onClick={() => window.location.href = "index.html"} 
                style={{ height: "80px",width: "80px",left: "-10px" }}
            />
            <h1>{day ? day.name : "No Timetable Available"}</h1>
            {day && (
                <table border="1" className="todaytimetable">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {day.schedule.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry[0]}</td>
                                <td>{entry[1]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Timetable;

import React from "react";
function Fulltimetable() {
    return (
        <>
            <img 
                src="left-arrow.png" 
                className="backbtn" 
                onClick={() => window.location.href = "index.html"}
                style={{ height: "80px",width: "80px",left: "-20px" ,top:"-20px"}} 
            />
            <center>
                <h1 className="fulltimetableheading">FULL TIME TABLE</h1>
            </center>
            <table border="5px" className="fulltable">
                <tr>
                    <td>
                        DAY
                    </td>
                    <td>
                        8:30-9:20
                    </td>
                    <td>
                        9:20-10:10
                    </td>
                    <td>
                        10:10-10:25
                    </td>
                    <td>
                        10:25-11:15
                    </td>
                    <td>
                        11:15-12:05
                    </td>
                    <td>
                        12:05-12:45
                    </td>
                    <td>
                        12:45-1:35
                    </td>
                    <td>
                        1:35-2:25
                    </td>
                    <td>
                        2:25-3:15
                    </td>
                </tr>
                <tr>
                    <td>
                        MON
                    </td>
                    <td>
                        OE
                    </td>
                    <td>
                        Cryptography Lab
                    </td>
                    <td>
                        Break
                    </td>
                    <td>
                        Cryptography Lab
                    </td>
                    <td>
                        Cryptography Lab
                    </td>
                    <td>
                        Lunch
                    </td>
                    <td>
                        Complier Design
                    </td>
                    <td>
                        Cryptography
                    </td>
                    <td>
                        IoT
                    </td>
                </tr>
                <tr>
                    <td>
                        TUE
                    </td>
                    <td>
                        OE
                    </td>
                    <td>
                        Cryptography
                    </td>
                    <td>
                        Break
                    </td>
                    <td>
                        SPM
                    </td>
                    <td>
                        Complier Design
                    </td>
                    <td>
                        Lunch
                    </td>
                    <td>
                        IoT
                    </td>
                    <td>
                        Cloud Computing
                    </td>
                    <td>
                        Cryptography
                    </td>
                </tr>
                <tr>
                    <td>
                        WED
                    </td>
                    <td>
                        OE
                    </td>
                    <td>
                        SPM
                    </td>
                    <td>
                        Break
                    </td>
                    <td>
                        IoT
                    </td>
                    <td>
                        Cloud Computing
                    </td>
                    <td>
                        Lunch
                    </td>
                    <td>
                        Cloud Computing Lab
                    </td>
                    <td>
                        Cloud Computing Lab
                    </td>
                    <td>
                        Cloud Computing Lab
                    </td>
                </tr>
                <tr>
                    <td>
                        THU
                    </td>
                    <td>
                        Complier Design
                    </td>
                    <td>
                        EDA
                    </td>
                    <td>
                        Break
                    </td>
                    <td>
                        EDA
                    </td>
                    <td>
                        EDA
                    </td>
                    <td>
                        Lunch
                    </td>
                    <td>
                        SPM
                    </td>
                    <td>
                        Gen AI
                    </td>
                    <td>
                        Cloud Computing
                    </td>
                </tr>
                <tr>
                    <td>
                        FRI
                    </td>
                    <td>
                        Cloud Computing
                    </td>
                    <td>
                        Cloud Computing
                    </td>
                    <td>
                        Break
                    </td>
                    <td>
                        Cryptography
                    </td>
                    <td>
                        IoT
                    </td>
                    <td>
                        Lunch
                    </td>
                    <td>
                        Complier Design
                    </td>
                    <td>
                        Placement Training
                    </td>
                    <td>
                        Placement Training
                    </td>
                </tr>
            </table>
            <img className="fulltimetableimg" src="6semc.jpg"/>
        </>
    );
}
export default Fulltimetable;
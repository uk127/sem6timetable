import React,{useState,useEffect} from "react"
function Threeboxes(){
    const [box1,setbox1] = useState("");
    const [box2,setbox2] = useState("");
    const [box3,setbox3] = useState("");
    useEffect(()=>{
        let now = new Date();
        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        let day = now.getDay();
        // let h = 10;
        // let m = 40;
        // let s = 3;
        // let day = 1;
        //converting current time to min
        let ctim = h*60+m;
        // time slots
        let firstp = 8*60 +30;
        let secondp = 9*60 + 20;
        let thirdp = 10*60 +10;
        let fourthp = 10*60 + 25;
        let fivthp = 11*60 + 15;
        let sixthp = 12*60 + 5;
        let seventhp = 12*60 + 45;
        let eighthp = 1*60 +35;
        let ninthp = 2*60 + 25;
        let tenthp = 3*60 +15;
        //conditions to update the boxes
    //mon
        // 1 period
    if(day==1){
        if(ctim>=firstp && ctim<=secondp){
            setbox1("");
            setbox2("OE");
            setbox3("Cryptography Lab");
        // 2 period
        }else if(ctim>=secondp && ctim<=thirdp){
            setbox1("OE");
            setbox2("Cryptography Lab");
            setbox3("Break");
        // 3 period
        }else if(ctim>=thirdp && ctim<=fourthp){
            setbox1("Cryptography Lab");
            setbox2("Break");
            setbox3("Cryptography Lab");
        }
        // 4 period
        else if(ctim>=fourthp && ctim <=fivthp){
            setbox1("Break");
            setbox2("Cryptography Lab");
            setbox3("Cryptography Lab");
        }
        // 5 period 
        else if(ctim>=fivthp && ctim<= sixthp){
            setbox1("Cryptography Lab");
            setbox2("Cryptography Lab");
            setbox3("Lunch");
        }
        // 6 period
        else if(ctim<=sixthp && ctim<=seventhp){
            setbox1("Cryptography Lab");
            setbox2("Lunch");
            setbox3("Complier Design");
        }
        // 7 period
        else if(ctim<=seventhp && ctim<=eighthp){
            setbox1("Lunch");
            setbox2("Complier Design");
            setbox3("Cryptography");
        }
        // 8 period 
        else if(ctim<=eighthp && ctim<=ninthp){
            setbox1("Complier Design");
            setbox2("Cryptography");
            setbox3("IoT");
        }
        // 9 period
        else if(ctim<=ninthp && ctim<=tenthp){
            setbox1("Cryptography");
            setbox2("IoT");
            setbox3("");
        }
    }
    // tues
    if(day==2){
        if(ctim>=firstp && ctim<=secondp){
            setbox1("");
            setbox2("OE");
            setbox3("Cryptography");
        // 2 period
        }else if(ctim>=secondp && ctim<=thirdp){
            setbox1("OE");
            setbox2("Cryptography");
            setbox3("Break");
        // 3 period
        }else if(ctim>=thirdp && ctim<=fourthp){
            setbox1("Cryptography");
            setbox2("Break");
            setbox3("SPM");
        }
        // 4 period
        else if(ctim>=fourthp && ctim <=fivthp){
            setbox1("Break");
            setbox2("SPM");
            setbox3("Complier Design");
        }
        // 5 period 
        else if(ctim>=fivthp && ctim<= sixthp){
            setbox1("SPM");
            setbox2("Complier Design");
            setbox3("Lunch");
        }
        // 6 period
        else if(ctim<=sixthp && ctim<=seventhp){
            setbox1("Complier Design");
            setbox2("Lunch");
            setbox3("IoT");
        }
        // 7 period
        else if(ctim<=seventhp && ctim<=eighthp){
            setbox1("Lunch");
            setbox2("IoT");
            setbox3("Cloud Computing");
        }
        // 8 period 
        else if(ctim<=eighthp && ctim<=ninthp){
            setbox1("IoT");
            setbox2("Cloud Computing");
            setbox3("Crytography");
        }
        // 9 period
        else if(ctim<=ninthp && ctim<=tenthp){
            setbox1("Cloud Computing");
            setbox2("Cryptography");
            setbox3("");
        }
    }
    //wednes
    if(day==3){
        if(ctim>=firstp && ctim<=secondp){
            setbox1("");
            setbox2("OE");
            setbox3("Cryptography Lab");
        // 2 period
        }else if(ctim>=secondp && ctim<=thirdp){
            setbox1("OE");
            setbox2("SPM");
            setbox3("Break");
        // 3 period
        }else if(ctim>=thirdp && ctim<=fourthp){
            setbox1("SPM");
            setbox2("Break");
            setbox3("IoT");
        }
        // 4 period
        else if(ctim>=fourthp && ctim <=fivthp){
            setbox1("Break");
            setbox2("IoT");
            setbox3("Cloud Computing");
        }
        // 5 period 
        else if(ctim>=fivthp && ctim<= sixthp){
            setbox1("IoT");
            setbox2("Cloud Computing");
            setbox3("Lunch");
        }
        // 6 period
        else if(ctim<=sixthp && ctim<=seventhp){
            setbox1("Cloud Computing");
            setbox2("Lunch");
            setbox3("Cloud Computing Lab");
        }
        // 7 period
        else if(ctim<=seventhp && ctim<=eighthp){
            setbox1("Lunch");
            setbox2("Cloud Computing Lab");
            setbox3("Cloud Computing Lab");
        }
        // 8 period 
        else if(ctim<=eighthp && ctim<=ninthp){
            setbox1("Cloud Computing");
            setbox2("Cloud Computing");
            setbox3("Cloud Computing");
        }
        // 9 period
        else if(ctim<=ninthp && ctim<=tenthp){
            setbox1("Cloud Computing");
            setbox2("Cloud Computing");
            setbox3("");
        }
    }
    //thurs 
    if(day==4){
        if(ctim>=firstp && ctim<=secondp){
            setbox1("");
            setbox2("Complier Design");
            setbox3("EDA");
        // 2 period
        }else if(ctim>=secondp && ctim<=thirdp){
            setbox1("Complier Design");
            setbox2("EDA");
            setbox3("Break");
        // 3 period
        }else if(ctim>=thirdp && ctim<=fourthp){
            setbox1("SPM");
            setbox2("Break");
            setbox3("IoT");
        }
        // 4 period
        else if(ctim>=fourthp && ctim <=fivthp){
            setbox1("Break");
            setbox2("EDA");
            setbox3("EDA");
        }
        // 5 period 
        else if(ctim>=fivthp && ctim<= sixthp){
            setbox1("EDA");
            setbox2("EDA");
            setbox3("Lunch");
        }
        // 6 period
        else if(ctim<=sixthp && ctim<=seventhp){
            setbox1("EDA");
            setbox2("Lunch");
            setbox3("Cloud Computing Lab");
        }
        // 7 period
        else if(ctim<=seventhp && ctim<=eighthp){
            setbox1("Lunch");
            setbox2("SPM");
            setbox3("Gen AI");
        }
        // 8 period 
        else if(ctim<=eighthp && ctim<=ninthp){
            setbox1("SPM");
            setbox2("Gen AI");
            setbox3("Cloud Computing");
        }
        // 9 period
        else if(ctim<=ninthp && ctim<=tenthp){
            setbox1("Gen AI");
            setbox2("Cloud Computing");
            setbox3("");
        }
    }
    //fri
    if(day==5){
        if(ctim>=firstp && ctim<=secondp){
            setbox1("");
            setbox2("Gen AI");
            setbox3("Cloud Computing");
        // 2 period
        }else if(ctim>=secondp && ctim<=thirdp){
            setbox1("Gen AI");
            setbox2("Cloud Computing");
            setbox3("Break");
        // 3 period
        }else if(ctim>=thirdp && ctim<=fourthp){
            setbox1("Cloud Computing");
            setbox2("Break");
            setbox3("Cryptography");
        }
        // 4 period
        else if(ctim>=fourthp && ctim <=fivthp){
            setbox1("Break");
            setbox2("Cryptography");
            setbox3("IoT");
        }
        // 5 period 
        else if(ctim>=fivthp && ctim<= sixthp){
            setbox1("Cryptography");
            setbox2("IoT");
            setbox3("Lunch");
        }
        // 6 period
        else if(ctim<=sixthp && ctim<=seventhp){
            setbox1("IoT");
            setbox2("Lunch");
            setbox3("Complier Design");
        }
        // 7 period
        else if(ctim<=seventhp && ctim<=eighthp){
            setbox1("Lunch");
            setbox2("Complier Design");
            setbox3("Placement Training");
        }
        // 8 period 
        else if(ctim<=eighthp && ctim<=ninthp){
            setbox1("Complier Design");
            setbox2("Placement Training");
            setbox3("Placement Training");
        }
        // 9 period
        else if(ctim<=ninthp && ctim<=tenthp){
            setbox1("Placement Training");
            setbox2("Placement Training");
            setbox3("");
        }
    }
           
    },[]);
    
    return(
        <div className="periodsection">
                <div className="subhead">Previous Period</div>
                <div className="box1">{box1}</div>
                <div className="subhead">Current Period</div>
                <div className="box2">{box2}</div>
                <div className="subhead">Next Period</div>
                <div className="box3">{box3}</div>
        </div>
    )
}
export default Threeboxes;
import React from "react";
import './Help.css';
function Help(){
    return(
        <>
        <div className="help">
            <div className="ques">
                <img src="Images/help.png" alt="help" />
            </div>
            <div className="nm">
                <h4>Need Help?</h4>
                <h6>Please check our docs</h6>
            </div>
            <div className="bt">
                <button>DOCUMENTATION</button>
            </div>
        </div>
        </>
    );
}
export default Help;
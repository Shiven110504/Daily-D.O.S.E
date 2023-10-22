import React from "react";
import {Line} from "../../../assets/Line 6.svg"
import "src/app/frontend/styles.css";

export const DailyDosePage = () => {
    return (
        <div className="daily-dose-page">
            <div className="div">
                <div className="overlap">
                    <img className="line" alt="Line" src={Line} />
                    <img className="img" alt="Line" src={Line} />
                </div>
                <div className="overlap-group">
                    <img className="line-2" alt="Line" src={Line} />
                    <img className="line-3" alt="Line" src={Line} />
                </div>
            </div>
        </div>
    );
};

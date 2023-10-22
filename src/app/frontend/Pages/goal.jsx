import React from "react";
import fit from '../../../assets/fit.png'; // Adjust the path as necessary
import food from '../../../assets/food.png'; // Adjust the path as necessary
import sleep from '../../../assets/sleep.png'; // Adjust the path as necessary
import water from '../../../assets/water.png'; // Adjust the path as necessary
import "src/app/frontend/styles.css";

export const GoalPage = () => {
    return (
        <div className="goal-page">
            <div className="div">
                <div className="overlap-group">
                    <div className="chip">
                        <div>
                        <img src={water} alt="description" />
                        </div>
                        <div className="title">Hydration</div>
                    </div>
                    <div className="text-wrapper">Choose your goals</div>
                </div>
                <div className="chip-2">
                <div>
                        <img src={food} alt="description" />
                        </div>
                    <div className="title-2">Nutrition</div>
                </div>
                <div className="chip-3">
                <div>
                    <img src={sleep} alt="description" />
                        </div>
                    <div className="title">Sleep</div>
                </div>
                <div className="chip-4">
                <div>
                <img src={fit} alt="description" />
                        </div>
                    <div className="title">Fitness</div>
                </div>
                <div className="primary">
                    <div className="title-3">Summary</div>
                </div>
            </div>
        </div>
    );
};

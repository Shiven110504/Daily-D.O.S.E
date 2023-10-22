import React from "react";
import { Arcticons } from "..";
import { ArcticonsSuperSimpleSleepTimer } from "..arcticons_super-simple-sleep-timer.svg/";
import { PhBowlFoodThin } from "..ph_bowl-food-thin.svg";
import "src/app/frontend/styles.css";

export const GoalPage = () => {
    return (
        <div className="goal-page">
            <div className="div">
                <div className="overlap-group">
                    <div className="chip">
                        <Arcticons className="arcticons-waterdrinkreminder" />
                        <div className="title">Hydration</div>
                    </div>
                    <div className="text-wrapper">Choose your goals</div>
                </div>
                <div className="chip-2">
                    <PhBowlFoodThin className="ph-bowl-food-thin-instance" />
                    <div className="title-2">Nutrition</div>
                </div>
                <div className="chip-3">
                    <ArcticonsSuperSimpleSleepTimer className="arcticons-super" />
                    <div className="title">Sleep</div>
                </div>
                <div className="chip-4">
                    <img className="vector" alt="Vector" src="vector.svg" />
                    <div className="title">Fitness</div>
                </div>
                <div className="primary">
                    <div className="title-3">Summary</div>
                </div>
            </div>
        </div>
    );
};

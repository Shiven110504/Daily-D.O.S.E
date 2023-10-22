import React from "react";
import { RoundButtonFalse } from "../Components/RoundButtonFalse";
import { RoundButtonTrue } from "../Components/RoundButtonTrue";
import "src/app/frontend/styles.css";

export const StartPage = () => {
    return (
        <div className="start-page">
            <div className="div">
                <div className="overlap-group">
                    <p className="d-o-s-e">
                        <span className="span">
                            <br />
                            <br />
                        </span>
                        <span className="text-wrapper-2">
                            <br />D
                        </span>
                        <span className="span">.</span>
                        <span className="text-wrapper-3">O</span>
                        <span className="span">.</span>
                        <span className="text-wrapper-4">S</span>
                        <span className="span">.</span>
                        <span className="text-wrapper-5">
                            E<br />
                        </span>
                        <span className="span">&nbsp;</span>
                    </p>
                    <div className="text-wrapper-6">DAILY</div>
                    <p className="d-o-s-e">
                        <span className="span">
                            <br />
                            <br />
                        </span>
                        <span className="text-wrapper-2">
                            <br />D
                        </span>
                        <span className="span">.</span>
                        <span className="text-wrapper-3">O</span>
                        <span className="span">.</span>
                        <span className="text-wrapper-4">S</span>
                        <span className="span">.</span>
                        <span className="text-wrapper-5">
                            E<br />
                        </span>
                        <span className="span">&nbsp;</span>
                    </p>
                    <div className="text-wrapper-6">DAILY</div>
                </div>
                <div className="overlap">
                    <RoundButtonTrue className="design-component-instance-node" text="Sign Up" />
                </div>
                <div className="overlap-2">
                    <RoundButtonFalse className="design-component-instance-node" text="Log in" />
                </div>
            </div>
        </div>
    );
};

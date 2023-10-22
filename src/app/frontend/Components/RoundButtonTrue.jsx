import PropTypes from "prop-types";
import React from "react";
import "src/app/frontend/styles.css";

export const RoundButtonTrue = ({ text = "Sign Up", className }) => {
    return (
        <button className={`round-button-true ${className}`}>
            <button className="button">
                <div className="sign-up">{text}</div>
            </button>
        </button>
    );
};

RoundButtonTrue.propTypes = {
    text: PropTypes.string,
};

import React, { Component } from 'react';
import "./style.css";
import LandingCard from "../LandingCard/index";

class LandingPageComponent extends Component {
    render() {
        return (
            <div className="background-img">
                <LandingCard />
            </div>
        );
    }
}

export default LandingPageComponent;


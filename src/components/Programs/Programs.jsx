import React from "react";
import "./programs.css"
import { programsData} from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"
function Programs() {
    return (
    <div className="programs"id="Programs">
        <div className="programs-header">
            <span className="stroke-text">explore our </span>
            <span>programs</span>
            <span className="stroke-text">to shope you</span>
        </div>
        <div className="programs-categories">
            {programsData.map((program)=>(
                <div className="categories">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>join now</span>
                        <img src={RightArrow} alt="" />
                        </div>
                </div>
            ))}
        </div>
    </div>);
}

export default Programs;
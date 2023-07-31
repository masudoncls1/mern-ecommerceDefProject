import React from "react";

const Skills=(props)=>(
    <div className="skills">
                    <h3>Skills</h3>
                    <ul>
                        <li>{props.skilla}</li>
                        <li>{props.skillb}</li>
                        <li>{props.skillc}</li>
                        <li>{props.skilld}</li>
                        
                    </ul>
                </div>
);

export default Skills
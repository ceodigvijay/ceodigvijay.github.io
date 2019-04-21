import React from "react";
import "./style.css";
import blog from "../images/blog.png";
import anonmail from "../images/anonmail.png";
import hbt from "../images/hbt.png";
import thundersky from "../images/thundersky.png";

function projects(props) {
    let srcImg = "";
    switch (props.image) {
        case "blog":
            srcImg = blog;
            break;
        case "thundersky":
            srcImg = thundersky;
            break;
        case "annonmail":
            srcImg = anonmail;
            break;
        case "hbt":
            srcImg = hbt;
            break;
        default:
            srcImg = blog;
    }
    if (props.id % 2 === 0) {
        return (
            <div className="project-row">
                <div className="project-intro">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="project-img">
                    <img src={srcImg} alt="CrowdHead Blog CMS" />
                </div>
            </div>
        );
    } else {
        return (
            <div className="project-row">
                <div className="project-img">
                    <img src={srcImg} alt="CrowdHead Blog CMS" />
                </div>
                <div className="project-intro">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        );
    }
}

export default projects;

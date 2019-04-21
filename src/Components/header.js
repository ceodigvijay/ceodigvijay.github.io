import React from "react";
import "./style.css";
import TopNav from "./TopNav";
function header(props) {
    return (
        <nav>
            <TopNav />
            <div id="showcase">
                <div id="showcase-text">
                    <div>
                        lorem,
                        <br />
                        Lorem ipsum dolor. <br />
                        Lorem, ipsum.
                        <br />
                    </div>
                    <a className="btn" href="!#">
                        Know More
                    </a>
                </div>
                <div id="showcase-img" />
            </div>
        </nav>
    );
}

export default header;

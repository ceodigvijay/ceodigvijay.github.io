import React, { Component } from "react";
import './style.css'
import './circle.css'
class Skills extends Component {
    render() {
        return (
            <section id="skills-section">
                <div id="skill-title">Skills</div>
                <div class="skills-row">
                    <div class="skills">
                        <h2>HTML</h2>
                        <div class="c100 p90">
                            <span>90%</span>
                            <div class="slice">
                                <div class="bar" />
                                <div class="fill" />
                            </div>
                        </div>
                    </div>
                    <div class="skills">
                        <h2>CSS</h2>
                        <div class="c100 p80">
                            <span>80%</span>
                            <div class="slice">
                                <div class="bar" />
                                <div class="fill" />
                            </div>
                        </div>
                    </div>
                    <div class="skills">
                        <h2>JavaScript</h2>
                        <div class="c100 p75">
                            <span>75%</span>
                            <div class="slice">
                                <div class="bar" />
                                <div class="fill" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skills-row">
                    <div class="skills">
                        <h2>Node.js</h2>
                        <div class="c100 p85">
                            <span>85%</span>
                            <div class="slice">
                                <div class="bar" />
                                <div class="fill" />
                            </div>
                        </div>
                    </div>
                    <div class="skills">
                        <h2>React.js</h2>
                        <div class="c100 p65">
                            <span>65%</span>
                            <div class="slice">
                                <div class="bar" />
                                <div class="fill" />
                            </div>
                        </div>
                    </div>
                    <div class="skills">
                        <h2>jQuery</h2>
                        <div class="c100 p55">
                            <span>55%</span>
                            <div class="slice">
                                <div class="bar" />
                                <div class="fill" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skills-row">
                    <div class="skills">
                        <h2>Python</h2>
                        <div class="c100 p80">
                            <span>80%</span>
                            <div class="slice">
                                <div class="bar" />
                                <div class="fill" />
                            </div>
                        </div>
                    </div>
                    <div class="skills">
                        <h2>Java</h2>
                        <div class="c100 p70">
                            <span>70%</span>
                            <div class="slice">
                                <div class="bar" />
                                <div class="fill" />
                            </div>
                        </div>
                    </div>
                    <div class="skills">
                        <h2>MySQL</h2>
                        <div class="c100 p80">
                            <span>80%</span>
                            <div class="slice">
                                <div class="bar" />
                                <div class="fill" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;

import React from 'react';
import './skills.component.scss';
import ProgressBar from 'react-bootstrap/ProgressBar'

const SkillsComponent = () => {
    return (      
        <section id="skills" className="skills">
            <div className="skill-content">
                <div className="section-heading text-center">
                    <h2>skills</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="single-skill-content">
                                <div className="barWrapper">
                                    <span className="progressText">HTML5 - CSS</span>
                                    <div className="single-progress-txt">
                                        <ProgressBar now={90} />
                                        <h3>90%</h3>
                                    </div>
                                </div>
                                <div className="barWrapper">
                                    <span className="progressText">SCSS</span>
                                    <div className="single-progress-txt">
                                        <ProgressBar now={90} />
                                        <h3>90%</h3>	
                                    </div>
                                </div>
                                <div className="barWrapper">
                                    <span className="progressText">Flexbox-Grid</span>
                                    <div className="single-progress-txt">
                                        <ProgressBar now={70} />
                                        <h3>70%</h3>	
                                    </div>
                                </div>
                                <div className="barWrapper">
                                    <span className="progressText">Javascript | React | Vue </span>
                                    <div className="single-progress-txt">
                                        <ProgressBar now={60} />
                                        <h3>60%</h3>	
                                    </div>
                                </div>
                            </div>
                            <div className="barWrapper">
                                <span className="progressText">Sketch</span>
                                <div className="single-progress-txt">
                                    <ProgressBar now={60} />
                                    <h3>60%</h3>	
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="single-skill-content">
                                <div className="barWrapper">
                                    <span className="progressText">InVision</span>
                                    <div className="single-progress-txt">
                                        <ProgressBar now={80} />
                                        <h3>80%</h3>	
                                    </div>
                                </div>
                                <div className="barWrapper">
                                    <span className="progressText">Photoshop</span>
                                    <div className="single-progress-txt">
                                        <ProgressBar now={85} />
                                        <h3>85%</h3>	
                                    </div>
                                </div>
                                <div className="barWrapper">
                                    <span className="progressText">Ilustrator</span>
                                    <div className="single-progress-txt">
                                        <ProgressBar now={80} />
                                        <h3>80%</h3>	
                                    </div>
                                </div>
                                <div className="barWrapper">
                                    <span className="progressText">Git</span>
                                    <div className="single-progress-txt">
                                        <ProgressBar now={70} />
                                        <h3>70%</h3>	
                                    </div>
                                </div>
                                <div className="barWrapper">
                                    <span className="progressText">PHP - Laravel</span>
                                    <div className="single-progress-txt">
                                        <ProgressBar now={40} />
                                        <h3>40%</h3>	
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>		
            </div>
        </section>
     );
}
 
export default SkillsComponent;

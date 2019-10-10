import React from 'react';
import './skills.component.scss';
import ProgressBarComponent from './components/progress-bar-skill.component';

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
                                <ProgressBarComponent porcent={90} skill={'HTML5 - CSS'} />
                                <ProgressBarComponent porcent={70} skill={'SCSS'} />
                                <ProgressBarComponent porcent={70} skill={'Flexbox-Grid'} />
                                <ProgressBarComponent porcent={60} skill={'Javascript | React | Vue'} />
                                <ProgressBarComponent porcent={60} skill={'Sketch'} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="single-skill-content">
                                <ProgressBarComponent porcent={80} skill={'InVision'} />
                                <ProgressBarComponent porcent={85} skill={'Photoshop'} />
                                <ProgressBarComponent porcent={80} skill={'Ilustrator'} />
                                <ProgressBarComponent porcent={70} skill={'Git'} />
                                <ProgressBarComponent porcent={40} skill={'PHP - Laravel'} />
                            </div>
                        </div>
                    </div>
                </div>		
            </div>
        </section>
     );
}
 
export default SkillsComponent;

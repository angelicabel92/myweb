import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

const ProgressBarComponent = ({porcent, skill}) => {
    return ( 
        <div className="barWrapper">
            <span className="progressText">{skill}</span>
            <div className="single-progress-txt">
                <ProgressBar now={porcent} />
                <h3>{porcent}%</h3>
            </div>
        </div>
    );
}
 
export default ProgressBarComponent;

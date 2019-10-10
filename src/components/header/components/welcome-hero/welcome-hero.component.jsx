import React from 'react';
import './welcome-hero.component.scss';

const WelcomeHeroComponent = () => {
    return ( 
        <section id="welcome-hero" className="welcome-hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="header-text">
                            <h2>Hola <span>,</span> soy <br/> Angélica Beltrán <span>.</span></h2>
                            <p>front-end developer & ui/ux designer</p>
                            {/* <a href="assets/download/browney.txt" download>download resume</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default WelcomeHeroComponent;

import React from 'react';
import './about.component.scss';

const AboutComponent = () => {
    return ( 
        <section id="about" className="about">
            <div className="section-heading text-center">
                <h2>Sobre mi</h2>
            </div>
            <div className="container">
                <div className="about-content">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="single-about-txt">
                                <h3>
                                    Soy profesional en desarrollo Front-end, diseño web y experiencia de usuario.
                                </h3>
                                <p>
                                    Apasionada por mi profesión, por el diseño, maquetación, desarrollo web y experiencia de usuario, 
                                    constantemente estoy en aprendizaje sobre funcionalidad web en Javascript, trabajando con React como Framework.
                                    Me encanta aprender y crecer tanto profesional como personal cada día más. 
                                </p>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="single-about-add-info">
                                            <h3>Móvil</h3>
                                            <p>665-804-716</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="single-about-add-info">
                                            <h3>Email</h3>
                                            <p>angelicabel92@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="single-about-add-info">
                                            <h3>Linkedin</h3>
                                            <p>/angelicabel</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offset-sm-1 col-sm-5">
                            <div className="single-about-img">
                                <img src="assets/about/profile_image.png" alt="profile_image"/>
                                <div className="about-list-icon">
                                    <ul>
                                        <li>
                                            <a href="https://github.com/angelicabel92">
                                                <i  className="fa fa-github" aria-hidden="true"></i>
                                            </a>
                                            
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/angelicabel/">
                                                <i  className="fa fa-linkedin" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default AboutComponent;

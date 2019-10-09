import React from 'react';
import './education.component.scss';
import Carousel from 'react-bootstrap/Carousel'

const EducationComponent = () => {
    return ( 
        <section id="education" className="education">
            <div className="section-heading text-center">
                <h2>Educación</h2>
            </div>
            <Carousel interval={7000}>
                <Carousel.Item>
                    <div className="container">
                        <div className="education-horizontal-timeline">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="single-horizontal-timeline">
                                        <div className="experience-time">
                                            <h2>2019</h2>
                                            <h3>Master en UX y Javascript</h3>
                                        </div>
                                        <div className="timeline-horizontal-border">
                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                            <span className="single-timeline-horizontal"></span>
                                        </div>
                                        <div className="timeline">
                                            <div className="timeline-content">
                                                <h4 className="title">
                                                    Escuela Trazos
                                                </h4>
                                                <h5>Madrid, España</h5>
                                                <p className="description">
                                                    Javascript básico y avanzado, librerías como JQuery, React y Angular 2.
                                                    <br/>Investigación sobre el usuario: mapas de empatía, fundamentos del SEO o pruebas de usabilidad, definir la arquitectura de la información y desarrollar prototipos digitales.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="single-horizontal-timeline">
                                        <div className="experience-time">
                                            <h2>2017 - 2018</h2>
                                            <h3>Diseño Gráfico y Diseño Web</h3>
                                        </div>
                                        <div className="timeline-horizontal-border">
                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                            <span className="single-timeline-horizontal"></span>
                                        </div>
                                        <div className="timeline">
                                            <div className="timeline-content">
                                                <h4 className="title">
                                                    Escuela Aula Creactiva
                                                </h4>
                                                <h5>Madrid, España</h5>
                                                <p className="description">
                                                    Aprendizaje en herramientas de diseño, práctica y teoría de diseño gráfico.
                                                    <br/> Bases en HTML5, CSS y funcionalidad Javascript con librería JQuery. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="single-horizontal-timeline">
                                        <div className="experience-time">
                                            <h2>2016 - 2017</h2>
                                            <h3>Máster en Mark. Online y Comercio Electrónico</h3>
                                        </div>
                                        <div className="timeline-horizontal-border">
                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                            <span className="single-timeline-horizontal 
                                            "></span>
                                        </div>
                                        <div className="timeline">
                                            <div className="timeline-content">
                                                <h4 className="title">
                                                    EAE Business School
                                                </h4>
                                                <h5>Madrid, España</h5>
                                                <p className="description">
                                                    Formación en marketing en nuevos canales, medios y lenguajes en estrategía comercial y relación con el cliente. diferentes
                                                    técnicas, herramientes y competencias en el entorno digital, análisis de resultados, planificación de proyectos, ventas digitales y más.
                                                </p> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="container">
                        <div className="education-horizontal-timeline">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="single-horizontal-timeline">
                                        <div className="experience-time">
                                            <h2>2010-2015</h2>
                                            <h3>Profesional en Publicidad</h3>
                                        </div>
                                        <div className="timeline-horizontal-border">
                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                            <span className="single-timeline-horizontal"></span>
                                        </div>
                                        <div className="timeline">
                                            <div className="timeline-content">
                                                <h4 className="title">
                                                    U. de Bogotá Jorge Tadeo Lozano
                                                </h4>
                                                <h5>Bogotá, Colombia</h5>
                                                <p className="description">
                                                    Planificación, dirección y coordinación de actividades de publicidad y RP, diseño y desarrrollo de campañas publicitarias.
                                                    Manejo de programas y herramientas.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="single-horizontal-timeline">
                                        <div className="experience-time">
                                            <h2>2009 & 2015</h2>
                                            <h3>Curso Inglés</h3>
                                        </div>
                                        <div className="timeline-horizontal-border">
                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                            <span className="single-timeline-horizontal spacial-horizontal-line
                                            "></span>
                                        </div>
                                        <div className="timeline">
                                            <div className="timeline-content">
                                                <h4 className="title">
                                                    British Council Colombia
                                                </h4>
                                                <h5>Bogotá, Colombia</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
     );
}
 
export default EducationComponent;

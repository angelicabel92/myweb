import React, { Component } from 'react';
import './contact.component.scss';
import  firebase  from '../../config/firebase';

class ContactComponent extends Component {
    constructor() {
        super();
        this.state = { 
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }
    componentDidMount = () => {
        let db = firebase
        console.log(db)
    }
    

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    sendMenssage = e => {
        e.preventDefault();
        const { email, name, subject, message } = this.state;
        const form = {
            'name': name, 
            'email': email, 
            'subject': subject, 
            'message': message
        };

        if (email && message) {

            // database.ref('contact').push(form).then(() => {
            //     console.log('enviado')
            // }).catch(() => {
            //     console.log('error')
            // })
        }
    }

    render() { 
        return ( 
            <section id="contact" className="contact">
                <div className="section-heading text-center">
                    <h2>Contacto</h2>
                </div>
                <div className="container">
                    <div className="contact-content">
                        <div className="row">
                            <div className="offset-md-1 col-md-5 col-sm-6">
                                <div className="single-contact-box">
                                    <div className="contact-form">
                                        <form onSubmit={this.sendMenssage}>
                                            <div className="row">
                                                <div className="col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                    <input 
                                                    type="text" 
                                                    className="form-control"
                                                    placeholder="Nombre*" 
                                                    name="name"
                                                    value={this.state.name}
                                                    onChange={this.onChange}
                                                    required/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                        <input 
                                                        type="email" 
                                                        className="form-control" 
                                                        placeholder="Email*" 
                                                        name="email"
                                                        value={this.state.email}
                                                        onChange={this.onChange}
                                                        required/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Asunto"
                                                        value={this.state.subject}
                                                        onChange={this.onChange}
                                                        name="subject"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <textarea 
                                                        className="form-control" 
                                                        rows="8"
                                                        name="message"
                                                        placeholder="Mensaje"
                                                        value={this.state.message}
                                                        onChange={this.onChange}
                                                        required></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="single-contact-btn">
                                                        <input className="contact-btn" type="submit" value="Enviar"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-md-1 col-md-5 col-sm-6">
                                <div className="single-contact-box">
                                    <div className="contact-adress">
                                        <div className="contact-add-head">
                                            <h3>Angélica Beltrán</h3>
                                            <p>Desarrolladora Frontend</p>
                                        </div>
                                        <div className="contact-add-info">
                                            <div className="single-contact-add-info">
                                                <h3>Móvil</h3>
                                                <a href="tel:665804716">665-804-716</a>
                                            </div>
                                            <div className="single-contact-add-info">
                                                <h3>email</h3>
                                                <p>angelicabel92@gmail.com</p>
                                            </div>
                                            <div className="single-contact-add-info">
                                                <h3>linkedin</h3>
                                                <p>in/angelicabel/</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hm-foot-icon">
                                        <ul>
                                            <li><a href="https://github.com/angelicabel92/myweb/commits/master"><i className="fa fa-github"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/angelicabel/"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="https://www.instagram.com/anhelicaida14/"><i className="fa fa-instagram"></i></a></li>
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
}
 
export default ContactComponent;

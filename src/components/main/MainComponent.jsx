import React from 'react';
import HeaderComponent from '../header/HeaderComponent';
import AboutComponent from '../about/AboutComponent';
import EducationComponent from '../education/EducationComponent';
import SkillsComponent from '../skills/SkillsComponent';
import ExperiencieComponent from '../experiencie/ExperiencieComponent';
// import PortfolioComponent from '../portfolio/PortfolioComponent';
import ContactComponent from '../contact/ContactComponent';
import FooterComponent from '../footer/FooterComponent';
import NavComponent from '../nav/nav.component';


const MainComponent = () => {
    return (  
        <div>
            <NavComponent/>
            <HeaderComponent/>
            <AboutComponent/>
            <EducationComponent/>
            <SkillsComponent/>
            <ExperiencieComponent/>
            {/* <PortfolioComponent/> */}
            <ContactComponent/>
            <FooterComponent/>
        </div>
    );
}
 
export default MainComponent;

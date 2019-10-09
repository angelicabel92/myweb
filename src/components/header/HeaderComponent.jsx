import React from 'react';
import WelcomeHeroComponent from './components/welcome-hero/welcome-hero.component';

const HeaderComponent = () => {
    return ( 
        <header className="top-area">
            <div className="header-area">
                <WelcomeHeroComponent/>
            </div>
        </header>
     );
}
 
export default HeaderComponent;

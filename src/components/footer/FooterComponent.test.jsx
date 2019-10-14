import React from 'react';
import FooterComponent from './FooterComponent';

describe('Footer Component', () => {
    it('shoud render copyright', () => {
        const wrapper = shallow(<FooterComponent/>);
        const p = wrapper.find('p');
        const result = p.text();
    
        expect(result).toBe('© copyright Angélica Beltrán. design and developed by themesine');
    });
});

import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import ThemeContext from '../utils/ThemeContext';

const Contact = () => {
    const {updateTheme} = useContext(ThemeContext);
    updateTheme("dark");

    return (
        <div>
            <Navigation />
            <h1>Contact</h1>
            <br />
            <p>lkjsfhdg lsdfkjg lgf</p>
        </div>
    );
};

export default Contact;
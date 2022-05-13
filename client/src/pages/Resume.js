import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import ThemeContext from '../utils/ThemeContext';

const Resume = () => {
    const {updateTheme} = useContext(ThemeContext);
    updateTheme("dark");

    return (
        <>
            <Navigation />
            <h1>Resume</h1>
            <br />
            <p>lkjsfhdg lsdfkjg lgf</p>
        </>
    );
};

export default Resume;
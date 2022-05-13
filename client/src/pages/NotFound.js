import React, { useContext } from 'react';
import ThemeContext from '../utils/ThemeContext';

const NotFound = () => {
    const { updateTheme} = useContext(ThemeContext);
    updateTheme("dark");

    return (
        <div>
            <h1>Erreur 404</h1>
        </div>
    );
};

export default NotFound;
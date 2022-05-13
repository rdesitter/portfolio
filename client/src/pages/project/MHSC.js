import React, { useContext } from 'react';
import Close from '../../modules/Close';
import ThemeContext from '../../utils/ThemeContext';

const MHSC = () => {
    const {updateTheme} = useContext(ThemeContext);
    updateTheme("dark");

    return (
        <>
            <Close />
            <h2>MHSC</h2>
            <br />
            <p>lkjsfhdg lsdfkjg lgf</p>
        </>
    );
};

export default MHSC;
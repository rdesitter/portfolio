import React, { useContext } from 'react';
import Close from '../../modules/Close';
import ThemeContext from '../../utils/ThemeContext';

const PampaHardSeltzer = () => {
    const {updateTheme} = useContext(ThemeContext);
    updateTheme("dark");

    return (
        <>
            <Close />
            <h2>PHS</h2>
            <br />
            <p>lkjsfhdg lsdfkjg lgf</p>
        </>
    );
};

export default PampaHardSeltzer;
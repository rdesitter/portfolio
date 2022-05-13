import React, { useContext } from 'react';
import Close from '../../modules/Close';
import ThemeContext from '../../utils/ThemeContext';


const Ballman = () => {
    const {theme, updateTheme} = useContext(ThemeContext)
    updateTheme("dark");

    return (
        <div className={`project ${theme} project--ballman`}>
            <Close />
            <div className="project__banner project__banner--ballman">
                <div className="project__banner__image"><img src="../../img/slider/ballman.png" alt="PHS" /></div>
                <div className="slider__item__content">
                    <p className="project__banner__date">Projet en cours</p>
                    <h2 className="project__banner__title" data-color={theme}>Ballman</h2>
                    <p className="slider__item__content--link"><span id="ballman">Voir le projet</span></p>
                </div>
                <div className='project__informations'>

                </div>
            </div>
            <div className="container">
                <div className="project__section">
                    <h2 className="project__title" data-color="pink">Présentation</h2>
                    <p>Ballman est un projet lancé en novembre 2021 en collaboration avec le joueur de tennis Stanislas Wawrinka. Il s'agit d'une collection de 5 555 NFT uniques à son effigie, permettant à moyen terme de participer à des tournois de tennis virtuels, les NFT Open Series.</p>
                </div>
            </div>
            <div className="project__transition project__transition--ballman">
                <img className="project__transition__image" src="../../img/preview-cartes.png" alt="" />
            </div>
            <div className="container">
                <div className="project__section">
                    <h2 className="project__title" data-color="yellow">Mon rôle</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    );
};

export default Ballman;
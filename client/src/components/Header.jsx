import React, { useState } from "react";

const Header = () => {
    const title = "Raphael Desitter"
    const [menus] = useState([
        {
            name: 'Portfolio',
            url: '/',
            id: '0'
        },
        {
            name: 'Resume',
            url: '/resume',
            id: '1'
        },
        {
            name: 'Contact',
            url: '/contact',
            id: '2'
        }
    ]);

    const [isOpen, setOpen] = useState(false);

    const toggleMobileMenu = () => {
        setOpen(!isOpen);
    }

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo"><h1><a className="header__logo--link" href="#">{title}</a></h1></div>
                <div className={isOpen? "header__button open":"header__button"} onClick={toggleMobileMenu} id="btn"><i className="header__button--icon"></i><span>menu</span></div>
                <div className={isOpen? "header__menu visible":"header__menu"}>
                    <ul className="header__menu__list">
                        {menus.map((menu) => 
                            <li key={menu.id} className="header__menu__list--item"><a className="header__menu__list--link" href={menu.url}>{menu.name}</a></li>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
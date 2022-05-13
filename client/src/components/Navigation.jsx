import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { menuList } from "../datas/menuList";
import ThemeContext from "../utils/ThemeContext";

const Navigation = () => {
    const title = "Raphael Desitter"
    const [menus] = useState(menuList);

    const {theme, updateTheme} = useContext(ThemeContext);

    const [isOpen, setOpen] = useState(false);

    const toggleMobileMenu = () => {
        setOpen(!isOpen);
    }


    return (
        <header className={`header ${theme}`}>
            <div className="header__container">
                <div className={isOpen? "header__logo open":"header__logo"}><h1><NavLink className="header__logo--link" to="/">{title}</NavLink></h1></div>
                <div className={isOpen? "header__button open":"header__button"} onClick={toggleMobileMenu} id="btn"><i className="header__button--icon"></i><span>menu</span></div>
                <div className={isOpen? "header__menu visible":"header__menu"}>
                    <ul className="header__menu__list">
                        {menus.map((menu) => 
                            <li key={menu.id} className="header__menu__list--item"><NavLink to={menu.url} className="header__menu__list--link">{menu.name}</NavLink></li>                        
                        )}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navigation;
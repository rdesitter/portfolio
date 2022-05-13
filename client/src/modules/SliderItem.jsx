import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

const SliderItem = ({details}) => {

    return (
        <div className={details.isActive ? "slider__item active" : "slider__item"}>
            <div className='slider__container'>
            <div className="slider__item__info">
                <p className="slider__item__count"><span className="slider__item__count--index">{details.slide}</span><span className="slider__item__count--total"></span></p>
                <div className="slider__item__content">
                    <p className="slider__item__content--category">
                        {details.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </p>
                    <h2 className="slider__item__content--title">{details.title}</h2>
                    <NavLink to={details.url} className="slider__item__content--link"><span>Voir le projet</span></NavLink>
                </div>
            </div>
            <div className="slider__item__image"><img src={details.imgURL} alt={`${details.title}`} /></div>
            <div className="slider__item--background"><img src={details.bgURL} alt={`${details.title}`} /></div>
            </div>
        </div>
    );
};

export default SliderItem;
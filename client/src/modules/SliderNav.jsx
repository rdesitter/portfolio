import React from 'react';
import SliderNext from './SliderNext';
import SliderPrev from './SliderPrev';

const SliderNav = ({onNavClick}) => {
    return (
        <div className="slider__nav">
            <div className="slider__nav--prev" onClick={() => onNavClick(-1)}>
                <SliderPrev />
            </div>
            <div className="slider__nav--next" onClick={() => onNavClick(1)}>
                <SliderNext />
            </div>
        </div>
    );
};

export default SliderNav;
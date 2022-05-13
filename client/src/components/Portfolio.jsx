import React, { useState } from "react";

export const PortfolioItem = ({children, width, index}) => {
    return (
        <div className={`portfolio__item ${index}`}  style={{ width }}>
            {children}
        </div>
    )
}

const Portfolio = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if(newIndex < 0) {newIndex = React.Children.count(children) - 1}
        else if(newIndex >=  React.Children.count(children)) {
            newIndex = 0
        }

        setActiveIndex(newIndex);
    };

    return (
        <div className="portfolio">
            <div className="portfolio__navigation">
                <button className="portfolio__navigation__next" onClick={() => { updateIndex(activeIndex + 1) }}>Next</button>
                <button className="portfolio__navigation__prev" onClick={() => { updateIndex(activeIndex - 1) }}>Prev</button>
            </div>
            <div className="portfolio__inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {
                    React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, {width: "100%", index});
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio;
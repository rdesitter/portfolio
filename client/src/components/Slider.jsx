import React, { useContext, useState, useEffect } from 'react';
import {portfolioList} from "../datas/portfolioList";
import Loader from '../modules/Loader';
import SliderItem from '../modules/SliderItem';
import SliderNav from '../modules/SliderNav';
import { useFetch } from '../utils/hooks';
import ThemeContext from '../utils/ThemeContext';



const Slider = ({liste}) => {

    

    const [portfolioListData, setPortfolioList] = useState(liste);


    const {theme, updateTheme} = useContext(ThemeContext);
    const updatedData = [...portfolioListData];  
    const activeIndex = updatedData.findIndex((item) => item.isActive === true);  
    
    const changeTheme = () => {
        const updatedData = [...portfolioListData];    
        const activeIndex = updatedData.findIndex((item) => item.isActive === true);
    }
    

    const updateSlide = (value) => {
        const updatedData = [...portfolioListData];    
          

        let newIndex = activeIndex + value;

        if(newIndex < 0) {
            newIndex = updatedData.length - 1;
            updatedData[newIndex].isActive = true;
            updateTheme(updatedData[newIndex].theme);
        } else if ( newIndex === updatedData.length ) {
            newIndex = 0;
            updatedData[newIndex].isActive = true;
            updateTheme(updatedData[newIndex].theme);
        } else {
            updatedData[newIndex].isActive = true;
            updateTheme(updatedData[newIndex].theme);
        }

        updatedData[activeIndex].isActive = false;
        setPortfolioList(updatedData);
    }

    const handleWheel = (e) => {
        if(e.deltaY > 0) {
            updateSlide( + 1)
        } else {
            updateSlide( - 1)
        }
    }

    return (
        <div className="slider" id="slider" onWheel={handleWheel}>
            <SliderNav onNavClick={updateSlide} />
                {portfolioListData.map((item) => <SliderItem key={item.id} details={item} />)            
            }
        </div>
    );
};

export default Slider;
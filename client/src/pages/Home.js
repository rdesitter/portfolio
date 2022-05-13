import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Slider from "../components/Slider";
import Loader from "../modules/Loader";
import { useFetch } from "../utils/hooks";
import axios from 'axios';
import { Component } from "react/cjs/react.production.min";

const Home = () => {
    
    const [appState, setAppState] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API;
        axios.get(apiUrl).then((resp) => {
            const {portfolioItems} = resp.data;
            console.log(portfolioItems);
            setAppState(portfolioItems);
            setLoading(false);
        });
        
    }, [])

    return (
        <div className="home">
            <Navigation />
            {isLoading 
            ? <Loader />
            : (
                <Slider liste={appState} />
                )
            }
        </div>
    )
}

export default Home;
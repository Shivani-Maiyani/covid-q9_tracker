import React, { useEffect, useState } from "react";

import { Cards, ChartBar, CountryPicker } from './componants';
import styles from './App.module.css';
import { fetchData } from "./api";
import img from './images/image.png';


const App = () => {

    const [covidData, setCovidData] = useState({});
    const [country, setCountry] = useState("");

    useEffect(() => {
        const fetchMyData = async () => {
            setCovidData(await fetchData());
        };

        fetchMyData();
    }, [setCovidData]);

    const handleCountryChange = async (country) => {
        const featcheddata = await fetchData(country);
        setCovidData(featcheddata)
        setCountry(country);
    }

    return (
        <div className={styles.container}>
            <img src={img} alt='img' className={styles.image} />
            <Cards data={covidData} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <ChartBar data={covidData} country={country} />
        </div>
    );
};

export default App;
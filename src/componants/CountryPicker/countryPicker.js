import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './countryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = (props) => {
    const [fetchCountry, setFetchCountry] = useState([])

    useEffect(() => {
        const fetchMyCountry = async () => {
            setFetchCountry(await fetchCountries());
        };
        fetchMyCountry();
    }, []);
    return (
        <div>
            <FormControl className={styles.formcontrol}>
                <NativeSelect defaultValue="" onChange={(event) => props.handleCountryChange(event.target.value)}>
                    <option value="global">Global</option>
                    {fetchCountry.map((country, index) => <option key={index} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;
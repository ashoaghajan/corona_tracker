import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import useStyles from '../styles/useCountryPickerStyles';
import { fetchCountries } from '../api/api';

export interface CountryPickerProps {
    handleCountrySelect(countryName: string): void
}
 
const CountryPicker: React.SFC<CountryPickerProps> = ({ handleCountrySelect }) => {

    const classes = useStyles();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        (async function(){
            setCountries(await fetchCountries());
        })();
    },[]);

    return ( 
        <FormControl className={classes.formControl}>
            <NativeSelect defaultValue='' onChange={e => handleCountrySelect(e.target.value)}>
                <option value=''>Global</option>
                {countries.map((country: CountryItem, index) => (
                    <option key={index} value={country.name}>{country.name}</option>
                ))}
            </NativeSelect>
        </FormControl>
     );
}
 
export default CountryPicker;

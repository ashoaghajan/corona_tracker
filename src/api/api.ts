import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country: string = '') => {
    try{
        const inUrl = country ? url + `/countries/${country}` : url;
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(inUrl);

        return { confirmed, recovered, deaths, lastUpdate }
    }
    catch(err){
        console.log(err)
    }
}

export const fetchDailyData = async() => {
    try{
        const { data } = await axios.get(`${url}/daily`);

        return data
    }
    catch(err){
        console.log(err)
    }
}

export const fetchCountries = async() => {
    try{
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries
    }
    catch(err){
        console.log(err)
    }
}
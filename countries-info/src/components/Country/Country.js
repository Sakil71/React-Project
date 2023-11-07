import React from 'react';
import './Country.css'
import { removeData, setLocalStorage } from '../utilities/localStorage';

const Country = (props) => {
    const {name, capital, flags, area, population, cca3} = props.country;

    const addDdetails = (id) =>{
        console.log(id);
        setLocalStorage(id);
    }

    const removeDetails = id =>{
        removeData(id);
    }
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h1>{name.common}</h1>
            <h2>Capital: {capital}</h2>
            <p>{cca3}</p>
            <div className='info'>
                <p>Area: {area}</p>
                <p>|</p>
                <p>Population: {population}</p>
            </div>
            <button onClick={()=> addDdetails(cca3)}>Show Details</button>
            <button onClick={()=> removeDetails(cca3)}>Remove</button>
        </div>
    );
};

export default Country;
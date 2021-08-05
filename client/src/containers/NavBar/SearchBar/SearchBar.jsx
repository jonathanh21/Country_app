import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountriesFilteredByName} from "../../../redux/actions"
import { Link } from 'react-router-dom';
import s from './SearchBar.module.css'

export default function SearchBar (props) {
    const [country, setCountry] = useState("");
    const dispatch = useDispatch();
    //aca se despacha la accion para cargar el store de redux 

    const handleSubmit = (e) => {
        country?dispatch(getCountriesFilteredByName(country)):console.log("")
    }

    const handleChange = (e) => {
        setCountry(e.target.value)
    }

    return (
        <div className={s.container}>
            <input className={s.input} type="text" name="country" value={country} placeholder="What are you looking for?" 
                onChange={handleChange}/>
            {country?<Link to={"/main"}><button className={s.button} onClick={handleSubmit}>Search</button></Link>:<button className={s.button} onClick={handleSubmit}>Search</button>}
        </div>
    )
}
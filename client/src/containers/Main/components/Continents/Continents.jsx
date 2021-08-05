import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import s from "./Continents.module.css"
import { getCountriesFilteredByContinent } from "../../../../redux/actions"


export default function Continents () {
    const [continentsList, setContinentsList] = useState("")
    const dispatch = useDispatch();

    //Here we dispatch the action to set the redux status to the countries according to the 
    //filter we want to apply 

    // we will have two select inputs, one for the activities and the other one for the continents
    const getFilters = async () => {
        let continents = await axios.get("http://localhost:3001/countries");
        continents = continents.data.continents
        return continents
    }

    const handleClickContinents = (e) => {
        dispatch(getCountriesFilteredByContinent(e.target.innerHTML))
    }
   
    useEffect (async () => {
        const result = await getFilters()
        setContinentsList(result)
    },[])

    return (
        <div className={s.menu1}>
            <h1 className={s.text}>Explore the Continents</h1>
            <ul className={s.menu}>
                {continentsList? continentsList.sort((a, b) => a.continent > b.continent ? 1: -1).filter(cont=> cont.continent !== "").map(
                    cont => <li onClick={handleClickContinents} className={s.continent}><p className={s[cont.continent.toLowerCase()]}>{cont.continent}</p></li>):null}
            </ul>
        </div>
    )
}
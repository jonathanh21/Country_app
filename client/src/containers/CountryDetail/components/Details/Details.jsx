import React, {useState, useEffect} from 'react';
import axios from 'axios';
import s from './Details.module.css';

export default function Detail(props) {
    const [country, setCountry] = useState("")

    useEffect(async ()=> {
        let newCountry = await axios.get("http://localhost:3001/countries/"+ props.id)
        console.log(newCountry)
        setCountry(newCountry.data)
    },[]) 

    return (
        <div className={s.container}>
            <div className={s.left}>
                <img className={s.flag} src={country.flag} alt="loading..."/>
                <h1 className={s.name}>{country.name?country.name:"loading..."}</h1>
            </div>
            <div className={s.right}>
                <h1><p className={s.label}>Code: </p>{country.id?country.id:"loading..."}</h1>
                <h1><p className={s.label}>Capital: </p> {country.capital?country.capital:"loading..."}</h1>
                <h1><p className={s.label}>Area: </p> {country.area?new Intl.NumberFormat().format(country.area):"loading..."} km 2</h1>
                <h1><p className={s.label}> Population: </p> {country.population?new Intl.NumberFormat().format(country.population):"loading..."} inhabitants</h1>
                <h1 className={s.activities}> <p className={s.label}> Activities:</p> {country.activities?country.activities.map(activity => <span className={s.act}>{activity.name}</span>):"No activity assigned"}</h1>
            </div>
        </div>
    )
}
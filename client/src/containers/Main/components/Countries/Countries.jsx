import React, { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import Country from './Country/Country.jsx';
import { Link } from 'react-router-dom';
import styles from './Countries.module.css';
import SortButton from '../SortButton/SortButton.jsx'
import Filter from '../Filter/Filter.jsx';
import Paged from '../Paged/Paged.jsx'


export default function Countries () {
    // const [count, setCount] = useState(1);
    // const [countr, setCountr] = useState("");
    
    let countries = useSelector(state => state.activeCountries);
    
    //aca se despacha la accion para cargar el store de redux
    
    // useEffect(() => {
    //     let timer
    //     if(count<11){
    //         timer = setTimeout(() => {
    //             console.log('This will run after 1 second!')
    //             setCount(prev=>prev+1)
    //             }, 250);
    //     }
    //     console.log(count)
    //     return ()=>clearTimeout(timer)
    // });

    // useEffect(()=> {
    // setCountr(countries.slice(0,count))
    // },[count])

    // useEffect(()=> {
    //     setCount(0)
    //     setCountr("")
    // },[countries])

    return (
        <div className={styles.countries}>
            <div className={styles.container}>
                <SortButton />
                <Filter />
            </div>
            <ul className={styles.list}>
                {Array.isArray(countries)? countries.map(country => <li><Link className={styles.country} to={"/main/country/"+country.id}><Country className={styles.country} info={country}/></Link></li>): <h1 className={styles.not}>Country Not Found</h1>}
            </ul>
            <div>
                <Paged />
            </div>
        </div>
    )
}


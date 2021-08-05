import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import styles from "./Filter.module.css"
import { getCountriesFilteredByContinent, getCountriesFilteredByActivity} from "../../../../redux/actions"


export default function ActivityFilter () {
    const [continentsList, setContinentsList] = useState("")
    const [activitiesList, setActivitiesList] = useState("")
    const dispatch = useDispatch();

    //Here we dispatch the action to set the redux status to the countries according to the 
    //filter we want to apply 

    // we will have two select inputs, one for the activities and the other one for the continents
    const getFilters = async () => {
        let activities = await axios.get("http://localhost:3001/activity");
        activities = activities.data
        return activities

    }
    const handleClickActivities = (e) => {
        dispatch(getCountriesFilteredByActivity(e.target.innerHTML))
    }
   
    useEffect (async () => {
        const result = await getFilters()
        setActivitiesList(result)
    },[])

    return (
        <div className={styles.menu}>
            <ul>
                <li className={styles.nivel1}>Activities
                    <ul className={styles.nivel2}>
                        {activitiesList? activitiesList.map(
                            act => <li onClick={handleClickActivities}>{act.name}</li>):null}
                    </ul>
                </li>
            </ul>
        </div>
    )
}
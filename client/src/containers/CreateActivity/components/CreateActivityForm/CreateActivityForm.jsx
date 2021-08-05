import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {switchActiveForm} from "../../../../redux/actions"
import s from "./CreateActivityForm.module.css";
import {getAllCountries} from "../../../../redux/actions"

export default function CreateActivityForm () {
    const [activityName, setActivityName] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [duration, setDuration] = useState('');
    const [season, setSeason] = useState('');
    const [country, setCountry] = useState("");


    const dispatch = useDispatch();
    const countries = useSelector(state=>state.countriesFilteredAndSorted)
    // we have to add some options to validate the information that the user is putting in the input

    const validateActivity = (value) => {
        setActivityName(value)
    }
    const validateDuration = (value) => {
        setDuration(value)
    }
    const validateDifficulty = (value) => {
        setDifficulty(value)
    }
    const validateSeason = (value) => {
        setSeason(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            activityName && difficulty && duration && season && country? axios({
                method: 'post',
                url: 'http://localhost:3001/activity',
                data: {
                  name: activityName,
                  difficulty,
                  duration,
                  season,
                  countries: country.map(country=>country[1])
                }
              }).then(()=>dispatch(switchActiveForm())):console.log('error');
        }catch(error) {
            console.log(error)
        }
 
    }

    const handleChange = (count) => {
        let aux = country?[...country]:[];
        let aux2= [count.slice(4,count.length),count.slice(0,3)]
        aux.findIndex(el=>el[0]===aux2[0])===-1?aux.push(aux2):console.log("")
        setCountry(aux)
    }

    const quitCountry = (count) => {
        let aux = country.filter(countr=>countr[0]!==count)
        setCountry(aux)
    }

    useEffect(()=> {
        dispatch(getAllCountries())
    },[])

    
    return (
        <div className={s.main}>
            <h1 className={s.title}>Describe the activity you want to add</h1>
             <form className={s.form} onSubmit = {handleSubmit}>
                <label for="activityName">Name:</label>
                <input className={s.input} name="activityName" value={activityName} placeholder="Enter the name of the Activity" 
                onChange={(e)=> validateActivity(e.target.value)}/> <br/>
                <label for="difficulty">Difficulty:</label>
                <input className={s.input} name="difficulty" type="number" value={difficulty} placeholder="Select a value between 1 - 5" 
                onChange={(e)=> validateDifficulty(e.target.value)}/><br/>
                <label for="duration">Duration (h):</label>
                <input className={s.input} name="duration" type="number" value={duration} placeholder="Enter the duration" 
                onChange={(e)=> validateDuration(e.target.value)}/><br/>
                <label for="season">Season:</label>
                <select className={s.input} name="season" onChange={(e)=> validateSeason(e.target.value)}>
                    <option value="">{"<Select a Season>"}</option>
                    <option value="Spring">Spring</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Summer">Summer</option>
                </select><br/>
                <label for="countries">Choose the countries from this list:</label>
                <select id="countries" className={s.input} onChange={(e)=>handleChange(e.target.value)}>
                    <option value="">{"<Select a Country>"}</option>
                    {countries? countries.map(country => <option value={[country.id,country.name]}>{country.name}</option>):<span>Loading...</span>}
                </select>
                    <div className={s.countryList}>
                        {country?country.map(count => <h1 className={s.options}>{count[0]} <span className={s.close} onClick={()=>quitCountry(count[0])}>X</span></h1>):null}
                    </div>
                <button className={s.btn}type="submit">Create Activity</button>
            </form>
        </div>
       
    )
}
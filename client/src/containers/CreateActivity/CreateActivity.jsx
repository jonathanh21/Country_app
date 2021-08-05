import React, {useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import CreateActivityButton from './components/CreateActivityButton/CreateActivityButton.jsx'
import CreateActivityForm from './components/CreateActivityForm/CreateActivityForm.jsx';
import s from './CreateActivity.module.css'

export default function CreateActivity () {
    let activeForm = useSelector(state => state.activeForm)
    console.log(activeForm)

    return (
        <section className={s.main}>
            {activeForm? <CreateActivityForm/>: <CreateActivityButton />}
        </section>
    )
}
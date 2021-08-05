import React from 'react';
import s from "./CreateActivityButton.module.css";
import { useDispatch } from 'react-redux'
import {switchActiveForm} from "../../../../redux/actions";


export default function CreateActivityButton () {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(switchActiveForm())
    }
    return (
        <div className={s.main}>
            <h1>Your activity was succesfully created</h1>
            <button className={s.btn}onClick={handleClick}>Create New Activity</button>
        </div>
    )
}
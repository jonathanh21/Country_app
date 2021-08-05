import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./SortButton.module.css"
import { getCountriesSortedAlphaAsc,
        getCountriesSortedAlphaDesc,
        getCountriesSortedByPopulAsc,
        getCountriesSortedByPopulDesc } from "../../../../redux/actions";

export default function SortButton () {
    const dispatch = useDispatch()
    //Here, we dispatch an action to the redux state to sort the countries A-Z or 
    //for the number habitants
    const active = useSelector(state=>state.activeCountries)

    return (
        <div className={styles.menu}>
            <ul>
                <li className={styles.nivel1}>Sort ↓ 
                    <ul className={styles.nivel2}>
                        <li className={styles.subt}>Alphabetically</li>
                        <li onClick={()=>dispatch(getCountriesSortedAlphaAsc())}>A-Z</li>
                        <li onClick={()=>dispatch(getCountriesSortedAlphaDesc())}>Z-A</li>
                        <li className={styles.subt}>By Population</li>
                        <li onClick={()=>dispatch(getCountriesSortedByPopulAsc())}>Ascendant</li>
                        <li onClick={()=>dispatch(getCountriesSortedByPopulDesc())}>Descendant</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
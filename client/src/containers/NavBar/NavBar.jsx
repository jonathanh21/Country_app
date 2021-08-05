import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getAllCountries} from '../../redux/actions';
import SearchBar from './SearchBar/SearchBar.jsx';
import s from "./NavBar.module.css"
import icon6 from "../../img/icon6.png"

export default function NavBar () {
    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch(getAllCountries())
    }
    return (
        <header className={s.container}>
            <div className={s.container2}>
                <Link to={"/"}><img className={s.icon} src={icon6} alt="logo"/></Link>
                <div className={s.options}>
                    <h4 onClick={clickHandler}><Link className={s.option} to={"/main"}>Main Page</Link></h4>
                    <h4><Link className={s.option} to={"/main/newActivity"}>New Activity</Link></h4>
                    <h4><Link className={s.option}>Map</Link></h4>
                </div>
            </div>
            <SearchBar/>
        </header>
    )
}
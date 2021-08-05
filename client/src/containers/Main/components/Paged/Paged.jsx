import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { configPaged } from "./utils";
import { getCountriesFromPage } from "../../../../redux/actions";
import s from './Paged.module.css';

export default function Paged () {
    const [activePage, setActivePage] = useState(0);
    const [activePages, setActivePages] = useState(0);
    const countries = useSelector(state=>state.countriesFilteredAndSorted)
    const dispatch = useDispatch()
    
    let pageSet = configPaged(countries)

    useEffect(()=>{
        setActivePages(0)
    },[countries])

    useEffect(()=> {
        dispatch(getCountriesFromPage(activePage))
    },[activePage])
    
  
    //aca se despacha la accion para cargar el store de redux 
    const previousPages = () => {
        activePages>0? setActivePages(prev=>prev-1):console.log('No previous action')
    }

    const nextPages = () => {
        activePages<pageSet.length-1? setActivePages(prev=>prev+1):console.log('No next action')
    }

    const previousPage = () => {
        activePage>0? setActivePage(prev=>prev-1):console.log('No previous action')
        activePages!==0&&activePage%5===0?setActivePages(prev=>prev-1):console.log('No previous action')
        console.log(activePage)
    }

    const nextPage = () => {
        activePage<pageSet.flat().length-1? setActivePage(prev=>prev+1):console.log('No next action')
        activePage<pageSet.flat().length-1&&(activePage-1)%5===0?setActivePages(prev=>prev+1):console.log('No next action')
    }

    return (
        <div className={s.container}>
            <h4 onClick={previousPages} className={s.element} >{"<<"}</h4>
            <h4 onClick={previousPage} className={s.element} >{"<"}</h4>
                {pageSet.length>0 && pageSet[activePages]!== undefined?pageSet[activePages].map(el=><h6 className={s.element} onClick={()=>setActivePage(el-1)}>{el}</h6>):<h6></h6>}
            <h4 onClick={nextPage}className={s.element} >{">"}</h4>
            <h4 onClick={nextPages} className={s.element} >{">>"}</h4>
        </div>
    )
}
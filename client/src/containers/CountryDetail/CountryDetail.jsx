import React from 'react';
import Detail from './components/Details/Details.jsx'
import AddActivityForm from './components/AddActivityForm/AddActivityForm.jsx'
import AddActivityButton from './components/AddActivityButton/AddActivityButton.jsx'

export default function Main (props) {
    return (
        <section>
            <Detail id={props.match.params.id} />
        </section>
    )
}
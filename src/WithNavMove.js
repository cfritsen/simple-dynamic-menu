import React from 'react'
import './WithNavMove.css';
import NavMenu from './components/navMenu'
import {useState, useEffect} from 'react'


export default function WithNavMove(props) {
    const {linkData} = props;
    const [notSticky, setNotSticky] = useState(true)

    const observerHandler = (entries) => {
        const [entry] = entries;
        setNotSticky(entry.isIntersecting)
    }
    const observerOptions = {
        rootMargin: '-1px 0px 0px 0px',
        threshold: 1
    }

    useEffect(() => {
        const menu = document.getElementsByClassName('navbar-home')[0]
        const originalMenu = document.getElementsByClassName('navbar')[0]
        originalMenu.style = 'display: none'
        const menuObs = new IntersectionObserver(observerHandler, observerOptions)
        menuObs.observe(menu)

        return () => {
            menuObs.unobserve(menu)
            originalMenu.style = ''
        }
        
    },[]) 

    return (
        <div className='container'>
            <header>
                <h1>Placeholder Text</h1>
            </header>
            <NavMenu linkData={linkData} className={notSticky ? 'navbar-center navbar-home' : 'navbar-right navbar-home'} />

        </div>
    )
}
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
        <div className='container navmove-container'>
            <header  class='navmove-header'>
                <h1>With Nav Move</h1>
                <h3>See what happens when you place Nav under the header!</h3>
            </header>
            <NavMenu linkData={linkData} className={notSticky ? 'navbar-center navbar-home' : 'navbar-right navbar-home'} />
            <section class='navmove-section'>
                <p>To see the effect, you'll need to scroll.</p>
                <p>All "Test Page" submenu items redirect here. Those were just to demonstrate submenus.</p>
                <p>This example is coded on this page specifically. But let's say you wanted to put the menu underneath the header on <span class='italic'>every</span> page. Well, you can't exactly put NavMenu under the Route unless you want the menu at the bottom of the page, so you would have to manually place MenuNav under the header on every page.</p>
                <p>But it's a component. That's no big deal.</p>
                <p>At that point though, you would want to put the special code on this page in the MenuNav component instead.</p>
                <h4>How it works</h4>
                <p>The whole thing works with CSS, for the most part. There are 4 classes total being used for navigation menus. The main menu should use the default class "navbar" else you'll need to change the reference to it in this page's code. There's also a placeholder "navbar-home" that has no styles assigned to it. Its only purpose is tracking the new Navbar. It's just named "Home" because this navbar was originally written for the homepage of LightningReborn.com.</p>
                <p>At its core, what we do to get this effect is change the class on the menu. There are two classes for this, "navbar-center" and "navbar-right". You can imagine what these are used for. Then shifting to JavaScript, we use an Intersection Observer to see when the navbar sticks to the top of the page. When it sticks, it shifts to the right through a class change implemented in React.</p>
                <p>Too easy, right? Well, there's still one thing missing.</p>
                <p>See, "navbar" and "navbar-right" share exactly the same CSS. The difference is, "navbar-right" is used in this page-specific code to shift the navbar right, whereas "navbar" on the original menu is used in this code to hide the original menu. That way, we only see the menu relevant to the page with no duplicates. And we have to make sure to unhide the original menu when this page unmounts.</p>
            </section>

        </div>
    )
}
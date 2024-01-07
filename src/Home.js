import React from 'react'
import './home.css'

export default function Home() {
    return (
        <div className='container'>
            <header>
                <h1>Dynamic Menu - Home</h1>
                <h3>Please visit the test pages using the menu at the top-right.</h3>
            </header>
            <section>
                <p>This is a basic site showcasing my dynamic navigation bar. As the name suggests, the menu is dynamically generated using a separate file with navigation data inside. The NavBar component reads that data and adjusts accordingly. In its current state, this navbar doesn't support URL parameters and all items are hard coded in the navlinks.json file. I am interested in adding URL parameter support in the future if the need arises.</p>
                <p>Currently, this is a simple menu with menus and submenus. This was originally developed for a different project, a simple web page that I needed to be able to scale with minimal effort. As such, submenu parent buttons are also links. The intent on that website is further navigation from those links for mobile users instead of making them deal with a dropdown menu. Changing only one line of this code would change it to click for dropdown only, if needed.</p>
                <div className='text-center'><p>So, without further ado, please check out the navigation menu at the top right of the screen!</p></div>
            </section>
        </div>
    )
}
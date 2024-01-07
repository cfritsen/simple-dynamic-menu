import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../Home.js'
import WithNavMove from '../WithNavMove.js'
import NoNavMove from '../NoNavMove.js'



export default function NavRoutes(props) {
    const {linkData, linkData: {links}} = props; 
    
    return (
        <Routes>
            <Route path={links.Home} element ={<Home />} />
            <Route path={links.WithNavMove} element={<WithNavMove linkData={linkData} />} /> {/* We continue passing data down to pages that use the special function. */}
            <Route path={links.NoNavMove} element={<NoNavMove />} />
        </Routes>
    )

}
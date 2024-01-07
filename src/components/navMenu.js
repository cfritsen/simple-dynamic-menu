import React from 'react'
import {Link} from 'react-router-dom'
import './navMenu.css'

export default function NavMenu(props) {
    const {linkData: {links, TopMenu, SubMenu}, className} = props;

    //Builds links for TopMenu
    const linkBuilder = link => {
        if (!SubMenu[link]){
            return <Link to={links[link]} key={link}>{link}</Link>
        } else {
            return subMenuBuilder(link);
        }
    }
    //Builds SubMenus
    const subMenuBuilder = link => {
        const subMenu = SubMenu[link];
        return (
            <div class='submenu'>
                <Link to={links[link]}>{link}</Link>
                <div class='submenu-content'>
                    {subMenu.map(link => {
                        return (
                            <Link to={links[link]} key={link}>{link}</Link>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
       <nav className={className}>
            {TopMenu.map(linkBuilder)}
       </nav>
    )
}
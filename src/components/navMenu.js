import React from 'react'
import {Link} from 'react-router-dom'
import './navMenu.css'

export default function NavMenu(props) {
    const {linkData: {links, TopMenu, SubMenu}, className} = props;

    //Builds links for TopMenu
    const linkBuilder = link => {
        const linkTrim = link.replace(/\s+/g, '');
        console.log(linkTrim)
        if (!SubMenu[linkTrim]){
            return <Link to={links[linkTrim]} key={link}>{link}</Link>
        } else {
            return subMenuBuilder(link, linkTrim);
        }
    }
    //Builds SubMenus
    const subMenuBuilder = (link, linkTrim) => {
        const subMenu = SubMenu[linkTrim];
        return (
            <div class='submenu'>
                <Link to={links[linkTrim]}>{link}</Link>
                <div class='submenu-content'>
                    {subMenu.map(link => {
                        return (
                            <Link to={links[linkTrim]} key={link}>{link}</Link>
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
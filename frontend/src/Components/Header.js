import './Header.css'
import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import {IconButton} from '@material-ui/core'

const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header__icon'/>
            </IconButton>

            <img src="https://1000Logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="" className="header__logo"/>
        
            <IconButton>
                <ForumIcon fontSize='large' className='header__icon' />
            </IconButton>
        </div>
    )
}

export default Header

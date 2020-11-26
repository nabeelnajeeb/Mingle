import React from 'react';
import './Header.css';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import IconButton from '@material-ui/core/IconButton';
import ForumTwoToneIcon from '@material-ui/icons/ForumTwoTone';


function Header() {
    return (
        <div className='header'>
            
            <IconButton>
                <AccountCircleTwoToneIcon fontSize='large' className='header_icon'/>
            </IconButton>

            
            <img className='header_logo'src="https://1000logos.net/wp-content/uploads/2019/11/Maaji-Logo-768x432.png" height="40" alt=""/>

            <IconButton>
                <ForumTwoToneIcon fontSize="large" className="header_icon"/>
            </IconButton>

            
           
        </div>
    )
}

export default Header

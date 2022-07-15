import React from 'react'
import TextField from '@mui/material/TextField';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './header.css';

function Header(props) {
  const handleMenu = () => {
    props.listenToHeader()
  }
  return (
    <div className='mainDivHeader'>
        <div className='emptyDiv'></div>
        <div className='divHeader1'>
          <MenuOutlinedIcon onClick={handleMenu} size={30}/>    
          <img src="./images/keep.png" alt=""/>
          <span>Keep</span>
        </div>
        <div className='searchDiv'>
          <TextField fullWidth label="search" id="fullWidth" size='small' style={{width:'85%'}}/>
        </div>
        
        <div className='iconDiv2'>
          <RefreshOutlinedIcon size={30}/>
          <ViewAgendaOutlinedIcon size={30}/>
          <SettingsOutlinedIcon size={30}/>
        </div>
        
        <div className='iconDiv3'>
          <AppsOutlinedIcon size={30}/>  
          <AccountCircleOutlinedIcon size={30}/>
        </div>
    </div>
  )
}

export default Header
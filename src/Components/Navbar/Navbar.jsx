import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Navbar = () =>    {
  return (
    <div className='navbar'>
     <div className="wrapper">
        <div className="left">
            <div className="item">
                <img src="./img/syr.png" alt=""/>
                <KeyboardArrowDownIcon />
            
            </div>
        </div>
        <div className="center"></div>
        <div className="right"></div>
     </div>
    </div>
  )
}

export default Navbar
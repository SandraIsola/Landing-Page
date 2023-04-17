import React, { useState } from 'react';
import Logo from "../Assets/Logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {

  const [realTrack, setRealTrack]= useState(false)
  const trackOptions = [
{
  text:"Home",
  icon:<HomeIcon/>
},
{
  text:"About",
  icon:<InfoIcon/>
},
{
  text:"Reviews",
  icon:<CommentRoundedIcon/>
},
{
  text:"Contact",
  icon:<PhoneRoundedIcon/>
},
  ]


  return (
    <nav>
      <div className='nav-logo-container'>
      <img src={Logo} alt="Logo" />
      </div>
     <div className='navbar-links-container'>
<a href=''>Home</a>
<a href=''>About</a>
<a href=''>Reviews</a>
<a href=''>Contact</a>
<button className="primary-button">Talk to Us</button>
     </div>
<div className='navbar-menu-container'>
<HiOutlineBars3 onClick={() => setRealTrack(true)}/>
</div>
<Drawer open={realTrack} onClose={() => setRealTrack(false)}
anchor="right">
<Box
sx={{ width: 250 }}
role="presentation"
onClick={() => setRealTrack(false)}
onKeyDown={() => setRealTrack(false)}
>

  <List>
    {trackOptions.map((item) => (
    <ListItem key={item.text} disablePadding>
<ListItemButton>
<ListItemIcon>{item.icon}</ListItemIcon>
<ListItemText primary={item.text}/>
</ListItemButton>
    </ListItem>
    ))}
  </List>
</Box>
</Drawer>
</nav>
  )
}

export default Navbar
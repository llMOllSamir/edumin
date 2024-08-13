import { AppBar, Avatar, IconButton, Stack, Toolbar } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SlideBar from './SlideBar'
import MenuIcon from '@mui/icons-material/Menu';
import EastIcon from '@mui/icons-material/East';



export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const toggleDrawer = (open = true) => { setOpen(open) }


  const navigate = useNavigate()
  return (
    <>
      <AppBar position="static" variant="elevation" sx={{ padding: "20px 0", userSelect: 'none' }} >
        <Toolbar >
          <Stack onClick={() => navigate('/')} sx={{ cursor: 'pointer' }} direction={'row'} spacing={2} justifyContent={'space-between'} alignItems={'center'}  >
            <img src={require('../assists/logo/logo-white.png')} width={50} alt='logo' />
            <img src={require('../assists/logo/logo-text-white.png')} width={200} alt='logo2' />
          </Stack>
          <IconButton sx={{ mr: 'auto' }} size="large" onClick={() => toggleDrawer()} >
            {open ? <EastIcon sx={{ color: 'white' }} /> : <MenuIcon sx={{ color: 'white' }} />}
          </IconButton>
          <Avatar sx={{ ml: 'auto' }} src={require('../assists/avatar/10.jpg')} />
        </Toolbar>

      </AppBar>
      <SlideBar open={open} toggleDrawer={toggleDrawer} /></>
  )
}

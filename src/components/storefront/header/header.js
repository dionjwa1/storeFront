import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';



function Header() {
    return (
        <>

            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Button style={{ backgroundColor:'white' }}
                        to="/categories">
                        Categories
                    </Button>
                    <Typography variant="h3" color="green" style={{ backgroundColor:'red' }}>
                        World's Greatest Online Store
                    </Typography>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Header;
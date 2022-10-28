import React,{ useContext } from 'react';
import classes from './Navbar.module.css'
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { loggedInContext } from '../../context/context';

const Navbar = () => {
    let { setLoggedIn } = useContext(loggedInContext);
    let navigate = useNavigate();

    const logOut = () => {
        sessionStorage.removeItem('isAuth');
        setLoggedIn(false);
        navigate('/login');
    }

    return (
        <nav className={classes.navbar}>
            <Button size='small' variant="contained" color="error" onClick={() => logOut()}>logOut</Button>
            <div className={classes.link}>
                <Link className={classes.item} to='/about'>ABOUT</Link>
                <Link className={classes.item} to='/posts'>POSTS</Link>
            </div>
        </nav>
    );
};

export default Navbar;
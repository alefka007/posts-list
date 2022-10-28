import { Input } from '@mui/material';
import classes from './Login.module.css';
import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { loggedInContext } from '../../context/context';

const Login = () => {
    const { setLoggedIn } = useContext(loggedInContext);
    let navigate = useNavigate();

    const loginSubmitHandler = (e) => {
        e.preventDefault();

        setLoggedIn(true);
        navigate('/posts');
        sessionStorage.setItem('isAuth', true);
    }

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={loginSubmitHandler}>
                <h2 className={classes.title}>My Posts</h2>
                <Input type='text' placeholder='login' />
                <Input type='password' placeholder='password' />
                <Button type='submit' style={{ marginTop: '.5rem' }} size='large' color='primary' variant="contained" fullWidth={true}>LogIn</Button>
            </form>
        </div>

    );
};

export default Login;
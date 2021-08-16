import { Button, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Actions, UserContext, UserDispatchContext } from '../../context/userContext';
import GridLoader from "react-spinners/GridLoader";
import { isFetchingContext } from '../../context/fetchingContext';
import useStyles from './header.styles';
import { useEffect } from 'react';
import classNames from 'classnames';
import logo from '../../img/predictor-logo.png'

type Props = {
    setIsModalOpen: (isModalOpen: {isOpen: boolean, target: string}) => void
}



const Header: React.FC<Props> = ({setIsModalOpen}) => {

    const classes = useStyles();
    const userState = useContext(UserContext);
    const dispatchUser = useContext(UserDispatchContext);
    const loading = useContext(isFetchingContext);
    const [isHeaderFilled, setIsHeaderFilled] = useState<boolean>(false)

    const handleWindowScroll = () => {
            if(window.scrollY > 50 ) {
                setIsHeaderFilled(true)
            } else {
                setIsHeaderFilled(false)
            }
    }

    useEffect(() => {
        document.addEventListener("scroll", handleWindowScroll);

        return () => {
            document.removeEventListener("scroll", handleWindowScroll);
        }
    }, [])

    const handleLogOut = () => {
        dispatchUser({type: Actions.setUser, payload: undefined});
        localStorage.setItem('user', JSON.stringify(null));
    }

    return (
        <>
        <header className={classes.header}>
            <div className={isHeaderFilled ? classNames(classes.navigation, classes.navigationFilled) : classes.navigation}>
                <img src={logo} className={classes.logo} />
                <Typography variant='body1' className={classes.username}>{userState?.user?.username}</Typography>
                {userState?.user ? 
                    <Button variant="contained" className={classes.button} onClick={handleLogOut}>Log Out</Button>
                    :
                    <Button variant="contained" className={classes.button} onClick={() => setIsModalOpen({isOpen: true, target: 'log-in'})}>Log In</Button>
                }
                <Button variant="contained" className={classes.button} onClick={() => setIsModalOpen({isOpen: true, target: 'register'})}>Register</Button>
            </div>
        </header>
            <div className={classes.loader}>
                <GridLoader loading={loading} color="#f88a62" />
            </div>
        </>
    );
};

export default Header;
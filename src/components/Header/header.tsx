import { Button, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { Actions, UserContext, UserDispatchContext } from '../../context/userContext';
import GridLoader from "react-spinners/GridLoader";
import { isFetchingContext } from '../../context/fetchingContext';
import useStyles from './header.styles';

type Props = {
    setIsModalOpen: (isModalOpen: {isOpen: boolean, target: string}) => void
}



const Header: React.FC<Props> = ({setIsModalOpen}) => {

    const classes = useStyles();
    const userState = useContext(UserContext);
    const dsipatchUser = useContext(UserDispatchContext);
    const loading = useContext(isFetchingContext);

    return (
        <>
        <header className={classes.header}>
            <div className={classes.navigation}>
                <Typography className={classes.title} variant='h2'>League Predictor</Typography>
                <Typography variant='body1' className={classes.username}>{userState?.user?.username}</Typography>
                {userState?.user ? 
                    <Button variant="contained" className={classes.button} onClick={() => dsipatchUser({type: Actions.setUser, payload: undefined})}>Log Out</Button>
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
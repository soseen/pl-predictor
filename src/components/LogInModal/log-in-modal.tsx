import React, { useContext, useState } from 'react';
import { Button, Modal, Typography } from '@material-ui/core';
import useStyles from './log-in-modal.styles';
import { axios } from '../../axios/axios'
import { Actions, User, UserDispatchContext } from '../../context/userContext';
import { Actions as FetchingAction} from '../../context/fetchingContext';
import { AxiosResponse } from 'axios';
import { PlayerActions, PlayersDispatchContext } from '../../context/playersContext';
import { UsersResponse } from '../Standings/standings';
import { isFetchingContext, setIsFetchingContext } from '../../context/fetchingContext';

type Props = {
    isModalOpen: {isOpen: boolean, target: string},
    setIsModalOpen: (isModalOpen: {isOpen: boolean, target: string}) => void
}

interface UserResponse extends AxiosResponse {
  data: {
    message: string,
    isLoggedIn: boolean,
    user?: User
  }
}

const LogInModal: React.FC<Props> = ({isModalOpen, setIsModalOpen}) => {

  const classes = useStyles();
  const [credentials, setCredentials] = useState<{login: string, password: string}>({login: '', password: ''})
  const [validationMessage, setValidationMessage] = useState<string>('')
  const dispatchUser = useContext(UserDispatchContext);
  const dispatchPlayers = useContext(PlayersDispatchContext);
  const isFetching = useContext(isFetchingContext);
  const setFetching = useContext(setIsFetchingContext);

  const handleClose = () => {
    setIsModalOpen({...isModalOpen, isOpen: false});
    setCredentials({login: '', password: ''});
    setValidationMessage('');
  }

  const validateForm = () => {
    const isEmpty = Object.values(credentials).some(input => input === '');
    if (isEmpty) {
      setValidationMessage('Please fill in all the required fields')
      return false
    } else {
      setValidationMessage('')
      return true
    }
  }

  const handleRegister = async () => {
    const isFormValid = validateForm();
    if (isFormValid && !isFetching) {
      try {
        setFetching({type: FetchingAction.setIsFetching, payload: true});
        const newUserResponse: UserResponse = await axios.post('/userCreate', {
          username: credentials.login,
          password: credentials.password,
          role: "User"
        })
        const usersResponse: UsersResponse = await axios.get('/users');
        dispatchPlayers({type: PlayerActions.setUser, payload: usersResponse.data.users});
        setValidationMessage(newUserResponse.data.message);
        setFetching({type: FetchingAction.setIsFetching, payload: false})
      } catch (error) {
        console.log(error)
        setFetching({type: FetchingAction.setIsFetching, payload: false})
      }
    }
  }

  const handleLogIn = async () => {
    const isFormValid = validateForm();
    if (isFormValid && !isFetching) {
      try {
        setFetching({type: FetchingAction.setIsFetching, payload: true})
        const userResponse: UserResponse = await axios.post('/user', {
          username: credentials.login,
          password: credentials.password
        })
        setValidationMessage(userResponse.data.message);
        if (userResponse.data.user) {
          dispatchUser({type: Actions.setUser, payload: userResponse.data.user})
          handleClose();
          setFetching({type: FetchingAction.setIsFetching, payload: false})
        }

      } catch (error) {
        console.log(error)
        setFetching({type: FetchingAction.setIsFetching, payload: false})
      }
    }
  }

    return (
        <Modal
        open={isModalOpen.isOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
          <div className={classes.modal}>
            <div className={classes.modalContent}>
              <Typography variant="body1">{isModalOpen.target === 'register' ? 'Register Account' : 'Log In'}</Typography>
              <Typography variant="body1" className={classes.validationMessage}>{validationMessage}</Typography>
              <div className={classes.inputContainer}>
                <label>
                Login
                </label>
                <input className = {classes.input} type="text" value={credentials.login} onChange={(e) => setCredentials({...credentials, login: e.target.value})}></input>
              </div>
              <div className={classes.inputContainer}>
                <label>
                Password
                </label>
                <input className = {classes.input} type="password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}></input>
              </div>
              <Button className={classes.button} onClick={isModalOpen.target === 'register' ? handleRegister : handleLogIn}>{isModalOpen.target === 'register' ? 'Register' : 'Log In'}</Button>
            </div>
          </div>
        </Modal>
    );
};

export default LogInModal;
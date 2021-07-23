import React, { useContext, useState } from 'react';
import { Button, Modal, Typography } from '@material-ui/core';
import useStyles from './log-in-modal.styles';
import { axios } from '../../axios/axios'
import { Actions, User, UserDispatchContext } from '../../context/userContext';
import { AxiosResponse } from 'axios';

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
  const [credentials, setCredentials] = useState<{login: string, password: string}>({login: 'sosnoski', password: 'admin123'})
  const [validationMessage, setValidationMessage] = useState<string>('')
  const dispatchUser = useContext(UserDispatchContext);

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
    if (isFormValid) {
      try {
        const newUserResponse: UserResponse = await axios.post('/userCreate', {
          username: credentials.login,
          password: credentials.password,
          role: "User"
        })
        setValidationMessage(newUserResponse.data.message);
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleLogIn = async () => {
    const isFormValid = validateForm();
    if (isFormValid) {
      try {
        const userResponse: UserResponse = await axios.post('/user', {
          username: credentials.login,
          password: credentials.password
        })
        setValidationMessage(userResponse.data.message);
        if (userResponse.data.user) {
          dispatchUser({type: Actions.setUser, payload: userResponse.data.user})
          handleClose();
        }

      } catch (error) {
        console.log(error)
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
                <input className = {classes.input} type="text" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}></input>
              </div>
              <Button className={classes.button} onClick={isModalOpen.target === 'register' ? handleRegister : handleLogIn}>{isModalOpen.target === 'register' ? 'Register' : 'Log In'}</Button>
            </div>
          </div>
        </Modal>
    );
};

export default LogInModal;
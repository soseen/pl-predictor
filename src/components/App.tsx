import React, { useState } from 'react';
import Header from './Header/header';
import AppContent from './AppContent/app-content';
import LogInModal from './LogInModal/log-in-modal';
import './app.scss';
import { createMuiTheme, ThemeProvider, } from '@material-ui/core/styles';
import UserProvider, { User } from '../context/userContext';
import CurrentFixturesProvider from '../context/currentFixturesContext';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8e8e8e',
      main: '#616161',
      dark: '#373737',
      contrastText: '#fff',
    },
    secondary: {
      light: '#faa68d',
      main: '#f88a62',
      dark: '#f87c4f',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Roboto', 
      'sans-serif'
    ].join()
  }
});

const App: React.FC = () => {

const [isModalOpen, setIsModalOpen] = useState<{isOpen: boolean, target: string}>({isOpen: false, target: 'log-in'})

  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <UserProvider >
          <CurrentFixturesProvider>
            <LogInModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <Header setIsModalOpen={setIsModalOpen}/>
            <AppContent setIsModalOpen={setIsModalOpen}/>
          </CurrentFixturesProvider>
        </UserProvider>
      
      </ThemeProvider>
      
    </div>
  );
};

export default App;
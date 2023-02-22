import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./translations/en.json";
import he from "./translations/he.json";
import PieCharts from './PieCharts';
import DataGrid from './DataGrid';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./styles/App.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

//Translations usage with "react-i18next" library
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      he: { translation: he }
    },
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const { t } = useTranslation();

  //Handling language change
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  //Opening and closing of dropdown menu in navbar
  const [anchorEl, setAnchorEl] = React.useState(null);

  //Opening and closing of dropdown menu in navbar on click handler
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //Closing of dropdown menu handler
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  //The createTheme() method used to give certain MaterialUI componets a certain color
  const theme = createTheme({
    palette: {
      primary: {
        main: '#7fffd4',
      },
      secondary: {
        main: '#3cc396',
      },
      black: {
        main: '#000000'
      }
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}> {/*Applying theme colors*/}
      <AppBar position="sticky" style={{ height: "40px" }}> {/*Navigation Bar*/}
          <Toolbar style={{ backgroundColor: "#3cc396" }}>
          <Button variant="text" color="black" onClick={handleMenuClick}>
              <FontAwesomeIcon icon={faLanguage} />
          </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => { handleLanguageChange('he'); handleMenuClose(); }}>
                עִברִית
              </MenuItem>
              <MenuItem onClick={() => { handleLanguageChange('en'); handleMenuClose(); }}>
                English
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <PieCharts t={t} />
        <DataGrid t={t} />
      </ThemeProvider>
    </div>
  );
}

export default App;
import React from 'react';
import css from './App.module.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { useTypedSelector } from './hooks/useTypedSelector';
import { loginUri } from './api';
import logo from "./assets/logos/01_RGB/02_PNG/Spotify_Logo_RGB_White.png"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Logo /> */}
        <img
            className={css.Logo}
            src={logo}
            alt="spotify-logo"
        />
        <Layout />
          {/*<UserInfo /> (name, profile photo) */}
          
          {/* <Main /> */}
        {/* </Layout> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

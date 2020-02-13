import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import { Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
  console.log('app', props)
  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />

        <Route path='/profile'
          render={() => <Profile />} />

        <Route path='/news' render={() => <News />} />
        <Route path='/audios' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
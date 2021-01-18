import React from 'react';
import getResource from '../../servises/index';
import Contacts from '../pages/contacts';
import Home from '../pages/home';
import Nav from '../nav';
import {usersLoaded} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const dispatch = useDispatch();

  getResource('https://reqres.in/api/users?per_page=12').then((data) => {
    dispatch(usersLoaded(data.data));
  });

  return (
    <div className="app">
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/contact'  component={Contacts}/>
      </Switch>
    </div>
  );
};

export default App;

import React from 'react';
import {useSelector} from 'react-redux';
import './app-header.css';

const AppHeader = () => {
  const allPost = useSelector(state => state.users.length);
  return (
    <header className="header">
      <h1>Sergei Kolyago</h1>
      <h2>{allPost} контактов</h2>
    </header>
  );
};

export default AppHeader;

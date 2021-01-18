import React from 'react';
import PostList from '../users-list';
import PostAddForm from '../user-add-form';
import AppHeader from '../app-header';

const Contacts = () => {
  return (
    <>
      <AppHeader/>
      <PostList/>
      <PostAddForm/>
    </>
  )
}

export default Contacts;

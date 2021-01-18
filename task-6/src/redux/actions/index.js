const usersLoaded = (newUsers) => {
  return {
    type: 'LOADED_USERS',
    payload: newUsers
  }
};

const addUser = (name) => {
  return {
    type: 'ADD_USER',
    payload: name
  }
};

const deleteUser = (id) => {
  return {
    type: 'REMOVE_USER',
    payload: id
  }
};

export {
  usersLoaded,
  addUser,
  deleteUser,
};

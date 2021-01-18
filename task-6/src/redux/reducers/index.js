const initialState = {
  users: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADED_USERS':
      return {
        ...state,
        users: action.payload,
      };
    case 'ADD_USER':
      const id = state.users.length + 1;
      return {
        ...state,
        users: [...state.users, {label: action.payload, id: id}],
      };
    case 'REMOVE_USER':
      const idx = action.payload;
      const itemIndex = state.users.findIndex(item => item.id === idx)
      return {
        ...state,
        users: [
          ...state.users.slice(0, itemIndex),
          ...state.users.slice(itemIndex + 1)
        ]
      };
    default:
      return state;
  }
}

export default reducer;

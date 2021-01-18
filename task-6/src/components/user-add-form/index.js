import React from 'react';
import {addUser} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import './user-add-form.css';

const UserAddForm = () => {
  const dispatch = useDispatch();
  let text = '';

  const onValueChange = (e) => {
    text = e.target.value;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') return;
    dispatch(addUser(text));
    e.target.reset();
  };

  return (
    <form className="bottom-panel" action=""
          onSubmit={onSubmit}>
      <input className="form-input"
             placeholder="Введите имя пользователя"
             type="text"
             onChange={onValueChange}
      />
      <button
        type="submit"
        className="btn-submit"
      >Добавить
      </button>
    </form>
  );

};

export default UserAddForm;

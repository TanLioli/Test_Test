import React from 'react';
import PostListItem from '../user-list-item/';
import {useDispatch, useSelector} from 'react-redux';
import {ListGroup} from 'react-bootstrap';
import {deleteUser} from '../../redux/actions';
import './users-list.css';


const UsersList = () => {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const elements = users.map((item) => {
    const {id, last_name,first_name} = item;
    const label = `${first_name} ${last_name}`;
    return (
      <li className="list-group-item" key={id}>
        <PostListItem label={label} onDelete={() => dispatch(deleteUser(id))}/>
      </li>
    )
  });

  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  );
};

export default UsersList;

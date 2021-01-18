import React from 'react';
import './user-list-item.css';

const UserListItem = ({label, onDelete}) => {
  return (
    <div className="app-list-item">
                <span
                  className="app-list-item-label">
                    {label}
                </span>
      <div className="app-trash">
        <button onClick={onDelete} type="button" className="btn-trash btb-sm">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  );
}

export default UserListItem;

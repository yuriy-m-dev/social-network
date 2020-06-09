import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
  return (
    <div className={s.item}>
      <div className={s.userImage}>
        <img src={props.path} />
      </div>
      <span className={s.user}>{props.name}</span>
    </div>
  );
}

export default Friend;
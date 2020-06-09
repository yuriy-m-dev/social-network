import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
  let friendsElements = props.friend.map(f => <Friend name={f.name} path={f.url} />);

  return (
    <div>
      <h3>Friends</h3>
      <div className={s.wrapper}>
        {friendsElements}
      </div>
    </div>
  );
}

export default Friends;
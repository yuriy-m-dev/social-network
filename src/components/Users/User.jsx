import React from 'react';
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";

const User = ({ users, followingInProgress, follow, unfollow }) => {
  return (
    <>
      {
        users.map(user => <div className={s.userWrapper} key={user.id}>
          <div className={s.userBlock}>
            <NavLink to={'/profile/' + user.id}><img src={user.photos.small != null ? user.photos.small : userPhoto} alt='' /></NavLink>
            {user.followed
              ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => unfollow(user.id)}>Unfollow</button>
              : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => follow(user.id)}>Follow</button>
            }
          </div>
          <div className={s.userInfoBlock}>
            <div className={s.holder}>
              <span>{user.name}</span>
              <span>{user.status}</span>
            </div>
            <div className={s.location}>
              <span className={s.country}>{'user.location.country'}</span>
              <span>{'user.location.city'}</span>
            </div>
          </div>
        </div>)
      }
    </>
  )
}

export default User;
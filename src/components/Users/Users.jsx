import React from "react";
import s from "./Users.module.css";
import Pagination from '../common/Pagination/Pagination';
import User from "./User";

const Users = (props) => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Users</h3>
      
      <Pagination totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />

      <User users={props.users} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow} />
      
    </div>
  )
}

export default Users;
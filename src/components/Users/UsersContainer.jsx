import React from "react";
import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  unfollow, requestUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from "../../redux/user-selectors";

class usersContainer extends React.Component {
  componentDidMount() {
    let {currentPage, pageSize} = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    let {pageSize} = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
             currentPage={this.props.currentPage} users={this.props.users}
             onPageChanged={this.onPageChanged} follow={this.props.follow} unfollow={this.props.unfollow}
             followingInProgress={this.props.followingInProgress}/>
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  requestUsers
})(usersContainer);

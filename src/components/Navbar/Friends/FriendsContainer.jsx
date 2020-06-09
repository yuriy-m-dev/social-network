import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    friend: state.sidebar.friend
  }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;
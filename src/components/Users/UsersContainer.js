import React from "react";
import connect from "react-redux/lib/connect/connect";
import Users from "./Users";
import {followAC, setPageAC, setUsersAC} from "../../Redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followAC: (userID) => {
            dispatch(followAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPageAC: (currentPage) => {
            dispatch(setPageAC(currentPage))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
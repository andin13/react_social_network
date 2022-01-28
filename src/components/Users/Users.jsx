import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=5").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        const setPages = this.props.setPageAC;

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && s.selectedPage}
                                 onClick={() => setPages(p)}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div className={s.container}>
                        <div className={s.avatar}>
                            <div>
                                <img
                                    src={'https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png'}
                                    className={s.userAvatar}/>
                            </div>
                            <div>
                                <button onClick={() => this.props.followAC(u.id)}>
                                    {u.followed === true ? 'unfollow' : 'follow'}
                                </button>
                            </div>
                        </div>
                        <div className={s.userInfo}>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    }
}

export default Users;
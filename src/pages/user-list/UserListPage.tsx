import React, {useEffect, useState} from 'react';
import {UserListFilter} from '../../components/user-list-filter/UserListFilter';
import s from './UserListPage.module.scss';
import {UserList} from '../../components/user-list/UserList';
import {RootObject} from '../../types/types';
import {usersAPI} from '../../api/users-api';

export const UserListPage = () => {
    const [users, serUsers] = useState<RootObject[]>([])

    useEffect(() => {
        usersAPI.getUsers()
            .then((res) => serUsers(res.data))
    }, [])

    return (
        <div className={s.wrapper}>
            <UserListFilter/>
            <UserList list={users}/>
        </div>
    );
};


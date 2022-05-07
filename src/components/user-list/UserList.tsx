import React from 'react';
import {UserItem} from './user-item/UserItem';
import s from './UserList.module.scss';
import {RootObject} from '../../types/types';
import {v1} from 'uuid';

type UserListPropsType = {
    list: RootObject[]
}

export const UserList = ({list}: UserListPropsType) => {
    return (
        <div className={s.wrapper}>
            <h2>Список пользователей</h2>
            {list.map(u => <UserItem key={v1()} user={u}/>)}
            <p>Найдено 10 пользователей</p>
        </div>
    );
};


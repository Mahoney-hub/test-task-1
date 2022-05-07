import React from 'react';
import s from './UserItem.module.scss';

type UserItemPropsType = {
    user: any
}

export const UserItem = ({}:UserItemPropsType) => {
    return (
        <div className={s.wrapper}>
            <div>
                <ul>
                    <li>ФИО:</li>
                    <li>Иван Иванов</li>
                </ul>
                <ul>
                    <li>город:</li>
                    <li>Москва</li>
                </ul>
                <ul>
                    <li>компания:</li>
                    <li>ООО “Пример”</li>
                </ul>
            </div>
            <div>Подробнее</div>
        </div>
    );
};


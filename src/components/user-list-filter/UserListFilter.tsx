import React from 'react';
import s from './UserListFilter.module.scss';
import {CustomButton} from '../custom-button/CustomButton';

export const UserListFilter = () => {

    const clickHandler = () => {
        console.log('clickHandler')
    }

    return (
        <div className={s.wrapper}>
            <div className={s.filters}>
                <span>Сортировка</span>
                <CustomButton onClick={clickHandler}>по городу</CustomButton>
                <CustomButton onClick={clickHandler}>по компании</CustomButton>
            </div>
        </div>
    );
};


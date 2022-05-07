import React from 'react';
import s from './CustomButton.module.scss';

type CustomButtonPropsType = {
    children: React.ReactNode
    onClick: () => void
}

export const CustomButton = ({children, onClick}: CustomButtonPropsType) => {
    return <button className={s.button} onClick={() => onClick()}>{children}</button>
};


import React from 'react';
import s from './Header.module.scss'
import photo from '../../img/avatar.jpg'

const Avatar = () => {
    return (
        <div className={s.avatar}>
            <div className={s.avatarInside}>
                <img src={photo} alt="ava"/>
            </div>
        </div>
    );
};

export default Avatar;
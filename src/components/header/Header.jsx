import React from 'react';
import s from './Header.module.scss'
import Avatar from "./Avatar";

const Header = () => {
    return (
        <div className={s.header}>
            <Avatar />
            <div className={s.name}><span>penzovskii</span>andrii</div>
            <div className={s.stick}></div>
            <div className={s.job}>
                <span>front-end</span><span>developer</span></div>
        </div>
    );
};

export default Header;
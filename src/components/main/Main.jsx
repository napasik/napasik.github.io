import React from 'react';
import s from './Main.module.scss'
import PersonalInfo from "./Personal-info";
import MainInfo from "./Main-info";

const Main = () => {
    return (
        <div className={s.main}>
            <PersonalInfo />
            <MainInfo />
        </div>
    );
};

export default Main;
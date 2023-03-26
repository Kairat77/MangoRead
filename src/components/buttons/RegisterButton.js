import React, {useState} from 'react';
import style from './css/registerbutton.module.css'
import {Button} from "@mui/material";
import MenuSign from '../register/MenuSign';

const RegisterButton = () => {
    const [open, setOpen] = useState(false);
    const [sign, setSign] = useState(false);

    const handleClick = (isSign = false) => {
        setSign(isSign);
        setOpen(true)
    };

    return (
        <div className={style.btn}>
            <Button onClick={() => handleClick(false)}>Войти</Button>
            <Button onClick={() => handleClick(true)} variant='contained'>Регистрация</Button>
            <MenuSign sign={sign} setSign={setSign} open={open} setOpen={setOpen}/>
        </div>
    );
};

export default RegisterButton;
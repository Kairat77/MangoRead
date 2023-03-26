import React, {useEffect, useState} from 'react';
import style from './css/menusign.module.css'
import {Box, Divider, IconButton, Modal, Typography} from "@mui/material";
import {CloseRounded} from "@mui/icons-material";
import SignUp from './SignUp/SignUp';
import Login from './login/Login';

const MenuSign = ({open, setOpen, sign, setSign}) => {
    const [top, setTop] = useState('-100%');

    const close = () => {
        setTop('-100%');
        setTimeout(() => setOpen(false), 250);
    };

    useEffect(() => {
        setTimeout(() => open && setTop('50%'), 250);
    }, [open]);
    return (
        <Modal open={open} onClose={close}>
            <Box sx={{ top }} className={style.modalInner}>
                <Box className={style.close}>
                    <IconButton onClick={close}>
                        <CloseRounded sx={{ width: 30, height: 30, fill: '#000' }}/>
                    </IconButton>
                </Box>
                <Box>
                    <Box className={style.choice}>
                        <Typography onClick={() => setSign(false)} variant="span" color="info">Вход</Typography>
                        <Typography onClick={() => setSign(true)} variant="span" color="info">Регистрация</Typography>
                    </Box>
                    <Box className={style.border}>
                        <Box component="i" sx={{
                            width: sign ? 160 : 63,
                            left: sign ? 90 : 0
                        }}/>
                        <Divider sx={{ borderWidth: 1, borderColor: '#878787'}}/>
                    </Box>
                </Box>
                    {
                        sign ? <SignUp/> : <Login/>
                    }
            </Box>
        </Modal>
    );
};

export default MenuSign;
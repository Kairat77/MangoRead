import React, {useEffect, useState} from 'react';
import style from './css/coment.module.css'
import {Box, Button, Modal} from "@mui/material";


const Comment = () => {
    const [open, setOpen] = useState(false)
    const [top, setTop] = useState('-100%');

    const handleClick = () => {
        setOpen(true)
    }

    const close = () => {
        setTop('-100%');
        setTimeout(() => setOpen(false), 250);
    };

    useEffect(() => {
        setTimeout(() => open && setTop('50%'), 250);
    }, [open]);
    return <>
        <Button onClick={handleClick}>добавить комментарий</Button>
        <Modal open={open} onClose={close}>
            <Box sx={{ top }} className={style.comment}>
                <Box className={style.user}></Box>
                <Box className={style.addCom}>
                    <input className={style.add} placeholder='Добавьте комментарий'/>
                    <Button>Добавить</Button>
                </Box>
            </Box>
        </Modal>
    </>
};

export default Comment;
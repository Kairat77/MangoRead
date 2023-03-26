import React from 'react';
import style from './css/buttons.module.css'
import {Box, Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getMangoList, selectSearchResults , setGenre, setPage, setType} from "../../../redux/slices/selectManga";

const Buttons = ({onClick, type}) => {
    const dispatch = useDispatch();
    const {page, genre} = useSelector(selectSearchResults )
    const clear = () => {
        dispatch(setType(''))
        dispatch(setGenre(''))
        dispatch(setPage(1));
        dispatch(getMangoList({
            offset: ((page -1) * 12),
            limit: 12
        }))
    }

    return (
        <Box className={style.btns}>
            <Button onClick={clear} disabled={!type && !genre}>Сбросить</Button>
            <Button onClick={onClick}>Применить</Button>
        </Box>
    );
};

export default Buttons;
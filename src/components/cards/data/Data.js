import React from 'react';
import style from './css/data.module.css'
import {Box, Checkbox, List, ListItem} from "@mui/material";

import {useDispatch} from "react-redux";
import {setType} from "../../../redux/slices/selectManga";

const Data = ({type}) => {
    const dispatch = useDispatch()
    const arr = ['Манга', 'Манхва', 'Западный комикс', 'Маньхуа']
    return (
        <>
            <Box className={style.typeSpan} component='span'>Тип</Box>
            <List>
                {
                    arr.map((i,k) => <ListItem key={k}>
                        <Checkbox
                            sx={{'& svg': {color: '#2FE09B !important'}}}
                            checked={i === type}
                            onChange={() => dispatch(setType(i))}
                            size="large"
                            color='secondary'/>
                        <Box component='label'>{i}</Box>
                    </ListItem>)
                }
            </List>
            <Box className={style.dates}>
                <input className={style.data} placeholder='От 0'/>
                <hr/>
                <input className={style.data} placeholder='До 2022'/>
            </Box>
        </>
    );
};

export default Data;
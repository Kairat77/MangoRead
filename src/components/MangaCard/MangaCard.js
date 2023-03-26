import React from 'react';
import style from './css/mangacard.module.css'
import {NavLink} from "react-router-dom";
import {Box, Typography} from "@mui/material";

const MangaCard = ({i}) => {

    const top = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <NavLink onClick={top} className={style.link} to={`/about/${i?.id}`}>
            <Box className={style.box}>
                <Box sx={{backgroundImage: `url(${i?.image})`}} className={style.card}>
                    <Box className={style.texts}>
                        <Typography component='span'>Год: {i?.issue_year}</Typography>
                        <Typography component='h2'>{i?.ru_name.split(' ').length > 3 ? i?.ru_name.split(' ')[0] + ' '+i?.ru_name.split(' ')[1] + ' '+i?.ru_name.split(' ')[2] + ' '+i?.ru_name.split(' ')[3]+'...' : i?.ru_name}</Typography>
                    </Box>
                </Box>
            </Box>
        </NavLink>
    );
};

export default MangaCard;
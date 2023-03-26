import React from 'react';
import style from './css/rightcards.module.css'
import {Box, CircularProgress, List, ListItem} from "@mui/material";
import {useSelector} from "react-redux";
import {selectSearchResults} from "../../redux/slices/selectManga";
import MangaCard from '../MangaCard/MangaCard';

const RightCards = () => {
    const {mangas, load} = useSelector(selectSearchResults)

    return (
        <Box className={style.cards}>
            <List className={style.list}>
                {
                    !load
                    &&
                    mangas?.results.map(i => <ListItem key={i?.id}>
                        <MangaCard i={i}/>
                    </ListItem>)
                }
            </List>
            {
                load
                &&
                <Box className={style.load}><CircularProgress color='primary'/></Box>
            }
        </Box>
    );
};

export default RightCards;
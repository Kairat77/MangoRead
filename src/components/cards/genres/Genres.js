import React, {useEffect} from 'react';
import style from './css/genres.module.css'
import {Box, Checkbox, FormControlLabel, List, ListItem} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {genresSelect, getGenres} from "../../../redux/slices/genreSlice";
import {selectSearchResults, setGenre} from "../../../redux/slices/selectManga";

const Genres = () => {
    const dispatch = useDispatch()
    const {genres} = useSelector(genresSelect)
    const {genre} = useSelector(selectSearchResults)


    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])
    return (
        <Box className={style.genres}>
            <Box component='span'>Жанры</Box>
            <List>
                {
                    genres.map(i => <ListItem key={i?.id}>
                        <FormControlLabel
                            label={i?.title}
                            sx={{'& .MuiButtonBase-root:active': {background: "none !important"}}}
                            control={
                            <Checkbox
                                checked={i?.title === genre}
                                onChange={() => dispatch(setGenre(i?.title))}
                                sx={{'& svg': {color: '#2FE09B !important'}}}
                                size="large"
                                color='secondary'/>
                            }
                        />
                        {/*<Box component='label'>{i?.title}</Box>*/}
                    </ListItem>)
                }
            </List>
        </Box>
    );
};

export default Genres;
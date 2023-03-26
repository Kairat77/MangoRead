import React, {useState} from 'react';
import style from './css/leftcards.module.css'
import {Box, Button} from "@mui/material";
import Buttons from "./buttton/Buttons";
import {ReactComponent as Right} from "../../foto/buttons/right.svg";
import {ReactComponent as Left} from "../../foto/buttons/left.svg";
import Genres from './genres/Genres';
import Data from './data/Data';

const LeftCards = ({ type, onClick }) => {
    const [genreOrType, setGenreOrType] = useState(false);

    return (
        <Box className={style.genres}>
            {
                genreOrType
                ? <Button className={style.btn2} onClick={() => setGenreOrType(!genreOrType)}><Left/> <Box component='span'>Назад</Box></Button>
                : <Button onClick={() => setGenreOrType(!genreOrType)}>Жанры <Box component='span'>все <Right/></Box></Button>
            }
            <Box className={style.lists}>
                {
                    genreOrType
                        ? <Genres/>
                        : <Data type={type}/>
                }
            </Box>
            <Buttons
                type={type}
                onClick={onClick}/>
        </Box>
    );
};

export default LeftCards;
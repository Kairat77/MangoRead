import React, {useEffect, useState} from 'react';
import style from './css/aboutPage.module.css'
import {Box, Button, CircularProgress, Container, List, ListItem, PaginationItem, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {getComments, getManga, mangaSelect} from "../../redux/slices/mangaSlice";
import {ReactComponent as Left} from "../../foto/vrLink.svg";

import {genresSelect, getGenres} from "../../redux/slices/genreSlice";
import {ReactComponent as ArrowLeft} from "../../foto/pagin/leftpagin.svg";
import {ReactComponent as ArrowRight} from "../../foto/pagin/rightpagin.svg";
import Comment from "../../components/Coment/Coment";

const AboutPage = () => {
    const dispatch = useDispatch()
    const {manga, load, comments} = useSelector(mangaSelect)
    const {genres} = useSelector(genresSelect)
    const {id} = useParams()
    const navigate = useNavigate()
    const regExp = new RegExp("<p>|&laquo;|&raquo;|&quot;|</p>|<br/>|&mdash;", "g");
    const bor = new RegExp("&nbsp;", "g");
    const [genre, setGenre] = useState([{id: 0, title: ''}])
    const [offset, setOffset] = useState(1)
    const limit = 3

    const back = () => {
        navigate(-1)
    }

    useEffect(() => {
        !load && setGenre(manga?.genre?.map(id => genres[id - 1]))
    }, [manga, genres, load])

    useEffect(() => {
        dispatch(getManga(id))
        dispatch(getComments(id))
        dispatch(getGenres())
    }, [dispatch, id])
    return (
        <Box className={style.about}>
            <Container className={style.container}>
                <Button onClick={back}><Left/> Назад</Button>
                {
                    !load ?
                    manga?.genre.length > 0 &&
                    <>
                    <Box className={style.aboutTop}>
                        <Box component='img' alt='#' src={manga?.image}/>
                        <Box className={style.info}>
                            <Typography component='h2'>{manga?.ru_name}</Typography>
                            <Box className={style.infos}>
                                <Typography component="h2">Информация:</Typography>
                                <Typography>Тип: <Box component='span'>{manga?.type}</Box></Typography>
                                <Typography>Год: <Box component='span'>{manga?.issue_year}</Box></Typography>
                                <Typography className={style.genreList}>Жанр: <Box component="span">{genre?.map(i => <Box component='span' key={i?.id}>{i?.title+','}</Box>)}</Box></Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={style.description}>
                        <Typography component="h2">Синопсис</Typography>
                        <Typography>{manga?.description?.replace(regExp, '')?.replace(bor, ' ')}</Typography>
                    </Box>
                    <Box className={style.comentBottom}>
                        <Box className={style.addComment}>
                            <Typography component="h2">Топ комментарий</Typography>
                            <Comment/>
                        </Box>
                        <Box className={style.comments}>
                            <List>
                                {
                                    comments.length > 0
                                    &&
                                    comments.slice((offset * limit) - limit, (offset * limit)).map(c => <ListItem key={c?.id}>
                                        <Box component='img' alt='' src={c?.user?.image_file}/>
                                        <Box className={style.comns}>
                                            <Typography component="h2">{c?.user?.username}, {c?.user?.nickname}</Typography>
                                            <Typography>{c?.text.substring(0, 80)}{c?.text.length >= 100 && '...'}</Typography>
                                        </Box>
                                    </ListItem>)
                                }
                            </List>
                        </Box>
                        {
                            comments.length > limit
                            && <input 
                                className={style.pagination}
                                page={offset}
                                onChange={(_, page) => setOffset(page)}
                                count={Math.ceil(comments.length / limit)}
                                size="large"
                                color="secondary"
                                renderItem={(item) => (
                                    <PaginationItem
                                        slots={{ previous: ArrowLeft, next: ArrowRight }}
                                        {...item}
                                    />
                                )}
                            />
                        }
                    </Box>
                    </>
                    :
                    <Box className={style.load}><CircularProgress color='primary'/></Box>
                }
            </Container>
        </Box>
    );
};

export default AboutPage;
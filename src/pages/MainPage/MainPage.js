import React, {useEffect} from 'react';
import style from './css/mainPage.module.css'
import {Box, Container, PaginationItem} from "@mui/material";
import RightCards from '../../components/rightmango/RightCards';
import LeftCards from '../../components/cards/LeftCards';
import {useDispatch, useSelector} from "react-redux";
import {getMangoList, selectSearchResults, setPage} from "../../redux/slices/selectManga"
import {ReactComponent as ArrowLeft} from "../../foto/pagin/leftpagin.svg";
import {ReactComponent as ArrowRight} from "../../foto/pagin/rightpagin.svg";


const MainPage = () => {
    const dispatch = useDispatch()
    const {mangas, page, genre, type} = useSelector(selectSearchResults)

    const top = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    const handleClick = () => {
        dispatch(getMangoList({
            genre__title: genre,
            type,
            offset: ((page -1) * 12),
            limit: 12
        }));
    };

    useEffect(() => {
        dispatch(getMangoList({
            genre__title: genre,
            type,
            offset: ((page -1) * 12),
            limit: 12
        }))
    }, [dispatch, page])
    return (
        <Box className={style.mainPage}>
            <Container className={style.container}>
                <LeftCards type={type} onClick={handleClick}/>
                <RightCards/>
            </Container>
            {
                mangas?.count >= 12
                &&
                <input
                    className={style.pagination}
                    onClick={top}
                    page={page}
                    size='large'
                    color='secondary'
                    count={Math.ceil(mangas.count / 12)}
                    onChange={(_,p) => dispatch(setPage(p))}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowLeft, next: ArrowRight }}
                            {...item}
                        />
                    )}
                />
            }
        </Box>
    );
};

export default MainPage;
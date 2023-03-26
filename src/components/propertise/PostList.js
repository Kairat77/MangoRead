import React, {useState} from 'react';
import style from './css/postlist.module.css'
import { List, ListItem} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import {useDispatch, useSelector} from "react-redux";
import {getSearch, selectSearchResults, setSearch} from "../../redux/slices/selectManga";
import {NavLink} from "react-router-dom";

const PostList = () => {
    const dispatch = useDispatch()
    const {search} = useSelector(selectSearchResults)
    const [input, setInput] = useState('')
    const [arrInp, setArrinp] = useState([])
    const [move, setMove] = useState(false)

    const handleChange = async ({target}) => {
         setInput(target.value)
       
         dispatch(getSearch(target.value))
    }

    const handleClick = () => {
        setInput('')
        dispatch(setSearch([]))
    }

    return <>
        <div className={style.box}>
            <SearchIcon style={!move ? {left: 17, opacity: 1} : {left: '-18px', opacity: 0}} className={style.search}/>
            <input className={style.input}
                value={input} onFocus={() => setMove(true)}
                onBlur={() => setMove(false)}
                onChange={handleChange}
                
                placeholder='Placeholder'/>
            <div className={style.lists}>
                {
                    search?.length > 0
                    && <div component='span'>{`Найдено более ${search?.length} манг!`}</div>
                }
                <List>
                    {
                        search.map(i => <ListItem key={i?.id}>
                            <NavLink to={`about/${i?.id}`} onClick={handleClick}>{i?.ru_name}</NavLink>
                        </ListItem>)
                    }
                </List>
            </div>
        </div>
    </>
};

export default PostList;
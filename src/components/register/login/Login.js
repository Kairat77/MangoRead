import { useState } from "react";
import * as React from 'react';
import {Box, Button, Checkbox, FormControlLabel} from "@mui/material";
import { useDispatch } from "react-redux";
import { loginAsyncAction } from "../../../redux/slices/userSlice";
import style from './css/login.module.css'



const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const regis = () => {
      dispatch(loginAsyncAction({user: {username, password}}));
  };
  return (
    <div className={style.fat}>
      <input className={style.wid} type="text" placeholder="username" onChange={({target}) => setUsername(target.value)} value={username} />
      <input className={style.wid} type="password" placeholder="password" onChange={({target}) => setPassword (target.value)} value={password} />
      <div className={style.check}>
      <FormControlLabel control={<Checkbox 
          className={style.svg}
          size="large"
           color='secondary'/>} label="Запомнить меня" className={style.label}/>
      </div>
      <Button onClick={regis} variant="contained">Вход</Button>
    </div>
  )
}

export default Login

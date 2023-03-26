
import style from './css/signUp.module.css'
import { Avatar, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { registerAsyncAction } from '../../../redux/slices/userSlice'
import { useState } from 'react'


const SignUp = () => {
  const dispatch = useDispatch();
    const [image_file, setImage_file] = useState(null)
    const [username, setUsername] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const image = ({target}) => {
      setImage_file(target.files[0]);
    }
    const data = () => {
      const user = new FormData();
      user.append('image_file', image_file);
      user.append('username', username);
      user.append('nickname', nickname);
      user.append('password', password);
      dispatch(registerAsyncAction(user));
      return alert('good')
  };
  
  return (
    <div className={style.fat}>
      <div className={style.avatar}>
        
        <Button className={style.column} component="label" color="info"><Avatar
        className={style.avat}
          alt="Remy Sharp"
          src={!!image_file && URL.createObjectURL(image_file)}
          sx={{ width: 181, height: 181, }}
        />Добавить Фото
        <input onChange={image} value={image_file} type="file" hidden /></Button>
      </div>
      <div className={style.top}>
       <input className={style.spi} type="text" placeholder='Username'  value={username} onChange={({target}) => setUsername(target.value)}/>
       <input className={style.spi} type="text" placeholder='Nickname' value={nickname} onChange={({target}) => setNickname(target.value)}/>
       <input className={style.spi} type="password" placeholder='Password' value={password} onChange={({target}) => setPassword(target.value)}/>
      </div>
      <Button onClick={data} variant="contained">регистрация</Button>
    </div>
  )
}

export default SignUp

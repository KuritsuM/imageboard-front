import React, {useState} from "react";

const LoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (event) => {
        props.loginThunkCreator(username, password);
    }

    return (
      <>

          <input type={"text"} onChange={e => setUsername(e.target.value)} value={username}/>
          <input type={"text"} onChange={e => setPassword(e.target.value)} value={password}/>
                    <button onClick={handleClick}>Войти</button>
      </>
    );
}

export default LoginForm;
/*

{
    props.login.username !== undefined &&
    localStorage.getItem('token') !== undefined &&
    <span>Вы авторизованы как {props.login.username}</span>
}*/

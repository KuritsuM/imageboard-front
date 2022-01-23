import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router";
import {Link} from "react-router-dom";
import ThreadComponent from "./threads/threadComponent";
import ThreadComponentContainer from "./threads/ThreadComponentContainer";
import PostComponentContainer from "./posts/postComponentContainer";
import LoginFormComponent from "./Component/loginForm/LoginFormComponent";

function App(props) {
    return (
        <>
            <header>
                <Link to={'/'}>Мочан</Link>
                <Link to={'/po'}> po</Link>
                <Link to={'/b'}> b</Link>
                <Link to={'/login'}> Login</Link>
            </header>
            <Routes>
                <Route path={'/'} element={<ThreadComponentContainer/>}/>
                <Route path={'/:board'} element={<ThreadComponentContainer/>}/>
                <Route path={'/:board/:id'} element={<PostComponentContainer/>}/>
                <Route path={'/login'} element={<LoginFormComponent/>}/>
            </Routes>
        </>
    );
}

export default App;

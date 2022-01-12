import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router";
import {Link} from "react-router-dom";
import ThreadComponent from "./threads/threadComponent";
import ThreadComponentContainer from "./threads/ThreadComponentContainer";
import PostComponentContainer from "./posts/postComponentContainer";

function App(props) {
    return (
        <>
            <header>
                <Link to={'/'}>Мочан</Link>
                <Link to={'/po'}> po</Link>
                <Link to={'/b'}> b</Link>
            </header>
            <Routes>
                <Route path={'/'} element={<ThreadComponentContainer/>}/>
                <Route path={'/:board'} element={<ThreadComponentContainer/>}/>
                <Route path={'/:board/:id'} element={<PostComponentContainer/>}/>
            </Routes>
        </>
    );
}

export default App;

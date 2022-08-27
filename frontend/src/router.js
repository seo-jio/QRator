import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entrance from './pages/Entrance';
import List from './pages/List';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/list' element={<List />} />
                <Route path='/entrance' element={<Entrance />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

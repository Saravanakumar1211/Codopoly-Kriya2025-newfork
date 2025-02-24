import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
             </Routes>
        </Router>
    );
};

export default AppRouter;

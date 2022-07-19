import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompSample from './pages/comp/Sample';
import ProjectSample from './pages/project/Sample';
import Home from './pages/Home';
import ScrollMiddleWare from './ScrollMiddleWare';
import Pma from './pages/project/Pma';
import Editor from './pages/project/Editor';
import Iot from './pages/project/Iot';
import Acobook from './pages/project/Acobook';

function App() {
    return (
        <BrowserRouter>
            <ScrollMiddleWare />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/components/sample" element={<CompSample />} />
                <Route path="/projects/iot" element={<Iot />} />
                <Route path="/projects/editor" element={<Editor />} />
                <Route path="/projects/pma" element={<Pma />} />
                <Route path="/projects/acobook" element={<Acobook />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

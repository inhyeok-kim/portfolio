import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompSample from './pages/comp/Sample';
import ProjectSample from './pages/project/Sample';
import Home from './pages/Home';
import ScrollMiddleWare from './ScrollMiddleWare';
import Pma from './pages/project/Pma';
import Editor from './pages/project/Editor';
import Iot from './pages/project/Iot';
import Acobook from './pages/project/Acobook';
import Switch from './pages/comp/Switch';
import Paint from './pages/comp/Paint';
import Carousel from './pages/comp/Carousel';

function App() {
    return (
        <BrowserRouter>
            <ScrollMiddleWare />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/components/sample" element={<CompSample />} />
                <Route path="/components/switch" element={<Switch />} />
                <Route path="/components/paint" element={<Paint />} />
                <Route path="/components/carousel" element={<Carousel />} />
                <Route path="/projects/iot" element={<Iot />} />
                <Route path="/projects/editor" element={<Editor />} />
                <Route path="/projects/pma" element={<Pma />} />
                <Route path="/projects/acobook" element={<Acobook />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

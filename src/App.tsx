import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompSample from './pages/comp/Sample';
import ProjectSample from './pages/project/Sample';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/components/sample" element={<CompSample />} />
                <Route path="/projects/sample" element={<ProjectSample />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

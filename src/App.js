import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';

import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Container customClass="min_height">
                    <Routes>
                        <Route path="/budget/" exact element = { <Home /> } />
                        <Route path="/budget/projects"  element = { <Projects /> } /> 
                        <Route path="/budget/about"  element = { <About /> } /> 
                        <Route path="/budget/contact" element = { <Contact /> } /> 
                        <Route path="/budget/newproject" element = { <NewProject /> } /> 
                        <Route path="/budget/project/:id" element = { <Project /> } /> 
                    </Routes>
                </Container>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;

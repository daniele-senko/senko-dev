
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './pages/navbar/navbar';
import { Header } from './pages/header/header';
import { AboutMe } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { MyProject } from './pages/project/project';
import { Footer } from './pages/footer/footer';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/sobre" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projetos" element={<MyProject />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  )
}

export default App;

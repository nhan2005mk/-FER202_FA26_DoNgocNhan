import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import ProjectsPage from './components/ProjectsPage';
import SkillsPage from './components/SkillsPage';

const App = () => (
  <>
    <AppNavbar />
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  </>
);

export default App;

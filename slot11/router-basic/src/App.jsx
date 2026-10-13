import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import ProjectsPage from './components/ProjectsPage';
import SkillsPage from './components/SkillsPage';
import CourseListPage from './components/CourseListPage';
import CourseDetailPage from './components/CourseDetailPage';
import EventPage from './components/EventPage';
import RegisterPage from './components/RegisterPage';
import SuccessPage from './components/SuccessPage';

const App = () => (
  <>
    {/* Thanh Menu điều hướng chung cho tất cả các bài */}
    <AppNavbar />

    <Container className="pb-5">
      <Routes>
        {/* ================= BÀI 1: PORTFOLIO CÁ NHÂN ================= */}
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* ================= BÀI 3: DANH SÁCH MÔN HỌC ================= */}
        <Route path="/courses" element={<CourseListPage />} />
        <Route path="/courses/:code" element={<CourseDetailPage />} />

        {/* ================= BÀI 4: ĐĂNG KÝ SỰ KIỆN ================= */}
        <Route path="/event" element={<EventPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/success" element={<SuccessPage />} />

        {/* ================= TRANG BÁO LỖI 404 ================= */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  </>
);

export default App;

import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import CourseListPage from './components/CourseListPage';
import CourseDetailPage from './components/CourseDetailPage';
import EventPage from './components/EventPage';
import RegisterPage from './components/RegisterPage';
import SuccessPage from './components/SuccessPage';

<<<<<<< HEAD
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/skills" element={<SkillsPage />} />
    </Routes>
  );
}
=======
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
>>>>>>> 97f52415804f415348ed93f1990d9677fa0e0aca

export default App;
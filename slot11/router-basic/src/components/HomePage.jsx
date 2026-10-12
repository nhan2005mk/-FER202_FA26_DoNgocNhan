import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="p-5 bg-light rounded-3">
    <h1 className="display-5 fw-bold">Xin chào, mình là Nguyễn Văn A</h1>
    <p className="fs-5">
      Sinh viên ngành Kỹ thuật phần mềm – FPT University. Mình yêu thích phát triển Front-end với
      ReactJS.
    </p>
    <Button as={Link} to="/projects" variant="primary" size="lg">
      Xem dự án của mình
    </Button>
  </div>
);

export default HomePage;

import Container from 'react-bootstrap/Container';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <Container className="py-5">
      <h1 className="h2 text-center mb-4">Bài 8: Form đăng ký</h1>
      <RegisterForm />
    </Container>
  );
}

export default App;

import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Counter from './components/Counter';
import TodoApp from './components/TodoApp';

export default function App() {
  const [activeTab, setActiveTab] = useState('bai2');

  return (
    <div className="min-vh-100 bg-light">
      <Navbar bg="dark" variant="dark" expand="lg" className="px-4 shadow-sm">
        <Navbar.Brand className="fw-bold">Redux Labs</Navbar.Brand>
        <Nav className="ms-auto" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Nav.Link eventKey="bai1">Bài 1: Counter</Nav.Link>
          <Nav.Link eventKey="bai2">Bài 2: Todo List</Nav.Link>
        </Nav>
      </Navbar>

      <Container className="py-4">
        {activeTab === 'bai1' && <Counter />}
        {activeTab === 'bai2' && <TodoApp />}
      </Container>
    </div>
  );
}

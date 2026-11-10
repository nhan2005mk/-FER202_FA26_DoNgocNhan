import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Counter from './components/Counter';
import TodoApp from './components/TodoApp';
import UserApp from './components/UserApp';
import ShopApp from './components/ShopApp';
import StudentApp from './components/StudentApp';

export default function App() {
  const [activeTab, setActiveTab] = useState('bai5');

  return (
    <div className="min-vh-100 bg-light">
      <Navbar bg="dark" variant="dark" expand="lg" className="px-4 shadow-sm mb-3">
        <Navbar.Brand className="fw-bold">Redux Labs (FER202)</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
            <Nav.Link eventKey="bai1">Bài 1: Counter</Nav.Link>
            <Nav.Link eventKey="bai2">Bài 2: Todo List</Nav.Link>
            <Nav.Link eventKey="bai3">Bài 3: Users (Thunk)</Nav.Link>
            <Nav.Link eventKey="bai4">Bài 4: Shop (RTK)</Nav.Link>
            <Nav.Link eventKey="bai5">Bài 5: Sinh viên (CRUD)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="py-2">
        {activeTab === 'bai1' && <Counter />}
        {activeTab === 'bai2' && <TodoApp />}
        {activeTab === 'bai3' && <UserApp />}
        {activeTab === 'bai4' && <ShopApp />}
        {activeTab === 'bai5' && <StudentApp />}
      </Container>
    </div>
  );
}

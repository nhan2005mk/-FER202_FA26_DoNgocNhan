import { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import Toolbar from './Toolbar';
import StudentTable from './StudentTable';
import StudentFormModal from './StudentFormModal';

export default function StudentApp() {
  const [show, setShow] = useState(false);
  const [editing, setEditing] = useState(null); // null = thêm mới; object = đang sửa

  const openAdd = () => {
    setEditing(null);
    setShow(true);
  };

  const openEdit = (student) => {
    setEditing(student);
    setShow(true);
  };

  return (
    <Container className="py-2">
      <Card className="shadow border-0 mb-4">
        <Card.Body className="p-4">
          <h3 className="mb-4 text-dark">🎓 Quản lý Sinh viên — Redux Toolkit & JSON Server</h3>
          <Toolbar onAdd={openAdd} />
          <StudentTable onEdit={openEdit} />
          <StudentFormModal show={show} onHide={() => setShow(false)} editing={editing} />
        </Card.Body>
      </Card>
    </Container>
  );
}


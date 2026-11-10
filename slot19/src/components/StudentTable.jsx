import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Spinner, Alert, Badge } from 'react-bootstrap';
import {
  fetchStudents,
  deleteStudent,
  clearError,
  selectVisibleStudents,
  selectStudentsState,
} from '../features/students/studentsSlice';

export default function StudentTable({ onEdit }) {
  const students = useSelector(selectVisibleStudents);
  const { status, error, saving } = useSelector(selectStudentsState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(fetchStudents());
  }, [status, dispatch]);

  const handleDelete = async (s) => {
    if (!window.confirm(`Bạn có chắc muốn xóa sinh viên ${s.name} (${s.code})?`)) return;
    try {
      await dispatch(deleteStudent(s.id)).unwrap();
    } catch {
      /* lỗi đã được lưu vào state.error bởi addMatcher */
    }
  };

  if (status === 'loading') {
    return (
      <div className="text-center p-5">
        <Spinner animation="border" variant="primary" />
        <div className="mt-2 text-muted">Đang tải danh sách sinh viên...</div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <Alert variant="danger" className="my-3">
        <strong>Lỗi kết nối:</strong> {error}. Hãy đảm bảo bạn đã khởi động JSON Server bằng lệnh{' '}
        <code>npm run server</code> hoặc <code>npm start</code> (cổng 9999).{' '}
        <Button size="sm" variant="outline-danger" className="ms-2" onClick={() => dispatch(fetchStudents())}>
          Thử lại
        </Button>
      </Alert>
    );
  }

  return (
    <>
      {error && (
        <Alert variant="warning" dismissible onClose={() => dispatch(clearError())}>
          {error}
        </Alert>
      )}
      <Table striped bordered hover responsive className="align-middle shadow-sm">
        <thead className="table-dark">
          <tr>
            <th style={{ width: 50 }}>#</th>
            <th>Mã SV</th>
            <th>Họ và tên</th>
            <th>Email</th>
            <th className="text-center">GPA</th>
            <th>Ngành</th>
            <th className="text-center" style={{ width: 150 }}>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center text-muted py-4">
                Không tìm thấy sinh viên nào
              </td>
            </tr>
          )}
          {students.map((s, i) => (
            <tr key={s.id}>
              <td>{i + 1}</td>
              <td className="fw-bold text-primary">{s.code}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td className="text-center">
                <Badge bg={s.gpa >= 8 ? 'success' : s.gpa >= 5 ? 'primary' : 'danger'}>
                  {Number(s.gpa).toFixed(1)}
                </Badge>
              </td>
              <td>
                <Badge bg="secondary">{s.major}</Badge>
              </td>
              <td className="text-center text-nowrap">
                <Button size="sm" variant="outline-warning" className="me-1" onClick={() => onEdit(s)}>
                  Sửa
                </Button>
                <Button
                  size="sm"
                  variant="outline-danger"
                  disabled={saving}
                  onClick={() => handleDelete(s)}
                >
                  Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}


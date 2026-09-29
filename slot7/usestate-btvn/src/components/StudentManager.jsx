import { useState } from 'react'
import { Badge, Button, Col, Form, Row, Table } from 'react-bootstrap'

const CITIES = ['Hà Nội', 'Đà Nẵng', 'TP.HCM', 'Cần Thơ']

const initialStudents = [
  { id: 1, name: 'Nguyễn Văn An', score: 8.5, contact: { city: 'Hà Nội' } },
  { id: 2, name: 'Trần Thị Bình', score: 4.5, contact: { city: 'Đà Nẵng' } },
  { id: 3, name: 'Lê Minh Châu', score: 6, contact: { city: 'TP.HCM' } },
]

const clampScore = (value) => Math.min(10, Math.max(0, value))

const StudentManager = () => {
  const [students, setStudents] = useState(initialStudents)
  const [newName, setNewName] = useState('')
  const [sortBy, setSortBy] = useState('none')

  const canAdd = newName.trim().length >= 3

  const addStudent = (e) => {
    e.preventDefault()
    if (!canAdd) return
    const name = newName.trim()
    setStudents((prev) => [...prev, { id: Date.now(), name, score: 0, contact: { city: CITIES[0] } }])
    setNewName('')
  }

  const updateScore = (id, text) => {
    const value = Number(text)
    const score = clampScore(Number.isNaN(value) ? 0 : value)
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, score } : s)))
  }

  const updateCity = (id, city) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, contact: { ...s.contact, city } } : s)),
    )
  }

  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id))
  }

  const bonusAll = () => {
    setStudents((prev) => prev.map((s) => ({ ...s, score: clampScore(s.score + 0.5) })))
  }

  const sorted =
    sortBy === 'none'
      ? students
      : [...students].sort((a, b) =>
          sortBy === 'name' ? a.name.localeCompare(b.name, 'vi') : b.score - a.score,
        )

  const average =
    students.length === 0
      ? '0.00'
      : (students.reduce((sum, s) => sum + s.score, 0) / students.length).toFixed(2)
  const passed = students.filter((s) => s.score >= 5).length

  return (
    <section>
      <h2 className="mb-3">Bài 4: Quản lý điểm sinh viên</h2>

      <Form onSubmit={addStudent} className="mb-3">
        <Row className="g-2 align-items-center">
          <Col md={5}>
            <Form.Control
              placeholder="Họ tên sinh viên (ít nhất 3 ký tự)"
              aria-label="Họ tên sinh viên mới"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" disabled={!canAdd}>
              Thêm
            </Button>
          </Col>
          <Col md={3} className="ms-md-auto">
            <Form.Select
              aria-label="Sắp xếp"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="none">Thứ tự nhập</option>
              <option value="name">Theo tên A → Z</option>
              <option value="score">Điểm cao → thấp</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Button variant="outline-success" onClick={bonusAll}>
              +0.5 cả lớp
            </Button>
          </Col>
        </Row>
      </Form>

      <Table bordered hover responsive className="align-middle">
        <thead>
          <tr>
            <th>Họ tên</th>
            <th style={{ width: 120 }}>Điểm</th>
            <th style={{ width: 160 }}>Thành phố</th>
            <th>Kết quả</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>
                <Form.Control
                  type="number"
                  size="sm"
                  min={0}
                  max={10}
                  step={0.5}
                  aria-label={`Điểm của ${s.name}`}
                  value={s.score}
                  onChange={(e) => updateScore(s.id, e.target.value)}
                />
              </td>
              <td>
                <Form.Select
                  size="sm"
                  aria-label={`Thành phố của ${s.name}`}
                  value={s.contact.city}
                  onChange={(e) => updateCity(s.id, e.target.value)}
                >
                  {CITIES.map((city) => (
                    <option key={city}>{city}</option>
                  ))}
                </Form.Select>
              </td>
              <td>
                {s.score >= 5 ? <Badge bg="success">Đạt</Badge> : <Badge bg="danger">Chưa đạt</Badge>}
              </td>
              <td>
                <Button variant="outline-danger" size="sm" onClick={() => removeStudent(s.id)}>
                  Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <p className="mb-0">
        Sĩ số: {students.length} · Điểm trung bình: {average} · Đạt: {passed}/{students.length}
      </p>
    </section>
  )
}

export default StudentManager

import { useState, useReducer } from 'react'
import { Container, Form, Button, Modal, Card, Row, Col } from 'react-bootstrap'

// 1. Khởi tạo State và Reducer cho Form
const initialState = {
  values: {
    name: '',
    email: '',
    message: '',
  },
  errors: {},
}

function formReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value,
        },
        // Xóa câu thông báo lỗi của trường đó khi người dùng sửa lại
        errors: {
          ...state.errors,
          [action.field]: '',
        },
      }
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors,
      }
    case 'RESET_FORM':
      return initialState
    default:
      return state
  }
}

export default function Contact() {
  // 2. Sử dụng useReducer quản lý form & useState (showModal) theo yêu cầu B8
  const [state, dispatch] = useReducer(formReducer, initialState)
  const [showModal, setShowModal] = useState(false)

  // 3. Hàm kiểm tra dữ liệu hợp lệ (Validation)
  const validate = () => {
    const newErrors = {}
    const { name, email, message } = state.values

    if (!name.trim()) {
      newErrors.name = 'Vui lòng nhập họ và tên!'
    } else if (name.trim().length < 2) {
      newErrors.name = 'Họ và tên phải có ít nhất 2 ký tự!'
    }

    if (!email.trim()) {
      newErrors.email = 'Vui lòng nhập địa chỉ email!'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email không hợp lệ (ví dụ: contact@fpt.edu.vn)!'
    }

    if (!message.trim()) {
      newErrors.message = 'Vui lòng nhập nội dung liên hệ!'
    } else if (message.trim().length < 5) {
      newErrors.message = 'Nội dung tin nhắn phải có ít nhất 5 ký tự!'
    }

    return newErrors
  }

  // 4. Xử lý khi nhấn nút gửi form
  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      // Có lỗi -> lưu lỗi vào reducer để hiển thị
      dispatch({ type: 'SET_ERRORS', errors: validationErrors })
    } else {
      // Dữ liệu valid -> hiển thị modal (useState: showModal)
      setShowModal(true)
    }
  }

  const handleCloseModal = () => {
    setShowModal(false)
    dispatch({ type: 'RESET_FORM' }) // Đặt lại form sau khi đóng modal
  }

  return (
    <Container className="my-5" style={{ maxWidth: '650px' }}>
      <Card className="shadow border-0 rounded-3 p-4">
        <div className="text-center mb-4">
          <h2 className="text-danger fw-bold">Liên Hệ Với Chúng Tôi</h2>
          <p className="text-muted small">
            Vui lòng điền thông tin bên dưới để gửi phản hồi cho nhà hàng
          </p>
        </div>

        <Form onSubmit={handleSubmit} noValidate>
          {/* Họ và tên */}
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label className="fw-semibold">Họ và tên</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập họ và tên..."
              value={state.values.name}
              isInvalid={Boolean(state.errors.name)}
              onChange={(e) =>
                dispatch({
                  type: 'CHANGE_INPUT',
                  field: 'name',
                  value: e.target.value,
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              {state.errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="fw-semibold">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Nhập địa chỉ email..."
              value={state.values.email}
              isInvalid={Boolean(state.errors.email)}
              onChange={(e) =>
                dispatch({
                  type: 'CHANGE_INPUT',
                  field: 'email',
                  value: e.target.value,
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              {state.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Nội dung liên hệ */}
          <Form.Group className="mb-4" controlId="formMessage">
            <Form.Label className="fw-semibold">Nội dung tin nhắn</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Nhập nội dung cần hỗ trợ hoặc góp ý..."
              value={state.values.message}
              isInvalid={Boolean(state.errors.message)}
              onChange={(e) =>
                dispatch({
                  type: 'CHANGE_INPUT',
                  field: 'message',
                  value: e.target.value,
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              {state.errors.message}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Nút gửi form */}
          <Button
            variant="danger"
            type="submit"
            size="lg"
            className="w-100 fw-bold shadow-sm"
            style={{ borderRadius: '8px' }}
          >
            Gửi Thông Tin
          </Button>
        </Form>
      </Card>

      {/* 5. Modal hiển thị khi dữ liệu Valid - Tiêu đề: Completed Lab5 */}
      <Modal show={showModal} onHide={handleCloseModal} centered backdrop="static">
        <Modal.Header closeButton className="bg-success text-white">
          <Modal.Title className="fw-bold">Completed Lab5</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4 px-3">
          <div className="fs-1 text-success mb-2">🎉</div>
          <h4 className="fw-bold text-success mb-2">Gửi Thành Công!</h4>
          <p className="text-muted mb-3">
            Dữ liệu Form đã được kiểm tra hợp lệ qua <code>useReducer</code>.
          </p>
          <div className="bg-light p-3 rounded text-start small">
            <p className="mb-1"><strong>Họ tên:</strong> {state.values.name}</p>
            <p className="mb-1"><strong>Email:</strong> {state.values.email}</p>
            <p className="mb-0"><strong>Nội dung:</strong> {state.values.message}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModal} className="px-4 fw-semibold">
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}
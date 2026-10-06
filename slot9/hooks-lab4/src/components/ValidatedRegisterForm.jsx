import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import AppButton from './AppButton';
import InputField from './InputField';
import { fields, genders, majors, initialValues } from '../data/registerConfig';
import { validateRegister } from '../utils/validateRegister';

const ValidatedRegisterForm = () => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [success, setSuccess] = useState('');

  // errors là dữ liệu dẫn xuất từ values → tính lại mỗi lần render
  const errors = validateRegister(values);
  const errorCount = Object.keys(errors).length;
  const isValid = errorCount === 0;
  // touched quyết định KHI NÀO hiện lỗi, errors quyết định lỗi GÌ
  const showError = (name) => (touched[name] ? errors[name] : undefined);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setSuccess('');
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Đánh dấu mọi ô là đã chạm để lộ hết lỗi còn lại
    const allTouched = Object.keys(initialValues).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {},
    );
    setTouched(allTouched);
    if (!isValid) return;

    setSuccess(`Đăng ký thành công! Chào mừng ${values.fullName.trim()}.`);
    setValues(initialValues);
    setTouched({});
  };

  return (
    <Row className="justify-content-center">
      <Col md={7} lg={6}>
        <Card>
          <Card.Body>
            <Card.Title className="mb-4">Đăng ký tài khoản (có validation)</Card.Title>
            {success && <Alert variant="success">{success}</Alert>}

            <Form noValidate onSubmit={handleSubmit}>
              {fields.map((field) => (
                <InputField
                  key={field.id}
                  {...field}
                  name={field.id}
                  value={values[field.id]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={showError(field.id)}
                />
              ))}

              <Form.Group className="mb-3">
                <Form.Label className="d-block">Giới tính</Form.Label>
                {genders.map((gender) => (
                  <Form.Check
                    inline
                    key={gender}
                    type="radio"
                    name="gender"
                    id={`gender-${gender}`}
                    label={gender}
                    value={gender}
                    checked={values.gender === gender}
                    onChange={handleChange}
                  />
                ))}
              </Form.Group>

              <Form.Group className="mb-3" controlId="major">
                <Form.Label>
                  Chuyên ngành <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  name="major"
                  value={values.major}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={Boolean(showError('major'))}
                >
                  <option value="">-- Chọn chuyên ngành --</option>
                  {majors.map((major) => (
                    <option key={major} value={major}>
                      {major}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">{showError('major')}</Form.Control.Feedback>
              </Form.Group>

              <Form.Check
                className="mb-3"
                type="checkbox"
                id="agreeTerms"
                name="agree"
                label="Tôi đồng ý điều khoản"
                checked={values.agree}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={Boolean(showError('agree'))}
                feedback={showError('agree')}
                feedbackType="invalid"
              />

              <AppButton type="submit" className="w-100">
                Đăng ký
              </AppButton>
              <Form.Text className={`d-block mt-2 ${isValid ? 'text-success' : 'text-muted'}`}>
                {isValid ? 'Thông tin hợp lệ' : `Còn ${errorCount} mục chưa hợp lệ`}
              </Form.Text>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ValidatedRegisterForm;

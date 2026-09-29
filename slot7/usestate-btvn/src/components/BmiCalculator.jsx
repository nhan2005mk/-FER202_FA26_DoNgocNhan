import { useState } from 'react'
import { Alert, Button, ButtonGroup, Card, Col, Form, Row } from 'react-bootstrap'

const classify = (bmi) => {
  if (bmi < 18.5) return { label: 'Thiếu cân', variant: 'info' }
  if (bmi < 23) return { label: 'Bình thường', variant: 'success' }
  if (bmi < 25) return { label: 'Thừa cân', variant: 'warning' }
  return { label: 'Béo phì', variant: 'danger' }
}

const BmiCalculator = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [unit, setUnit] = useState('cm')

  const h = Number(height)
  const w = Number(weight)
  const meters = unit === 'cm' ? h / 100 : h

  const errors = {}
  if (height !== '' && !(meters >= 0.5 && meters <= 2.5)) {
    errors.height = unit === 'cm' ? 'Chiều cao từ 50 đến 250 cm' : 'Chiều cao từ 0.5 đến 2.5 m'
  }
  if (weight !== '' && !(w >= 10 && w <= 300)) {
    errors.weight = 'Cân nặng từ 10 đến 300 kg'
  }

  const ready = height !== '' && weight !== '' && !errors.height && !errors.weight
  const bmi = ready ? w / (meters * meters) : null
  const result = ready ? classify(bmi) : null

  const changeUnit = (next) => {
    if (next === unit) return
    if (height !== '') {
      const converted = next === 'm' ? h / 100 : h * 100
      setHeight(String(Number(converted.toFixed(4))))
    }
    setUnit(next)
  }

  return (
    <section>
      <h2 className="mb-3">Bài 3: Máy tính BMI</h2>

      <Card>
        <Card.Body>
          <Row className="g-3 mb-3">
            <Col md={6}>
              <Form.Group controlId="bmi-height">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Form.Label className="mb-0">Chiều cao ({unit})</Form.Label>
                  <ButtonGroup size="sm">
                    <Button
                      variant={unit === 'cm' ? 'primary' : 'outline-primary'}
                      onClick={() => changeUnit('cm')}
                    >
                      cm
                    </Button>
                    <Button
                      variant={unit === 'm' ? 'primary' : 'outline-primary'}
                      onClick={() => changeUnit('m')}
                    >
                      m
                    </Button>
                  </ButtonGroup>
                </div>
                <Form.Control
                  type="number"
                  step={unit === 'cm' ? 1 : 0.01}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  isInvalid={!!errors.height}
                />
                <Form.Control.Feedback type="invalid">{errors.height}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="bmi-weight">
                <div className="d-flex align-items-center mb-2" style={{ minHeight: 31 }}>
                  <Form.Label className="mb-0">Cân nặng (kg)</Form.Label>
                </div>
                <Form.Control
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  isInvalid={!!errors.weight}
                />
                <Form.Control.Feedback type="invalid">{errors.weight}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          {result ? (
            <Alert variant={result.variant} className="mb-0">
              BMI = {bmi.toFixed(1)} → {result.label}
            </Alert>
          ) : (
            <p className="text-muted mb-0">Nhập chiều cao và cân nặng hợp lệ để xem kết quả.</p>
          )}
        </Card.Body>
      </Card>
    </section>
  )
}

export default BmiCalculator

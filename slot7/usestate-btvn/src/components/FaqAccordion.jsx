import { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const faqs = [
  { id: 1, question: 'React là gì?', answer: 'Thư viện JavaScript để xây dựng giao diện người dùng theo component.' },
  { id: 2, question: 'State khác props thế nào?', answer: 'Props do cha truyền xuống và chỉ đọc; state do chính component quản lý và thay đổi được.' },
  { id: 3, question: 'Vì sao phải dùng setState?', answer: 'Vì chỉ khi gọi hàm set, React mới biết dữ liệu đổi để render lại giao diện.' },
]

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="mb-2">
      <Card.Header
        role="button"
        className="d-flex justify-content-between"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{question}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </Card.Header>
      {isOpen && <Card.Body>{answer}</Card.Body>}
    </Card>
  )
}

const FaqAccordion = () => {
  const [singleMode, setSingleMode] = useState(false)
  const [openId, setOpenId] = useState(null)

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id))
  }

  const handleModeChange = (e) => {
    setSingleMode(e.target.checked)
    setOpenId(null)
  }

  return (
    <section>
      <h2 className="mb-3">Bài 1: FAQ Accordion</h2>

      <div className="d-flex align-items-center justify-content-between mb-3">
        <Form.Check
          type="switch"
          id="faq-single-mode"
          label="Chỉ mở một câu tại một thời điểm"
          checked={singleMode}
          onChange={handleModeChange}
        />
        <Button
          variant="outline-secondary"
          size="sm"
          disabled={!singleMode || openId === null}
          onClick={() => setOpenId(null)}
        >
          Đóng tất cả
        </Button>
      </div>

      {singleMode
        ? faqs.map(({ id, question, answer }) => {
            const isOpen = openId === id
            return (
              <Card key={id} className="mb-2">
                <Card.Header
                  role="button"
                  className="d-flex justify-content-between"
                  onClick={() => handleToggle(id)}
                >
                  <span>{question}</span>
                  <span>{isOpen ? '−' : '+'}</span>
                </Card.Header>
                {isOpen && <Card.Body>{answer}</Card.Body>}
              </Card>
            )
          })
        : faqs.map(({ id, question, answer }) => (
            <FaqItem key={id} question={question} answer={answer} />
          ))}
    </section>
  )
}

export default FaqAccordion

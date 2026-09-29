import { useState } from 'react'
import { Alert, Button, Card, ListGroup, ProgressBar } from 'react-bootstrap'

const QUESTIONS = [
  { id: 'q1', text: 'Hook nào dùng để lưu trạng thái cục bộ?', options: ['useEffect', 'useState', 'useRef', 'useMemo'], answer: 1 },
  { id: 'q2', text: 'Gọi setCount(count + 1) ba lần trong một sự kiện, count tăng bao nhiêu?', options: ['1', '2', '3', '0'], answer: 0 },
  { id: 'q3', text: 'Cách đúng để thêm phần tử vào mảng state?', options: ['list.push(x)', 'setList(list.push(x))', 'setList([...list, x])', 'list[list.length] = x'], answer: 2 },
  { id: 'q4', text: 'Checkbox có điều khiển dùng prop nào?', options: ['value', 'checked', 'selected', 'defaultValue'], answer: 1 },
]

const shuffle = (array) => {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const Quiz = ({ onRestart }) => {
  const [questions] = useState(() => shuffle(QUESTIONS))
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [finished, setFinished] = useState(false)

  const current = questions[index]
  const selected = answers[current.id]
  const answeredCount = Object.keys(answers).length
  const score = questions.filter((q) => answers[q.id] === q.answer).length
  const isLast = index === questions.length - 1

  const chooseOption = (optionIndex) => {
    setAnswers((prev) => ({ ...prev, [current.id]: optionIndex }))
  }

  if (finished) {
    return (
      <Card>
        <Card.Body>
          <Alert variant={score === questions.length ? 'success' : 'info'}>
            Bạn đúng {score}/{questions.length} câu
          </Alert>
          <ListGroup className="mb-3">
            {questions.map((q, i) => {
              const isCorrect = answers[q.id] === q.answer
              return (
                <ListGroup.Item key={q.id} variant={isCorrect ? 'success' : 'danger'}>
                  <div className="fw-semibold">
                    Câu {i + 1}: {q.text}
                  </div>
                  <div>
                    Bạn chọn: {q.options[answers[q.id]]} · Đáp án đúng: {q.options[q.answer]}
                  </div>
                </ListGroup.Item>
              )
            })}
          </ListGroup>
          <Button onClick={onRestart}>Làm lại</Button>
        </Card.Body>
      </Card>
    )
  }

  return (
    <Card>
      <Card.Body>
        <ProgressBar
          className="mb-3"
          now={(answeredCount / questions.length) * 100}
          label={`${answeredCount}/${questions.length}`}
        />
        <Card.Title className="mb-3">
          Câu {index + 1}: {current.text}
        </Card.Title>
        <ListGroup className="mb-3">
          {current.options.map((option, i) => (
            <ListGroup.Item key={option} action active={selected === i} onClick={() => chooseOption(i)}>
              {option}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="d-flex justify-content-between">
          <Button variant="outline-secondary" disabled={index === 0} onClick={() => setIndex((i) => i - 1)}>
            ← Trước
          </Button>
          {isLast ? (
            <Button
              variant="success"
              disabled={answeredCount < questions.length}
              onClick={() => setFinished(true)}
            >
              Nộp bài
            </Button>
          ) : (
            <Button disabled={selected === undefined} onClick={() => setIndex((i) => i + 1)}>
              Tiếp →
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

const QuizApp = () => {
  const [attempt, setAttempt] = useState(1)

  return (
    <section>
      <h2 className="mb-3">Bài 5: Quiz trắc nghiệm</h2>
      <p className="text-muted">Lượt làm bài thứ {attempt}</p>
      <Quiz key={attempt} onRestart={() => setAttempt((a) => a + 1)} />
    </section>
  )
}

export default QuizApp

import { useState } from 'react'
import { Button, Card, Form, ListGroup } from 'react-bootstrap'
import StarRating from './StarRating'

const ReviewForm = () => {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [reviews, setReviews] = useState([])

  const canSubmit = rating > 0 && comment.trim().length >= 5
  const average =
    reviews.length === 0
      ? '0.0'
      : (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setReviews((prev) => [{ id: Date.now(), rating, comment: comment.trim() }, ...prev])
    setRating(0)
    setComment('')
  }

  return (
    <section>
      <h2 className="mb-3">Bài 2: Đánh giá sao</h2>

      <Card className="mb-3">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Chấm điểm</Form.Label>
              <StarRating value={rating} onChange={setRating} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="review-comment">
              <Form.Label>Nhận xét</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ít nhất 5 ký tự"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" disabled={!canSubmit}>
              Gửi đánh giá
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <h5>
        Trung bình {average}/5 ({reviews.length} lượt)
      </h5>
      <ListGroup>
        {reviews.map((r) => (
          <ListGroup.Item key={r.id}>
            <span className="text-warning">{'★'.repeat(r.rating)}</span>
            <span className="text-secondary">{'★'.repeat(5 - r.rating)}</span>
            <span className="ms-2">{r.comment}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </section>
  )
}

export default ReviewForm

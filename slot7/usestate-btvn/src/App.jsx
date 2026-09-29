import { Container } from 'react-bootstrap'
import FaqAccordion from './components/FaqAccordion'
import ReviewForm from './components/ReviewForm'
import BmiCalculator from './components/BmiCalculator'
import StudentManager from './components/StudentManager'
import QuizApp from './components/QuizApp'

function App() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Bài tập useState</h1>
      <FaqAccordion />
      <hr className="my-5" />
      <ReviewForm />
      <hr className="my-5" />
      <BmiCalculator />
      <hr className="my-5" />
      <StudentManager />
      <hr className="my-5" />
      <QuizApp />
    </Container>
  )
}

export default App

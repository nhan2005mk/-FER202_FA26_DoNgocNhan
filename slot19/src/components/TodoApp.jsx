import { Container, Card } from 'react-bootstrap';
import TodoForm from './TodoForm';
import FilterBar from './FilterBar';
import TodoList from './TodoList';

export default function TodoApp() {
  return (
    <Container className="py-4" style={{ maxWidth: 600 }}>
      <Card className="shadow">
        <Card.Header as="h4" className="bg-primary text-white text-center py-3">
          📝 Redux Todo List
        </Card.Header>
        <Card.Body className="p-4">
          <TodoForm />
          <FilterBar />
          <TodoList />
        </Card.Body>
      </Card>
    </Container>
  );
}


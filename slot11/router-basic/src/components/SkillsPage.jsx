import { Badge, ListGroup } from 'react-bootstrap';

const SKILLS = [
  { name: 'HTML / CSS', level: 'Khá' },
  { name: 'JavaScript (ES6+)', level: 'Khá' },
  { name: 'ReactJS', level: 'Trung bình' },
  { name: 'React-Bootstrap', level: 'Trung bình' },
  { name: 'Git / GitHub', level: 'Cơ bản' },
];

const SkillsPage = () => (
  <>
    <h2 className="mb-3">Kỹ năng</h2>
    <ListGroup>
      {SKILLS.map((skill) => (
        <ListGroup.Item
          key={skill.name}
          className="d-flex justify-content-between align-items-center"
        >
          {skill.name}
          <Badge bg="primary" pill>
            {skill.level}
          </Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </>
);

export default SkillsPage;

import Card from 'react-bootstrap/Card';

const fullName = 'Nguyễn Văn An';
const birthYear = 2005;
const currentYear = 2026;
const major = 'Software Engineering';
const hour = new Date().getHours();

const WelcomeCard = () => {
  let session = 'morning';
  if (hour >= 12) session = 'afternoon';
  if (hour >= 18) session = 'evening';

  const greeting = `Good ${session}, ${fullName}!`;
  const age = currentYear - birthYear;
  const borderClass = age >= 18 ? 'border-success' : 'border-warning';

  return (
    <Card className={`shadow-sm ${borderClass}`}>
      <Card.Header>Student Information</Card.Header>
      <Card.Body>
        <Card.Title>{greeting}</Card.Title>
        <Card.Text>
          You are {age} years old and studying {major}.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WelcomeCard;

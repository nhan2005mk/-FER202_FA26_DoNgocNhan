import { ListGroup } from 'react-bootstrap';

const ContactPage = () => (
  <>
    <h2 className="mb-3">Liên hệ</h2>
    <ListGroup variant="flush">
      <ListGroup.Item>Email: nguyenvana@fpt.edu.vn</ListGroup.Item>
      <ListGroup.Item>Điện thoại: 0901 234 567</ListGroup.Item>
      <ListGroup.Item>
        GitHub:{' '}
        <a href="https://github.com" target="_blank" rel="noreferrer">
          github.com/nguyenvana
        </a>
      </ListGroup.Item>
    </ListGroup>
  </>
);

export default ContactPage;

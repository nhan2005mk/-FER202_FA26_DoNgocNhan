import StudentCard from './components/StudentCard';

const students = [
  {
    id: 'SE1701',
    name: 'Nguyễn Văn An',
    major: 'Software Engineering',
    gpa: 8.5,
    avatar: 'https://i.pravatar.cc/200?img=12',
    contact: { email: 'an.nv@fpt.edu.vn', phone: '0901 234 567' },
  },
  {
    id: 'SE1702',
    name: 'Trần Thị Bình',
    major: 'Artificial Intelligence',
    gpa: 9.1,
    avatar: 'https://i.pravatar.cc/200?img=47',
    contact: { email: 'binh.tt@fpt.edu.vn', phone: '0902 345 678' },
  },
  {
    id: 'SE1703',
    name: 'Lê Minh Cường',
    major: 'Digital Marketing',
    gpa: 7.9,
    avatar: 'https://i.pravatar.cc/200?img=68',
    contact: { email: 'cuong.lm@fpt.edu.vn', phone: '0903 456 789' },
  },
];

function App() {
  return (
    <div className="container my-4">
      <h1 className="h2 mb-4">Danh sách sinh viên</h1>
      <div className="d-flex gap-3 flex-wrap">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default App;
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Alert from 'react-bootstrap/Alert';
import QuantityPicker from '../components/QuantityPicker';
import MiniCart from '../components/MiniCart';
import ProfilePreview from '../components/ProfilePreview';
import ProductFilter from '../components/ProductFilter';
import RegisterForm from '../components/RegisterForm';
import ValidatedRegisterForm from '../components/ValidatedRegisterForm';
import TodoList from '../components/TodoList';
import LoginForm from '../components/LoginForm';
import CartDemoPage from './CartDemoPage';
import { useAuth } from '../context/AuthContext';
import { products } from '../data/products';

// Phải nằm bên trong AuthProvider thì mới gọi được useAuth()
const HomeContent = () => {
  const { isLoggedIn, user, login } = useAuth();

  return isLoggedIn ? (
    <Alert variant="success" style={{ maxWidth: 480 }}>
      <Alert.Heading className="h5">{`Chào mừng ${user.name}!`}</Alert.Heading>
      {`Bạn đang đăng nhập bằng ${user.email}. Thử bấm nút Tối/Sáng trên Header.`}
    </Alert>
  ) : (
    <LoginForm onLoginSuccess={login} />
  );
};

const ExercisesPage = () => (
  <Tabs defaultActiveKey="bai1" className="mb-4" mountOnEnter unmountOnExit>
    <Tab eventKey="bai1" title="Bài 1: useState">
      <h5>Phần 1. Bộ chọn số lượng</h5>
      <div className="d-flex flex-column gap-3 mb-4">
        <QuantityPicker />
        <QuantityPicker min={2} max={5} />
      </div>

      <h5>Phần 2. Giỏ hàng mini</h5>
      <MiniCart />
    </Tab>

    <Tab eventKey="bai2" title="Bài 2: Controlled input">
      <ProfilePreview />
    </Tab>

    <Tab eventKey="bai3" title="Bài 3: Lọc sản phẩm">
      <ProductFilter products={products} />
    </Tab>

    <Tab eventKey="bai4" title="Bài 4: Form đăng ký">
      <RegisterForm />
    </Tab>

    <Tab eventKey="bai5" title="Bài 5: Validation">
      <ValidatedRegisterForm />
    </Tab>

    <Tab eventKey="bai6" title="Bài 6: Todo list">
      <TodoList />
    </Tab>

    <Tab eventKey="bai7" title="Bài 7: useReducer giỏ hàng">
      <CartDemoPage />
    </Tab>

    <Tab eventKey="bai8" title="Bài 8: Đăng nhập">
      <LoginForm />
    </Tab>

    <Tab eventKey="bai9" title="Bài 9: useContext">
      <HomeContent />
    </Tab>
  </Tabs>
);

export default ExercisesPage;

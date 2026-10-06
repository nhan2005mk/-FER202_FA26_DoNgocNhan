import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import QuantityPicker from './components/QuantityPicker';
import MiniCart from './components/MiniCart';
import ProfilePreview from './components/ProfilePreview';
import ProductFilter from './components/ProductFilter';
import { products } from './data/products';

const App = () => (
  <div className="container my-4">
    <h2 className="mb-4">Lab4: React Hooks</h2>

    <Tabs defaultActiveKey="bai3" className="mb-4">
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
    </Tabs>
  </div>
);

export default App;

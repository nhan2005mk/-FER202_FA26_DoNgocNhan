import {
  CartTable,
  Layout,
  ProductList,
  RegisterForm,
  WelcomeCard,
} from './components';
import { products } from './data/products';

function App() {
  return (
    <Layout title="Cửa hàng ES6">
      <section id="home" className="mb-5">
        <WelcomeCard />
      </section>

      <section id="products" className="mb-5">
        <h2 className="h4 mb-3">Sản phẩm</h2>
        <ProductList products={products} />
      </section>

      <section id="cart" className="mb-5">
        <h2 className="h4 mb-3">Giỏ hàng</h2>
        <CartTable products={products} />
      </section>

      <section id="register">
        <h2 className="h4 mb-3">Đăng ký</h2>
        <RegisterForm />
      </section>
    </Layout>
  );
}

export default App;

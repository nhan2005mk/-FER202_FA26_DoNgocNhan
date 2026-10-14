/**
 * Danh sách 10 sản phẩm (products) cho Lab 5
 * Có đầy đủ các thuộc tính:
 * - id: Mã định danh duy nhất (number)
 * - name: Tên sản phẩm (string)
 * - description: Mô tả chi tiết sản phẩm (string)
 * - price: Giá gốc sản phẩm (number)
 * - discount: Phần trăm giảm giá (number, %)
 * - instock / inStock: Trạng thái còn hàng hay hết hàng (boolean)
 * - rating: Điểm đánh giá chất lượng (number)
 * - category: Danh mục / Phân loại sản phẩm (string)
 * - image: Đường dẫn hình ảnh (string)
 */

export const products = [
  {
    id: 1,
    name: 'Pizza Gà Nướng BBQ',
    description: 'Đế bánh mỏng giòn nướng vàng rộm kết hợp sốt BBQ đặc trưng, ức gà xé sợi và phô mai Mozzarella dẻo thơm.',
    price: 169000,
    discount: 10,
    instock: true,
    inStock: true,
    rating: 4.9,
    category: 'Pizza & Pasta',
    image: '/images/menu1.jpg',
  },
  {
    id: 2,
    name: 'Salad Đậu Hũ Ngũ Sắc',
    description: 'Đậu hũ áp chảo giòn ngoài mềm trong ăn kèm ngô ngọt, cà chua bi, trứng cút bổ dưỡng và rau xanh tươi mát.',
    price: 85000,
    discount: 0,
    instock: true,
    inStock: true,
    rating: 4.7,
    category: 'Healthy Food',
    image: '/images/menu2.jpg',
  },
  {
    id: 3,
    name: 'Bánh Pancake Chuối & Mật Ong',
    description: 'Từng lớp bánh pancake mềm mịn xốp xếp chồng phủ mật ong rừng thơm ngát, chuối tươi và lá bạc hà mát lành.',
    price: 75000,
    discount: 15,
    instock: true,
    inStock: true,
    rating: 4.8,
    category: 'Tráng miệng',
    image: '/images/menu3.jpg',
  },
  {
    id: 4,
    name: 'Bánh Gato Kem Phúc Bồn Tử',
    description: 'Bánh bông lan mềm ẩm hòa quyện lớp kem tươi mịn màng cùng quả phúc bồn tử đỏ mọng chua ngọt thanh tao.',
    price: 89000,
    discount: 5,
    instock: false,
    inStock: false,
    rating: 4.9,
    category: 'Tráng miệng',
    image: '/images/menu4.jpg',
  },
  {
    id: 5,
    name: 'Bánh Mì Bơ Trứng & Rau Bina',
    description: 'Bánh mì ngũ cốc nướng giòn rụm kết hợp bơ tươi béo ngậy, trứng luộc lòng đào và lá bina giàu dinh dưỡng.',
    price: 95000,
    discount: 0,
    instock: true,
    inStock: true,
    rating: 4.6,
    category: 'Bữa sáng',
    image: '/images/menu5.jpg',
  },
  {
    id: 6,
    name: 'Vegan Buddha Bowl Dinh Dưỡng',
    description: 'Hạt đậu gà hầm bùi bùi, khoai lang nướng mật, bơ sáp thái lát mỏng và sốt mè rang béo ngậy đầy hấp dẫn.',
    price: 109000,
    discount: 20,
    instock: true,
    inStock: true,
    rating: 4.8,
    category: 'Thuần chay',
    image: '/images/menu6.jpg',
  },
  {
    id: 7,
    name: 'Burger Bò Nướng Phô Mai',
    description: 'Thịt bò nhập khẩu nướng than hồng mọng nước, phô mai Cheddar chảy quyện kèm khoai tây chiên giòn tan.',
    price: 145000,
    discount: 0,
    instock: true,
    inStock: true,
    rating: 5.0,
    category: 'Fast Food',
    image: '/images/menu7.jpg',
  },
  {
    id: 8,
    name: 'Salmon Poke Bowl Cá Hồi',
    description: 'Cá hồi Na Uy tươi sống thái hạt lựu, đậu nành edamame, bơ chín và cơm Nhật rưới sốt ponzu đậm đà.',
    price: 175000,
    discount: 10,
    instock: true,
    inStock: true,
    rating: 4.9,
    category: 'Hải sản',
    image: '/images/menu8.jpg',
  },
  {
    id: 9,
    name: 'Bít Tết Bò Úc Sốt Tiêu Đen',
    description: 'Thịt thăn bò Úc hảo hạng nướng áp chảo chín tới mềm mọng, rưới sốt tiêu đen cay nồng kèm tỏi nướng thơm lừng.',
    price: 245000,
    discount: 15,
    instock: true,
    inStock: true,
    rating: 4.9,
    category: 'Món chính',
    image: '/images/menu9.jpg',
  },
  {
    id: 10,
    name: 'Gà Nướng Xiên Que BBQ',
    description: 'Xiên thịt gà ướp gia vị đậm đà nướng than hoa vàng óng, ăn kèm khoai tây đút lò và sốt tương cà đặc biệt.',
    price: 135000,
    discount: 0,
    instock: true,
    inStock: true,
    rating: 4.7,
    category: 'Món nướng',
    image: '/images/menu10.jpg',
  },
]

export default products

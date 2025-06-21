import {
  Container,
  ProductList,
  ProductItem,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductPrice,
  Stars,
} from "./ProductsList";
import iphone from "../assets/orders/iPhone-12.svg";
import nike from "../assets/orders/Nike.svg";
import dot from "../assets/orders/Menu.svg";
import star from "../assets/orders/star.svg";
import { OrderTitle } from "./Order";
import { Title } from "./Infocard";

export default function Product() {
  const products = [
    {
      name: "NIKE Shoes Black Pattern",
      price: "$87",
      img: nike,
    },
    {
      name: "iPhone 12",
      price: "$987",
      img: iphone,
    },
  ];

  return (
    <Container>
      <OrderTitle>
        <Title>Top Selling Products</Title>
        <img src={dot} width={12} />
      </OrderTitle>
      <ProductList>
        {products.map(({ name, price, img }) => (
          <ProductItem key={name}>
            <ProductImage>
              <img src={img} alt={name} />
            </ProductImage>
            <ProductDetails>
              <ProductName>{name}</ProductName>
              <Stars>
                <img src={star} alt="" />
              </Stars>
              <ProductPrice>{price}</ProductPrice>
            </ProductDetails>
          </ProductItem>
        ))}
      </ProductList>
    </Container>
  );
}

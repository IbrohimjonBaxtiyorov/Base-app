import camera from "../assets/orders/camera.svg";
import dress from "../assets/orders/dress.svg";
import oil from "../assets/orders/oil.svg";
import parfum from "../assets/orders/parfum.svg";
import {
  DescRiption,
  Order,
  OrderBage,
  OrderCard,
  Ordercart,
  Orderdesc,
  OrderImg,
  OrderTitle,
  Title,
} from "./Order";
import dot from "../assets/orders/Menu.svg";
import down from "../assets/orders/ArrowDown.svg";

export default function Orders() {
  const ordersData = [
    {
      tracing: "#876364",
      productname: "Camera Lens",
      price: "$178",
      order: "325",
      totalAmount: "$1,46,660",
      img: camera,
    },
    {
      tracing: "#876368",
      productname: "Black Sleep Dress",
      price: "$14",
      order: "53",
      totalAmount: "$46,660",
      img: dress,
    },
    {
      tracing: "#876412",
      productname: "Argan Oil",
      price: "$21",
      order: "78",
      totalAmount: "$3,46,676",
      img: oil,
    },
    {
      tracing: "#876621",
      productname: "EAU DE Parfum",
      price: "$32",
      order: "98",
      totalAmount: "$$3,46,981",
      img: parfum,
    },
  ];

  const orderDescription = [
    { desc: "Tracking no" },
    { desc: "Product Name" },
    { desc: "Price " },
    { desc: "Total Order " },
    { desc: "Total Amount" },
  ];
  return (
    <Ordercart>
      <OrderTitle>
        <Title>Recent Orders</Title>
        <img src={dot} width={12} />
      </OrderTitle>
      <Orderdesc>
        {orderDescription.map(({ desc }) => {
          return (
            <DescRiption key={desc}>
              {desc} <img width={6} src={down} />
            </DescRiption>
          );
        })}
      </Orderdesc>
      <OrderCard>
        {ordersData.map(
          ({ tracing, price, productname, order, img, totalAmount }) => {
            return (
              <Order key={productname}>
                <p>{tracing}</p>
                <OrderImg>
                  <img src={img} />
                  {productname}
                </OrderImg>
                <p>{price}</p>
                <OrderBage>{order}</OrderBage>
                <p>{totalAmount}</p>
              </Order>
            );
          }
        )}
      </OrderCard>
    </Ordercart>
  );
}

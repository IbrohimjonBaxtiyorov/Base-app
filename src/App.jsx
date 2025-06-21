import {
  Date,
  Datediv,
  Header,
  HeaderTitle,
  InfoCart,
  OrderConatiner,
  StaticticConatiner,
} from "./GlobalStyles";
import Dashboard from "./layouts/Dashboard";
import HeartIcon from "./assets/Heart.svg";
import GameIcon from "./assets/Game.svg";
import BagIcon from "./assets/Bag.svg";
import WorkIcon from "./assets/Work.svg";
import Info from "./components/Info";
import Chart from "./components/Chart";
import Area from "./components/Area";
import Orders from "./components/Orders";
import Product from "./components/Product";
import arrow from "./assets/orders/Vector.svg";

export default function App() {
  const info = [
    {
      title: "Save Products",
      value: 178,
      img: HeartIcon,
      type: "Heart",
    },
    {
      title: "Stock Products",
      value: 20,
      img: GameIcon,
      type: "Game",
    },
    {
      title: "Sales Products",
      value: 190,
      img: BagIcon,
      type: "Bag",
    },
    {
      title: "Job Applications",
      value: 12,
      img: WorkIcon,
      type: "Work",
    },
  ];

  return (
    <>
      <Dashboard>
        <Header>
          <HeaderTitle>Dashboard </HeaderTitle>
          <Datediv>
            <Date>
              10-06-2021 <img src={arrow} />{" "}
            </Date>
            <Date>
              10-06-2021 <img src={arrow} />{" "}
            </Date>
          </Datediv>
        </Header>
        <InfoCart>
          {info.map(({ title, value, img, type }) => {
            return (
              <Info
                key={title}
                title={title}
                type={type}
                value={value}
                img={img}
              />
            );
          })}
        </InfoCart>
        <StaticticConatiner>
          <Area />
          <Chart />
        </StaticticConatiner>
        <OrderConatiner>
          <Orders />
          <Product />
        </OrderConatiner>
      </Dashboard>
    </>
  );
}

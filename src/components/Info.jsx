import CountUp from "react-countup";
import { Card, Imagediv, Title, Value } from "./Infocard.js";

export default function Info({ title, value, img ,type}) {
  return (
    <Card>
      <Imagediv type={type}>
        <img src={img} />
      </Imagediv>
      <div>
        <Value>
          <CountUp end={value} duration={1.5} separator="," />+
        </Value>
        <Title>{title}</Title>
      </div>
    </Card>
  );
}

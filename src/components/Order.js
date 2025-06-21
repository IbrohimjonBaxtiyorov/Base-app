import styled from "styled-components";
export const Ordercart = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  padding: 25px 25px 17px 25px;
`;
export const OrderCard = styled.div`
  width: 625px;
  border-top: 1px solid rgba(3, 2, 41, 0.05);
  > div:nth-child(even) {
    background-color: #fafafb;
    border-radius: 5px;
  }
`;

export const Order = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderImg = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const OrderBage = styled.div`
  padding: 7px 20px;
  background-color: rgba(38, 192, 226, 0.1);
  color: #26c0e2;
  border-radius: 8px;
`;

export const OrderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h5`
  font-weight: 700;
  font-size: 18px;
  color: #030229;
  opacity: 0.7;
  padding: 0;
  margin: 0;
`;

export const Orderdesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const DescRiption = styled.p`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #030229;
`;

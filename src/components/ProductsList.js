import styled from "styled-components";

export const Container = styled.div`
  width: 365px;
  background-color: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding-bottom: 24px;
  padding-top: 23px;
  &:nth-child(1) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const ProductImage = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 12px;
  background-color: rgba(41, 127, 178, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #030229;
  margin: 0 0 4px 0;
`;

export const Stars = styled.div`
  margin-bottom: 4px;
`;

export const ProductPrice = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #000;
`;

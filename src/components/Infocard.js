import styled from "styled-components";

export const Card = styled.div`
  background: white;
  padding: 28px 71px 28px 31px;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 23px;
`;

export const Title = styled.p`
  opacity: 70%;
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  color: #030229;
`;

export const Value = styled.div`
  opacity: 70%;

  font-size: 22px;
  font-weight: 800;
  line-height: 100%;
  color: #000000;
`;

export const Imagediv = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: ${(props) =>
      props.type === "Heart"
        ? "#5B93FF"
        : props.type === "Game"
        ? "#FFD66B"
        : props.type === "Bag"
        ? "#FF8F6B"
        : props.type === "Work"
        ? "#605BFF"
        : "#f0f0f0"};
    opacity: 0.1;
    z-index: 0;
  }

  img {
    z-index: 1;
    position: relative;
    width: 28px;
    height: 28px;
  }
`;

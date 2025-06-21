import styled from "styled-components";

export const ChartCard = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  padding: 25px 0px 32px 25px;
`;

export const Legend = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 16px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export const ColorDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
`;

export const Image = styled.div`
  padding-right: 25px;
`;

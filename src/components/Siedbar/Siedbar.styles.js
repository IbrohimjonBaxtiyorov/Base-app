import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: ${(props) => (props.open ? "80px" : "218px")};
  transition: width 0.3s ease;
  height: 100vh;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${(props) => (props.open ? "0px" : "0 28px")};
  align-items: ${(props) => (props.open ? "center" : "")};
  margin-top: ${(props) => (props.open ? "18px" : "0px")};
  border-radius: 16px;
  margin-left: 18px;
  height: auto;
  min-height: 100vh;
`;

export const SidebarHeader = styled.div`
  padding-top: ${(props) => (props.open ? "50px" : "35px")};
  display: flex;
  gap: ${(props) => (props.open ? "5px" : "15px")};
  flex-direction: ${(props) => (props.open ? "column-reverse" : "row-reverse")};
  justify-content: ${(props) => (props.open ? "space-between" : "center")};
  align-items: center;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 38px;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.open ? "center" : "")};
  gap: 30px;
`;

export const NavItem = styled.li`
  font-weight: 600;
  opacity: 0.5;
  line-height: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  color: #030229;
  transition: all 0.2s;

  &:hover {
    color: #605bff;
    opacity: 1;
  }
`;

export const Icon = styled.span`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 1rem;
`;

export const SidebarBottom = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.open ? "column" : "")};
  gap: ${(props) => (props.open ? "20px" : "0px")};
  align-items: center;
  justify-content: space-between;
`;

export const Bottomlogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.h5`
  color: #000000;
  font-weight: 600;
  font-size: 12px;
  margin: 0;
  padding: 0;
`;

export const NameDesc = styled.p`
  color: #000000;
  font-weight: 400;
  font-size: 10px;
  opacity: 50%;
  margin: 0;
  padding: 0;
`;
export const NameConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
`;

export const CardWrapper = styled.div`
  background-color: #f5f8ff;
  padding: 40px 20px;
  height: 160px;
  width: 161px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const LampImage = styled.img`
  width: 140px;
  margin-bottom: 30px;
  color: #5b93ff;
  position: absolute;
  margin-top: -70px;
`;

export const UpgradeButton = styled.button`
  background-color: #5b93ff;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 14px;
  padding: 14px 32px;
  cursor: pointer;
  font-size: 14px;
  position: absolute;
  margin-top: 130px;
  &:hover {
    background-color: #4a45e6;
  }
`;

export const Vector = styled.img`
  position: absolute;
  margin-top: 35px;
`;

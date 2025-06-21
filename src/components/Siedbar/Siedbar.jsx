import { useState } from "react";
import {
  SidebarContainer,
  SidebarHeader,
  NavList,
  NavItem,
  ToggleButton,
  Icon,
  Label,
  SidebarBottom,
  Bottomlogo,
  Name,
  NameDesc,
  NameConatiner,
  CardWrapper,
  LampImage,
  UpgradeButton,
  Vector,
} from "./Siedbar.styles.js";
import logo from "../../assets/Base.svg";
import dashboard from "../../assets/Category.svg";
import analiytc from "../../assets/Chart.svg";
import invoice from "../../assets/incoise.svg";
import document from "../../assets/Document.svg";
import calendar from "../../assets/Calendar.svg";
import message from "../../assets/messages.svg";
import notifications from "../../assets/Notification.svg";
import setting from "../../assets/Setting.svg";
import logout from "../../assets/Logout.svg";
import profile from "../../assets/Profile.svg";
import lamp from "../../assets/object.svg";
import vector from "../../assets/Vector.svg";
export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { img: dashboard, text: "Dashboard" },
    { img: analiytc, text: "Analytics" },
    { img: invoice, text: "Invoice" },
    { img: document, text: "Schedule" },
    { img: calendar, text: "Calendar" },
    { img: message, text: "Messages" },
    { img: notifications, text: "Notification" },
    { img: setting, text: "Settings" },
  ];

  return (
    <SidebarContainer open={open}>
      <div>
        <SidebarHeader open={open}>
          <span>Base</span>
          <ToggleButton onClick={() => setOpen(!open)}>
            <img src={logo} alt="logo" />
          </ToggleButton>
        </SidebarHeader>

        <NavList open={open}>
          {navItems.map(({ img, text }) => {
            return (
              <NavItem key={text}>
                <Icon>
                  <img src={img} />
                </Icon>
                {!open && <Label>{text}</Label>}
              </NavItem>
            );
          })}
        </NavList>
      </div>
      {!open && (
        <CardWrapper>
          <LampImage src={lamp} alt="Lamp" />
          <Vector src={vector} alt="" />
          <UpgradeButton>Upgrade Now</UpgradeButton>
        </CardWrapper>
      )}

      <SidebarBottom open={open}>
        <Bottomlogo>
          <img src={profile} width={45} />
          {!open && (
            <NameConatiner>
              <Name>Easin Arafat</Name>
              <NameDesc>Free Account</NameDesc>
            </NameConatiner>
          )}
        </Bottomlogo>
        <img src={logout} width={17} />
      </SidebarBottom>
    </SidebarContainer>
  );
}

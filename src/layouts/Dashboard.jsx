import Sidebar from "../components/Siedbar/Siedbar";
import { Container, MainContent } from "./DashboardLayout";

export default function Dashboard({ children }) {
  return (
    <Container>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </Container>
  );
}

import { ClerkHomePageTable } from "../../components/ClerkPage/ClerkHomePageTable/ClerkHomePageTable";
import { ClerkSidebar } from "../../components/ClerkPage/ClerkSidebar/ClerkSidebar";
import { Header } from "../../components/Header/Header";

export const ClerkPage = () => {
  return (
    <>
      <Header headerText="Clerk Dashboard" />
      <ClerkSidebar />
      <ClerkHomePageTable />
    </>
  );
};

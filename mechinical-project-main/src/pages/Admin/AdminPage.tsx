import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../../components/AdminPage/AdminSidebar/AdminSidebar";
import { Header } from "../../components/Header/Header";

export const AdminPage = () => {
  return (
    <>
      <Header headerText="Admin Dashboard" />
      <AdminSidebar />
      <Outlet />
    </>
  );
};

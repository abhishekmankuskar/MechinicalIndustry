import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClientsTable } from "../../components/AdminPage/AdminContent/AdminClientsTable/ClientsTable";
import { AdminFurnanceTable } from "../../components/AdminPage/AdminContent/AdminFurnanceTable/AdminFurnanceTable";
import { AdminHSNTable } from "../../components/AdminPage/AdminContent/AdminHSNTable/AdminHSNTable";
import { AdminMaterialTable } from "../../components/AdminPage/AdminContent/AdminMaterialTable/AdminMaterialTable";
import { OrderDetailsTable } from "../../components/AdminPage/AdminContent/AdminOrderDetailsTable/OrderDetailsTable";
import { AdminPOPI } from "../../components/AdminPage/AdminContent/AdminPOPI/AdminPOPI";
import { AdminReportsWithGraphs } from "../../components/AdminPage/AdminContent/AdminReportsWithGraphs/AdminReportsWithGraphs";
import { AdminStorageTable } from "../../components/AdminPage/AdminContent/AdminStorageTable/AdminStorageTable";
import { AdminUnitsTable } from "../../components/AdminPage/AdminContent/AdminUnitsTable/AdminUnitsTable";
import { AdminUsersTable } from "../../components/AdminPage/AdminContent/AdminUsersTable/AdminUsersTable";
import ClerkAddPoPage from "../../components/ClerkPage/ClerkAddPoPage/ClerkAddPoPage";
import { ClerkHomePageTable } from "../../components/ClerkPage/ClerkHomePageTable/ClerkHomePageTable";
import { AccountantPage } from "../Accountant/AccountantPage";
import { AdminPage } from "../Admin/AdminPage";
import { ClerkPage } from "../Clerk/ClerkPage";
import { LoginPage } from "../LoginPage/LoginPage";

export const PageRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<AdminPOPI />}></Route>
          <Route path="POPI" element={<AdminPOPI />}></Route>
          <Route path="Clients" element={<ClientsTable />}></Route>
          <Route path="Furnance" element={<AdminFurnanceTable />}></Route>
          <Route path="HSN" element={<AdminHSNTable />}></Route>
          <Route path="Materials" element={<AdminMaterialTable />}></Route>
          <Route path="OrderDetails" element={<OrderDetailsTable />}></Route>
          <Route path="Reports" element={<AdminReportsWithGraphs />}></Route>
          <Route path="Storage" element={<AdminStorageTable />}></Route>
          <Route path="Units" element={<AdminUnitsTable />}></Route>
          <Route path="Users" element={<AdminUsersTable />}></Route>
        </Route>

        <Route path="/clerk" element={<ClerkPage />}>
          <Route index element={<ClerkHomePageTable />}></Route>
          <Route path="Main" element={<ClerkHomePageTable />}></Route>
          <Route path="addpo" element={<ClerkAddPoPage />}></Route>
        </Route>

        <Route path="/accountant" element={<AccountantPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

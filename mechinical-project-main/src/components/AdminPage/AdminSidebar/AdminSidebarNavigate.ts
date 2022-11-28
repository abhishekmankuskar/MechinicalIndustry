import { ClientsTable } from "../AdminContent/AdminClientsTable/ClientsTable";
import { AdminHSNTable } from "../AdminContent/AdminHSNTable/AdminHSNTable";
import { AdminPOPI } from "../AdminContent/AdminPOPI/AdminPOPI";
import { AdminFurnanceTable } from "../AdminContent/AdminFurnanceTable/AdminFurnanceTable";
import { AdminMaterialTable } from "../AdminContent/AdminMaterialTable/AdminMaterialTable";
import { OrderDetailsTable } from "../AdminContent/AdminOrderDetailsTable/OrderDetailsTable";
import { AdminReportsWithGraphs } from "../AdminContent/AdminReportsWithGraphs/AdminReportsWithGraphs";
import { AdminStorageTable } from "../AdminContent/AdminStorageTable/AdminStorageTable";
import { AdminUnitsTable } from "../AdminContent/AdminUnitsTable/AdminUnitsTable";
import { AdminUsersTable } from "../AdminContent/AdminUsersTable/AdminUsersTable";

const adminSidebarNavigate = [
  {
    name: "POPI",
    navigate: "POPI",
    component: AdminPOPI,
  },
  {
    name: "Clients",
    navigate: "Clients",
    component: ClientsTable,
  },
  {
    name: "Furnance",
    navigate: "Furnance",
    component: AdminFurnanceTable,
  },
  {
    name: "HSN",
    navigate: "HSN",
    component: AdminHSNTable,
  },
  {
    name: "Materials",
    navigate: "Materials",
    component: AdminMaterialTable,
  },

  {
    name: "OrderDetails",
    navigate: "OrderDetails",
    component: OrderDetailsTable,
  },
  {
    name: "Reports",
    navigate: "Reports",
    component: AdminReportsWithGraphs,
  },
  {
    name: "Storage",
    navigate: "Storage",
    component: AdminStorageTable,
  },

  {
    name: "Units",
    navigate: "Units",
    component: AdminUnitsTable,
  },
  {
    name: "Users",
    navigate: "User",
    component: AdminUsersTable,
  },
];

export default adminSidebarNavigate;

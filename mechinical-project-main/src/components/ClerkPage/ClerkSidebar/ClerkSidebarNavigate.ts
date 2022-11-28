import { AdminPOPI } from "../../AdminPage/AdminContent/AdminPOPI/AdminPOPI";
import ClerkAddPoPage from "../ClerkAddPoPage/ClerkAddPoPage";
import { ClerkHomePageTable } from "../ClerkHomePageTable/ClerkHomePageTable";

const clerkSidebarNavigate = [
  {
    name: "Main",
    navigate: "Main",
    component: ClerkHomePageTable,
  },
  {
    name: "addpo",
    navigate: "addpo",
    component: ClerkAddPoPage,
  },
];

export default clerkSidebarNavigate;

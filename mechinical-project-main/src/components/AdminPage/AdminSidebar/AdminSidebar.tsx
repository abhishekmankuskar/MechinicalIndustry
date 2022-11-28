import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./AdminSidebar.module.scss";
export const AdminSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.adminSidebar}>
      <button onClick={() => navigate("POPI")}>PO/PI</button>
      <button onClick={() => navigate("Clients")}>Client</button>
      <button onClick={() => navigate("Furnance")}>Furnace</button>
      <button onClick={() => navigate("HSN")}>HSN</button>
      <button onClick={() => navigate("Materials")}>Materials</button>
      <button onClick={() => navigate("OrderDetails")}>Materials</button>
      <button onClick={() => navigate("Reports")}>Reports</button>
      <button onClick={() => navigate("Storage")}>Storage</button>
      <button onClick={() => navigate("Units")}>Units</button>
      <button onClick={() => navigate("Users")}>Users</button>
    </div>
  );
};

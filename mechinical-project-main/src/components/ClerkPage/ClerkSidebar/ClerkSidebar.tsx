import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./ClerkSidebar.module.scss";
export const ClerkSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.adminSidebar}>
      <button onClick={() => navigate("Main")}>Main</button>
      <button onClick={() => navigate("addpo")}>Add PO</button>
    </div>
  );
};

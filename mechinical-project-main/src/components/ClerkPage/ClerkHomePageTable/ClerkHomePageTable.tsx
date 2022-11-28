import React from "react";
import styles from "./ClerkHomePageTable.module.scss";
export const ClerkHomePageTable = () => {
  return (
    <>
      <table className={styles.clerkTable}>
        <tr>
          <th>Client Name</th>
          <th>Order ID</th>
          <th>Total Amount</th>
          <th>Pending Amount</th>
          <th>Amount Status</th>
        </tr>
        <tr>
          <td>Abhishek</td>
          <td>123</td>
          <td>150</td>
          <td>80</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>Amay</td>
          <td>786</td>
          <td>175</td>
          <td>53</td>
          <td>Pending</td>
        </tr>
      </table>
    </>
  );
};

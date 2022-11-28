import React, { useState } from "react";
import styles from "./OrderDetailsTable.module.scss";
export const OrderDetailsTable = () => {
  const [acceptNewOrder, setAcceptNewOrder] = useState(false);
  const [rejectNewOrder, setRejectNewOrder] = useState(false);

  const acceptOrder = () => {
    setAcceptNewOrder(!acceptNewOrder);
  };
  const rejectOrder = () => {
    setRejectNewOrder(!rejectNewOrder);
  };
  return (
    <>
      <h1>Order Requests</h1>
      <table className={styles.orderDetailsTable}>
        <tr>
          <th>Client Name</th>
          <th>Email ID</th>
          <th>Order Details</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>ASM@gmail.com</td>
          <td>
            <button className={styles.printBtn}>Print</button>
          </td>
          <td>
            {" "}
            <button className={styles.acceptBtn} onClick={acceptOrder}>
              Accept
            </button>
            <button className={styles.rejectBtn} onClick={rejectOrder}>
              Reject
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>SBM@gmail.com</td>
          <td>
            <button className={styles.printBtn}>Print</button>
          </td>
          <td>
            {" "}
            <button className={styles.acceptBtn} onClick={acceptOrder}>
              Accept
            </button>
            <button className={styles.rejectBtn} onClick={rejectOrder}>
              Reject
            </button>
          </td>
        </tr>
      </table>

      {acceptNewOrder && (
        <div className={styles.acceptNewOrderModel}>
          <div className={styles.acceptNewOrderPopup}>
            <h2>Are you sure you want to accept?</h2>
            <div className={styles.acceptNewOrderButton}>
              <button className={styles.submitNewOrderPopup}>Yes</button>
              <button
                className={styles.closeNewOrderPopup}
                onClick={acceptOrder}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {rejectNewOrder && (
        <div className={styles.deletetNewOrderModel}>
          <div className={styles.deleteNewOrderPopup}>
            <h2>Are you sure you want to reject?</h2>
            <div className={styles.deleteNewOrderButton}>
              <button className={styles.rejectNewOrder}>Yes</button>
              <button
                className={styles.closeRejectNewOrder}
                onClick={rejectOrder}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

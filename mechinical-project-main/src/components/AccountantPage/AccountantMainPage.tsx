import React, { useState } from "react";
import styles from "./AccountantMainPage.module.scss";
export const AccountantMainPage = () => {
  const [paymentHistory, setPaymentHistory] = useState(false);
  const openPaymentHistory = () => {
    setPaymentHistory(!paymentHistory);
  };
  return (
    <>
      <div className={styles.accountantMainPage}>
        <table className={styles.orderDetailsTable}>
          <tr>
            <th>Client Name</th>
            <th>Order ID</th>
            <th>Payment Status</th>
            <th>Payment History</th>
          </tr>
          <tr>
            <td>Abhishek</td>
            <td>12345</td>
            <td>Complete</td>
            <td>
              <button onClick={openPaymentHistory}>Click Here</button>
            </td>
          </tr>
          <tr>
            <td>
              {/* <button onClick={openPaymentHistory}>Sayee</button> */}
              Sayee
            </td>
            <td>45678</td>
            <td>Pending</td>
            <td>
              <button onClick={openPaymentHistory}>Click Here</button>
            </td>
          </tr>
        </table>
      </div>

      {paymentHistory && (
        <div className={styles.openPaymentHistoryModel}>
          <div className={styles.openPaymentHistoryPopup}>
            {/* <div className={styles.paymentHistorySection}>  */}
            <h2>Payment History</h2>
            <h3>Payment Status : Completed</h3>
            <table className={styles.paymentHistoryTable}>
              <tr>
                <th>Total Amount</th>
                <th>Paid on</th>
              </tr>
              <tr>
                <td>150</td>
                <td>21/10/22</td>
              </tr>
              <tr>
                <td>50</td>
                <td>15/10/22</td>
              </tr>
            </table>
            <input type="number" placeholder="Enter the amount" />
            <button className={styles.submitPaymentBtn}>submit</button>
            <button
              onClick={openPaymentHistory}
              className={styles.closePaymentBtn}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useState } from "react";
import styles from "./AdminHSNTable.module.scss";
export const AdminHSNTable = () => {
  const [newHSN, setNewHSN] = useState(false);
  const [editHSN, setEditHSN] = useState(false);
  const [deleteHSN, setDeleteHSN] = useState(false);

  const addNewHSN = () => {
    setNewHSN(!newHSN);
  };

  const editHSNDetails = () => {
    setEditHSN(!editHSN);
  };

  const deleteHSNDetails = () => {
    setDeleteHSN(!deleteHSN);
  };

  return (
    <>
      <h1>HSN</h1>
      <button className={styles.addHSN} onClick={addNewHSN}>
        Add HSN
      </button>
      <table className={styles.hsnTable}>
        <tr>
          <th>Name</th>
          <th>Email ID</th>
          <th>Contact</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>ASM@gmail.com</td>
          <td>1235678</td>
          <td>
            {" "}
            <button className={styles.editBtn} onClick={editHSNDetails}>
              Edit
            </button>
            <button className={styles.deleteBtn} onClick={deleteHSNDetails}>
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>SBM@gmail.com</td>
          <td>2356635</td>
          <td>
            {" "}
            <button className={styles.editBtn} onClick={editHSNDetails}>
              Edit
            </button>
            <button className={styles.deleteBtn} onClick={deleteHSNDetails}>
              Delete
            </button>
          </td>
        </tr>
      </table>

      {newHSN && (
        <div className={styles.addNewHSNModel}>
          <div className={styles.addNewHSNPopup}>
            <h2>Add New HSN</h2>
            {/* <input type="text" placeholder='Enter Client Name' />
                            <input type="text" placeholder='Enter Email' />
                            <input type="text" placeholder='Enter Contact Number' /> */}
            <button className={styles.submitNewHSN}>Submit</button>
            <button onClick={addNewHSN} className={styles.closeNewHSNPopup}>
              Close
            </button>
          </div>
        </div>
      )}

      {editHSN && (
        <div className={styles.addNewHSNModel}>
          <div className={styles.addNewHSNPopup}>
            <h2>Edit HSN</h2>
            {/* <input type="text" placeholder='Edit Client Name' />
                            <input type="text" placeholder='Edit Email' />
                            <input type="text" placeholder='Edit Contact Number' /> */}
            <button className={styles.submitNewHSN}>Submit</button>
            <button
              onClick={editHSNDetails}
              className={styles.closeNewHSNPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {deleteHSN && (
        <div className={styles.deleteHSNModel}>
          <div className={styles.deleteHSNPopup}>
            <h2>Are you sure you want to delete?</h2>
            <div className={styles.deleteHSNButton}>
              <button className={styles.submitDeleteHSNPopup}>Yes</button>
              <button
                className={styles.closeDeleteHSNPopup}
                onClick={deleteHSNDetails}
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

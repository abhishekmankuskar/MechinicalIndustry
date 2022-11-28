import React, { useState } from "react";
import styles from "./AdminFurnanceTable.module.scss";
export const AdminFurnanceTable = () => {
  const [newFurnance, setNewFurnance] = useState(false);
  const [editFurnance, setEditFurnance] = useState(false);
  const [deleteFurnance, setDeleteFurnance] = useState(false);

  const addNewFurnance = () => {
    setNewFurnance(!newFurnance);
  };

  const editExistingFurnance = () => {
    setEditFurnance(!editFurnance);
  };

  const deleteExistingFurnance = () => {
    setDeleteFurnance(!deleteFurnance);
  };
  return (
    <>
      <h1>Furnance</h1>
      <button className={styles.addFurnance} onClick={addNewFurnance}>
        Add Furnance
      </button>
      <table className={styles.furnanceTable}>
        <tr>
          <th>Client Name</th>
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
            <button className={styles.editBtn} onClick={editExistingFurnance}>
              Edit
            </button>
            <button
              className={styles.deleteBtn}
              onClick={deleteExistingFurnance}
            >
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
            <button className={styles.editBtn} onClick={editExistingFurnance}>
              Edit
            </button>
            <button
              className={styles.deleteBtn}
              onClick={deleteExistingFurnance}
            >
              Delete
            </button>
          </td>
        </tr>
      </table>

      {newFurnance && (
        <div className={styles.addNewFurnanceModel}>
          <div className={styles.addNewFurnancePopup}>
            <h2>Add New Furnance</h2>
            <input type="text" placeholder="Enter Furnance Name" />
            <input type="text" placeholder="Enter Email" />
            <input type="text" placeholder="Enter Contact Number" />
            <button className={styles.submitNewFurnance}>Submit</button>
            <button
              onClick={addNewFurnance}
              className={styles.closeNewFurnancePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {editFurnance && (
        <div className={styles.addNewFurnanceModel}>
          <div className={styles.addNewFurnancePopup}>
            <h2>Edit Furnance</h2>
            <input type="text" placeholder="Edit Furnance Name" />
            <input type="text" placeholder="Edit Email" />
            <input type="text" placeholder="Edit Contact Number" />
            <button className={styles.submitNewFurnance}>Submit</button>
            <button
              onClick={editExistingFurnance}
              className={styles.closeNewFurnancePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {deleteFurnance && (
        <div className={styles.deleteFurnanceModel}>
          <div className={styles.deleteFurnancePopup}>
            <h2>Are you sure you want to delete?</h2>
            <div className={styles.deleteFurnanceButton}>
              <button className={styles.submitDeleteFurnancePopup}>Yes</button>
              <button
                className={styles.closeDeleteFurnancePopup}
                onClick={deleteExistingFurnance}
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

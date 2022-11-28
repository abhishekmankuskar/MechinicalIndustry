import React, { useState } from "react";
import styles from "./AdminStorageTable.module.scss";
export const AdminStorageTable = () => {
  const [addStorage, setAddStorage] = useState(false);
  const [editStorage, setEditStorage] = useState(false);
  const [deleteStorage, setDeleteStorage] = useState(false);

  const addNewStorage = () => {
    setAddStorage(!addStorage);
  };

  const editExistingStorage = () => {
    setEditStorage(!editStorage);
  };

  const deleteExistingStorage = () => {
    setDeleteStorage(!deleteStorage);
  };
  return (
    <>
      <h1>Storage</h1>
      <button className={styles.addStorage} onClick={addNewStorage}>
        Add Storage
      </button>
      <table className={styles.storageTable}>
        <tr>
          <th>Name of Storage</th>
          <th>Building</th>
          <th>Row</th>
          <th>Shelf</th>
          <th>Rack</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>ASM@gmail.com</td>
          <td>345678</td>
          <td>abcde</td>
          <td>fghij </td>
          <td>
            {" "}
            <button className={styles.editBtn} onClick={editExistingStorage}>
              Edit
            </button>
            <button
              className={styles.deleteBtn}
              onClick={deleteExistingStorage}
            >
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>SBM@gmail.com</td>
          <td>4567890</td>
          <td>klmno</td>
          <td>pqrst </td>
          <td>
            {" "}
            <button className={styles.editBtn} onClick={editExistingStorage}>
              Edit
            </button>
            <button
              className={styles.deleteBtn}
              onClick={deleteExistingStorage}
            >
              Delete
            </button>
          </td>
        </tr>
      </table>

      {addStorage && (
        <div className={styles.addStorageModel}>
          <div className={styles.addStoragePopup}>
            <h2>Add New Storage</h2>
            <input type="text" placeholder="Enter Building" />
            <input type="text" placeholder="Enter Furnance Name" />
            <input type="text" placeholder="Enter Row" />
            <input type="text" placeholder="Enter Shell" />
            <input type="text" placeholder="Enter Rack" />
            <button className={styles.submitNewStorage}>Submit</button>
            <button
              onClick={addNewStorage}
              className={styles.closeAddStoragePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {editStorage && (
        <div className={styles.addStorageModel}>
          <div className={styles.addStoragePopup}>
            <h2>Edit Storage</h2>
            <input type="text" placeholder="Edit Building" />
            <input type="text" placeholder="Edit Furnance Name" />
            <input type="text" placeholder="Edit Row" />
            <input type="text" placeholder="Edit Shell" />
            <input type="text" placeholder="Edit Rack" />
            <button className={styles.submitNewStorage}>Submit</button>
            <button
              onClick={editExistingStorage}
              className={styles.closeAddStoragePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {deleteStorage && (
        <div className={styles.deleteStorageModel}>
          <div className={styles.deleteStoragePopup}>
            <h2>Are you sure you want to delete?</h2>
            <div className={styles.deleteStorageButton}>
              <button className={styles.submitDeleteStoragePopup}>Yes</button>
              <button
                className={styles.closeDeleteStoragePopup}
                onClick={deleteExistingStorage}
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

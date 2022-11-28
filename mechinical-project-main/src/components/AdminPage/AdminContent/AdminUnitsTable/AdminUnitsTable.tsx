import React, { useState } from "react";
import styles from "./AdminUnitsTable.module.scss";
export const AdminUnitsTable = () => {
  const [newUnits, setNewUnits] = useState(false);
  const [editUnits, setEditUnits] = useState(false);
  const [deleteUnits, setDeleteUnits] = useState(false);

  const addNewUnits = () => {
    setNewUnits(!newUnits);
  };

  const editExistingUnits = () => {
    setEditUnits(!editUnits);
  };

  const deleteExistingUnits = () => {
    setDeleteUnits(!deleteUnits);
  };
  return (
    <>
      <h1>Units</h1>
      <button className={styles.addUnits} onClick={addNewUnits}>
        Add Units
      </button>
      <table className={styles.unitsTable}>
        <tr>
          <th>Units</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>Data</td>
          <td>
            {" "}
            <button className={styles.editBtn} onClick={editExistingUnits}>
              Edit
            </button>
            <button className={styles.deleteBtn} onClick={deleteExistingUnits}>
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td>data</td>
          <td>
            {" "}
            <button className={styles.editBtn} onClick={editExistingUnits}>
              Edit
            </button>
            <button className={styles.deleteBtn} onClick={deleteExistingUnits}>
              Delete
            </button>
          </td>
        </tr>
      </table>

      {newUnits && (
        <div className={styles.addNewUnitModel}>
          <div className={styles.addNewUnitPopup}>
            <h2>Add New Unit's</h2>
            <input type="text" placeholder="Enter Unit" />
            <button className={styles.submitNewUnit}>Submit</button>
            <button onClick={addNewUnits} className={styles.closeNewUnitPopup}>
              Close
            </button>
          </div>
        </div>
      )}

      {editUnits && (
        <div className={styles.addNewUnitModel}>
          <div className={styles.addNewUnitPopup}>
            <h2>Edit Unit's</h2>
            <input type="text" placeholder="Edit Unit" />
            <button className={styles.submitNewUnit}>Submit</button>
            <button
              onClick={editExistingUnits}
              className={styles.closeNewUnitPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {deleteUnits && (
        <div className={styles.deleteUnitsModel}>
          <div className={styles.deleteUnitsPopup}>
            <h2>Are you sure you want to delete?</h2>
            <div className={styles.deleteUnitsButton}>
              <button className={styles.submitDeleteUnitsPopup}>Yes</button>
              <button
                className={styles.closeDeleteUnitsPopup}
                onClick={deleteExistingUnits}
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

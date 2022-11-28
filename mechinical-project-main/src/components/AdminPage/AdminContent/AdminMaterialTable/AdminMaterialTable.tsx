import React, { useState } from "react";
import styles from "./AdminMaterialTable.module.scss";
export const AdminMaterialTable = () => {
  const [newMaterials, setNewMaterils] = useState(false);
  const [editMaterials, setEditMaterials] = useState(false);
  const [deleteMaterials, setDeleteMaterials] = useState(false);

  const addNewMtaerials = () => {
    setNewMaterils(!newMaterials);
  };

  const editMaterialsDetails = () => {
    setEditMaterials(!editMaterials);
  };

  const deleteMaterialsDetails = () => {
    setDeleteMaterials(!deleteMaterials);
  };
  return (
    <>
      <h1>Materials</h1>
      <button className={styles.addMaterial} onClick={addNewMtaerials}>
        Add Material
      </button>
      <table className={styles.materialsTable}>
        <tr>
          <th>Type of Material</th>
          <th>Rate of Material</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>ASM@gmail.com</td>
          <td>
            <button className={styles.editBtn} onClick={editMaterialsDetails}>
              Edit
            </button>
            <button
              className={styles.deleteBtn}
              onClick={deleteMaterialsDetails}
            >
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>SBM@gmail.com</td>
          <td>
            <button className={styles.editBtn} onClick={editMaterialsDetails}>
              Edit
            </button>
            <button
              className={styles.deleteBtn}
              onClick={deleteMaterialsDetails}
            >
              Delete
            </button>
          </td>
        </tr>
      </table>

      {newMaterials && (
        <div className={styles.addNewMaterialsModel}>
          <div className={styles.addNewMaterialsPopup}>
            <h2>Add New Materials</h2>

            <button className={styles.submitNewMaterials}>Submit</button>
            <button
              onClick={addNewMtaerials}
              className={styles.closeNewMaterialsPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {editMaterials && (
        <div className={styles.addNewMaterialsModel}>
          <div className={styles.addNewMaterialsPopup}>
            <h2>Edit Materials</h2>

            <button className={styles.submitNewMaterials}>Submit</button>
            <button
              onClick={editMaterialsDetails}
              className={styles.closeNewMaterialsPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {deleteMaterials && (
        <div className={styles.deleteMaterialsModel}>
          <div className={styles.deleteMaterialsPopup}>
            <h2>Are you sure you want to delete?</h2>
            <div className={styles.deleteMaterialsButton}>
              <button className={styles.submitDeleteMaterialsPopup}>Yes</button>
              <button
                className={styles.closeDeleteMaterialsPopup}
                onClick={deleteMaterialsDetails}
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

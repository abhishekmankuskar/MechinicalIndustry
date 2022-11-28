import React, { useState } from "react";
import styles from "./AdminUsersTable.module.scss";
export const AdminUsersTable = () => {
  const [newUsers, setNewUsers] = useState(false);
  const [editUsers, setEditUsers] = useState(false);
  const [deleteUsers, setDeleteUsers] = useState(false);

  const addNewUsers = () => {
    setNewUsers(!newUsers);
  };

  const editExistingUsers = () => {
    setEditUsers(!editUsers);
  };

  const deleteExistingUsers = () => {
    setDeleteUsers(!deleteUsers);
  };
  return (
    <>
      <h1>Users</h1>
      <button className={styles.addUsers} onClick={addNewUsers}>
        Add Users
      </button>
      <table className={styles.usersTable}>
        <tr>
          <th>Client Name</th>
          <th>Email ID</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>ASM@gmail.com</td>
          <td>Don't know</td>
          <td>
            <button className={styles.editBtn} onClick={editExistingUsers}>
              Edit
            </button>
            <button className={styles.deleteBtn} onClick={deleteExistingUsers}>
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>SBM@gmail.com</td>
          <td>Don't know</td>
          <td>
            {" "}
            <button className={styles.editBtn} onClick={editExistingUsers}>
              Edit
            </button>
            <button className={styles.deleteBtn} onClick={deleteExistingUsers}>
              Delete
            </button>
          </td>
        </tr>
      </table>

      {newUsers && (
        <div className={styles.addNewUsersModel}>
          <div className={styles.addNewUsersPopup}>
            <h2>Add New User's</h2>
            <input type="text" placeholder="Enter  UserName" />
            <input type="text" placeholder="Enter Email" />
            <select>
              <option value="0">Select Role</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <button className={styles.submitNewUsers}>Submit</button>
            <button onClick={addNewUsers} className={styles.closeNewUsersPopup}>
              Close
            </button>
          </div>
        </div>
      )}

      {editUsers && (
        <div className={styles.addNewUsersModel}>
          <div className={styles.addNewUsersPopup}>
            <h2>Add New User's</h2>
            <input type="text" placeholder="Edit UserName" />
            <input type="text" placeholder="Edit Email" />
            <select>
              <option>Select Role</option>
              <option value="0">1</option>
              <option value="1">2</option>
              <option value="2">3</option>
            </select>
            <button className={styles.submitNewUsers}>Submit</button>
            <button
              onClick={editExistingUsers}
              className={styles.closeNewUsersPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {deleteUsers && (
        <div className={styles.deleteUsersModel}>
          <div className={styles.deleteUsersPopup}>
            <h2>Are you sure you want to delete?</h2>
            <div className={styles.deleteUsersButton}>
              <button className={styles.submitDeleteUsersPopup}>Yes</button>
              <button
                className={styles.closeDeleteUsersPopup}
                onClick={deleteExistingUsers}
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

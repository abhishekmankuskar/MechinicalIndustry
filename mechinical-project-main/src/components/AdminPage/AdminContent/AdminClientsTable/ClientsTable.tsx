import React, { useEffect, useState } from "react";
import { getFormData } from "../../../../services/http.services";
import http from "../../../../services/httpMethod";
import styles from "./ClientsTable.module.scss";
export const ClientsTable = () => {
  const [newCLient, setNewClient] = useState(false);
  const [editClient, setEditClient] = useState(false);
  const [deleteClient, setDeleteClient] = useState(false);
  const [data, setData] = useState<any>();

  const addNewClient = () => {
    setNewClient(!newCLient);
  };

  const getClients = async () => {
    const response = await http.get("customer/getAllCustomer");
    console.log(response);
    setData(response.data);
  };

  useEffect(() => {
    getClients();
  }, []);

  const editClientDetails = () => {
    setEditClient(!editClient);
  };

  const deleteClientDetails = () => {
    setDeleteClient(!deleteClient);
  };

  const addNewClientForm = (e: HTMLFormElement) => {
    const formdata = getFormData(e.currentTarget);
    console.log(formdata);
    const response = http.post("customer/addCustomer", formdata);
    console.log(response);
  };
  return (
    <>
      <button className={styles.addClient} onClick={addNewClient}>
        Add Client
      </button>
      <table>
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Email ID</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        {data &&
          data.map((client: any) => {
            return (
              <tbody>
                <tr>
                  <td>{client.customerName}</td>
                  <td>{client.email}</td>
                  <td>{client.contact}</td>
                  <td>
                    {" "}
                    <button
                      className={styles.editBtn}
                      onClick={editClientDetails}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.deleteBtn}
                      onClick={deleteClientDetails}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
      {/* <table className={styles.clientsTable}>
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
            <button className={styles.editBtn} onClick={editClientDetails}>
              Edit
            </button>
            <button className={styles.deleteBtn} onClick={deleteClientDetails}>
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>SBM@gmail.com</td>
          <td>2356635</td>
          <td>
            <button className={styles.editBtn} onClick={editClientDetails}>
              Edit
            </button>
            <button className={styles.deleteBtn} onClick={deleteClientDetails}>
              Delete
            </button>
          </td>
        </tr>
      </table> */}

      {newCLient && (
        <div className={styles.addNewClientModel}>
          <div className={styles.addNewClientPopup}>
            <h2>Add New Client</h2>
            <form onSubmit={(e) => addNewClientForm}>
              <input type="text" name="name" placeholder="Enter Client Name" />
              <input type="email" name="email" placeholder="Enter Email" />
              <input
                type="number"
                name="number"
                placeholder="Enter Contact Number"
              />
              <button type="submit" className={styles.submitNewClient}>
                Submit
              </button>
              <button
                onClick={addNewClient}
                className={styles.closeNewCLientPopup}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
      {editClient && (
        <div className={styles.editClientsModel}>
          <div className={styles.editClientsPopup}>
            <h2>Add New Client</h2>
            <input type="text" placeholder="Edit Client Name" />
            <input type="text" placeholder="Edit Email" />
            <input type="text" placeholder="Edit Contact Number" />
            <button className={styles.submitEditedClient}>Submit</button>
            <button
              onClick={editClientDetails}
              className={styles.closeClientsEditPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {deleteClient && (
        <div className={styles.deleteClientsModel}>
          <div className={styles.deleteClientsPopup}>
            <h2>Are you sure you want to delete?</h2>
            <div className={styles.deleteClientsButton}>
              <button className={styles.submitDeleteClientsPopup}>Yes</button>
              <button
                className={styles.closeDeleteCLientsPopup}
                onClick={deleteClientDetails}
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

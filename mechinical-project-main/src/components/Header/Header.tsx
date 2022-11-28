import React, { useState } from "react";
import http from "../../services/httpMethod";
import styles from "./Header.module.scss";
export const Header = ({ headerText }: any) => {
  const [adminProfile, setAdminProfile] = useState(false);
  const [adminResetPassword, setAdminResetPassword] = useState(false);
  const openAdminProfile = () => {
    setAdminProfile(!adminProfile);
  };

  const openadminProfileResetPasswordModel = () => {
    if (adminProfile) {
      setAdminResetPassword(!adminResetPassword);
    } else {
      setAdminProfile(adminProfile);
    }
  };

  return (
    <>
      <header className={styles.adminHeader}>
        <h2>{headerText}</h2>
        <button className={styles.adminProfile} onClick={openAdminProfile}>
          Profile
        </button>
        <button className={styles.adminPageLogout}>Logout</button>
      </header>
      {adminProfile && (
        <div className={styles.adminprofileModel}>
          <div className={styles.adminprofilePopup}>
            <h1>Profile</h1>
            <h4>Name : Abhishek Mankuskar</h4>
            <h4>Email : mankuskarabhi2@gmail.com</h4>
            <h4>Address : latur</h4>
            <h4>Contact : 7387024822</h4>
            <button
              className={styles.resetAdminPasswordBtn}
              onClick={openadminProfileResetPasswordModel}
            >
              Reset Password
            </button>
            <button
              onClick={openAdminProfile}
              className={styles.closeAdminProfile}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {adminResetPassword && (
        <div className={styles.adminResetPaswordModule}>
          <div className={styles.adminResetPasswordPopup}>
            <input type="password" placeholder="Enter your old password" />
            <input type="password" placeholder="Enter your new password" />
            <input type="password" placeholder="Renter your new password" />
            <button className={styles.checkAdminResetedPassword}>check</button>
            <button
              onClick={openadminProfileResetPasswordModel}
              className={styles.closeAdminResetPasswordModel}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

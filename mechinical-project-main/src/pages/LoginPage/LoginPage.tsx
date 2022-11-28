import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../services/httpMethod";

import styles from "../LoginPage/LoginPage.module.scss";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState(false);
  const forgotPassword = () => {
    setPassword(!password);
  };

  const loginHandler = async (values: any) => {
    const postLoginData = await http.post("auth/login", values);

    if (postLoginData.data) {
      console.log(postLoginData.data);
      if (
        postLoginData.data.roleId === "0ed0971f-73e0-4221-b6c0-c50c96dcb07e"
      ) {
        navigate("/accountant");
      } else if (
        postLoginData.data.roleId === "c298e02b-8bf5-4f55-b268-a160fcd2de84"
      ) {
        navigate("/admin");
      } else if (
        postLoginData.data.roleId === "504d4500-5423-4aa9-bc4b-79e4f2871829"
      ) {
        navigate("/clerk");
      }
    }
  };

  return (
    <div className={styles.loginPage}>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(credentials) => {
          loginHandler(credentials);
        }}
      >
        <Form className={styles.loginPageForm}>
          <h1>Login</h1>
          <Field
            name="username"
            type="text"
            placeholder="Enter your Username"
            className={styles.loginPageUsername}
          />
          <Field
            name="password"
            type="password"
            placeholder="Enter your Password"
            className={styles.loginPagePassword}
          />
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
          <button
            onClick={forgotPassword}
            className={styles.forgotPasswordButton}
          >
            Forgot Password
          </button>
        </Form>
      </Formik>

      {password && (
        <div className={styles.openForgotPasswordPage}>
          <Formik
            initialValues={{ email: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form className={styles.forgotPasswordForm}>
              <h1>Forgot Password</h1>
              <Field name="email" type="text" placeholder="Enter your Email" />

              <button type="submit" className={styles.submitNewPasswordBtn}>
                Submit
              </button>
              <button
                className={styles.closeForgotPasswordModule}
                onClick={forgotPassword}
              >
                Close
              </button>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

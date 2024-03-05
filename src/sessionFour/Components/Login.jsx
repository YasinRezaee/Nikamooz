import React from "react";
import login from "../GlobalData/login.png";
import "../GlobalData/login-style.css";
import { FaRegUser, FaKey } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          if (values.email === "test@gmail.com" && values.password === "123") {
            const user = {
              userId: "uuid",
              userName: "Yasin",
              fullName: "Yasin Rezaei",
              token: "efhldch;546lkwesc;FL WESJl574365746wWSL;lwsj;oIWJOij",
            };
            //local storage
            // localStorage.setItem("key", "value")
            localStorage.setItem("user", JSON.stringify(user));
            //redirect to dashboard page
            navigate("/");
          } else {
            alert("error 404")
          }

          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <div className="container h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="user_card">
              <div className="d-flex justify-content-center">
                <div className="brand_logo_container">
                  <img src={login} className="brand_logo" alt="Logo" />
                </div>
              </div>
              <div className="d-flex justify-content-center form_container">
                <Form>
                  <div className="input-group mb-3">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i>
                          <FaRegUser />
                        </i>
                      </span>
                    </div>
                    <Field
                      type="email"
                      name="email"
                      className="form-control input_user"
                      placeholder="نام کاربری"
                    />
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i>
                          <FaKey />
                        </i>
                      </span>
                    </div>
                    <Field
                      type="password"
                      name="password"
                      className="form-control input_pass"
                      placeholder="رمز عبور"
                    />
                    <ErrorMessage name="password" component="div" />
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customControlInline"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customControlInline"
                      >
                        مرا به خاطر بسپار
                      </label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3 login_container">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      name="button"
                      className="btn login_btn"
                    >
                      ورود
                    </button>
                  </div>
                </Form>
              </div>

              <div className="mt-4">
                <div className="d-flex justify-content-center links">
                  آیا اکانت نداری؟
                  <a href="#" className="ml-2">
                    ثبت نام 
                  </a>
                </div>
                <div className="d-flex justify-content-center links">
                  <a href="#">آیا پسورد خود را فراموش کرده اید؟</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;

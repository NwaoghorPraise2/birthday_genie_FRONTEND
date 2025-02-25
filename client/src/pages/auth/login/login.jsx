import "./login.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../components/reusable/input/input";
import Button from "../../../components/reusable/button/button";
import AuthBgBox from "../../../components/reusable/authBgBox/authBgBox";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    let error = "";
    if (name === "email" && !validateEmail(value)) {
      error = "Invalid email address";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isFormValid =
    validateEmail(formData.email) && formData.password.trim() !== "";

  return (
    <div className="Login">
      <div className="form_box">
        <form>
          <div className="logo">
            <img src="/imgs/logo.png" alt="logo" />
            <span>Birthday</span>
          </div>
          <p>Hi there, Welcome Back to Birthday Genie!</p>
          <div className="form_fields">
            <Input
              type="email"
              label="Email"
              placeholder="examplemail@email.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Input
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
            <div className="btn_group">
              <Button
                fullWidth
                primary={isFormValid}
                disabled={!isFormValid}
                text="Proceed"
              />
              <div className="divider">
                <span></span>
                Or
                <span></span>
              </div>
              <Button fullWidth outline text="Continue with Google" />
            </div>
          </div>
          <p className="login_option">
            <Link to="/auth/forgot_password">Forgot Password?</Link>
          </p>
          <p className="login_option">
            Don’t have an account? <Link to="/auth/signup">Sign Up</Link>
          </p>
        </form>
      </div>
      <AuthBgBox />
    </div>
  );
};

export default Login;

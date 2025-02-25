import "./signup.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../components/reusable/input/input";
import Button from "../../../components/reusable/button/button";
import AuthBgBox from "../../../components/reusable/authBgBox/authBgBox";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    let error = "";
    if (name === "name" && value.trim() === "") {
      error = "Name is required";
    } else if (name === "email" && !validateEmail(value)) {
      error = "Invalid email address";
    } else if (name === "password" && !validatePassword(value)) {
      error = "Password must be at least 12 characters, include an uppercase letter, a lowercase letter, a number, and a special character.";
    } else if (name === "confirmPassword" && value !== formData.password) {
      error = "Passwords do not match";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    validateEmail(formData.email) &&
    validatePassword(formData.password) &&
    formData.password === formData.confirmPassword;

  return (
    <div className="Signup">
      <div className="form_box">
        <form>
          <div className="logo">
            <img src="/imgs/logo.png" alt="logo" />
            <span>Birthday</span>
          </div>
          <p>Sign up to Birthday Genie Today</p>
          <div className="form_fields">
            <Input
              type="text"
              label="Name"
              placeholder="Enter Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
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
            <Input
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
            <div className="btn_group">
              <Button fullWidth primary={isFormValid} disabled={!isFormValid} text="Proceed" />
              <div className="divider">
                <span></span>
                Or
                <span></span>
              </div>
              <Button fullWidth outline text="Continue with Google" />
            </div>
          </div>
          <p className="login_option">
            Already have an account? <Link to="/auth/login">Login</Link>
          </p>
        </form>
      </div>
      <AuthBgBox />
    </div>
  );
};

export default Signup;

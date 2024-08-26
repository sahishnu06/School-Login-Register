import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegistrationScreen.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    organizationType: "",
    country: "",
    countryCode: "",
    state: "",
    organizationName: "",
    address: "",
    postalCode: "",
    city: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleClear = () => {
    setFormData({
      organizationType: "",
      country: "",
      countryCode: "",
      state: "",
      organizationName: "",
      address: "",
      postalCode: "",
      city: "",
      email: "",
      contactNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="body">
      <img
        src={require("../assets/images/Vectorimg22 (1).png")}
        className="image1"
        alt="Background1"
      />
      <div className="logo">
        LOGO
      </div>

      <div className="parent-container">
        <div className="registration-container">
          <h1>Register Your Organization Today</h1>
          <h2>Country Information*</h2>
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="grid-container">
              <div className="form-group">
                <label>Organization Type</label>
                <select
                  name="organizationType"
                  onChange={handleChange}
                  value={formData.organizationType}
                >
                  <option value="">Select</option>
                  <option value="College">College</option>
                  <option value="School">School</option>
                </select>
              </div>

              <div className="form-group">
                <label>Organization Name</label>
                <input
                  type="text"
                  name="organizationName"
                  onChange={handleChange}
                  value={formData.organizationName}
                />
              </div>

              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  onChange={handleChange}
                  value={formData.country}
                />
              </div>

              <div className="form-group">
                <label>Country Code</label>
                <input
                  type="text"
                  name="countryCode"
                  onChange={handleChange}
                  value={formData.countryCode}
                />
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  value={formData.address}
                />
              </div>

              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  onChange={handleChange}
                  value={formData.city}
                />
              </div>

              <div className="form-group">
                <label>State/Province</label>
                <input
                  type="text"
                  name="state"
                  onChange={handleChange}
                  value={formData.state}
                />
              </div>

              <div className="form-group">
                <label>Postal/Zip Code</label>
                <input
                  type="text"
                  name="postalCode"
                  onChange={handleChange}
                  value={formData.postalCode}
                />
              </div>
            </div>
            <h2>Other Information*</h2>
            <div className="grid-container2">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>

              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="text"
                  name="contactNumber"
                  onChange={handleChange}
                  value={formData.contactNumber}
                />
              </div>
              <div></div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                />
              </div>
            </div>

            <div className="form-buttons">
              <button type="button" onClick={handleClear}>
                Clear
              </button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        <img
          src={require("../assets/images/aStudent.png")}
          className="image2"
          alt="student"
        />
        <div className="circle">
          <p className="text">
            <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default RegistrationForm;

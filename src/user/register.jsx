import React, { useState } from "react";
import { validateRegister, passwordStrength } from "./validation";
import MailIcon from "../../img/mail.svg";
import PassIcon from "../../img/passkey.svg";
import PersonIcon from "../../img/person.svg";

const Register = ({ show, onClose, onLogin }) => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    emailOrPhone: "",
    country: "",
    gender: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [passwordLevel, setPasswordLevel] = useState("");

  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({ ...formData, [name]: value });

  setErrors((prev) => ({ ...prev, [name]: "" }));

  if (name === "password") {
    setPasswordLevel(passwordStrength(value));
  }
};

  const nextStep = () => {
    const { errors, } = validateRegister(formData);
    // Step-specific validation
    if (
      (step === 1 && !errors.firstName && !errors.lastName && !errors.username) ||
      (step === 2 && !errors.emailOrPhone) ||
      (step === 3 && !errors.country && !errors.gender && !errors.birthDate)
    ) {
      setStep(step + 1);
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { errors, valid } = validateRegister(formData);
    setErrors(errors);
    if (valid) {
      alert("Registration successful!");
      console.log(formData);
      onClose();
    }
  };

  return (
    <section
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[1000] flex justify-center items-center ${
        show ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white w-11/12 max-w-[900px] h-[700px] rounded-2xl shadow-lg overflow-hidden flex relative">
          <span
            className="absolute top-2 right-5 text-3xl cursor-pointer text-gray-700"
            onClick={onClose}
          >
            &times;
          </span>
        {/* Left -> Form */}
        <form className="w-1/2 flex flex-col justify-center items-start gap-4 p-10 relative" onSubmit={handleSubmit}>

          <h2 className="text-2xl font-bold mb-4" >Register</h2>

          {/* Step 1: Name & Username */}
          {step === 1 && (
            <>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="FirstName" className="text-sm font-medium text-[#333]">First Name</label>
                <div className="flex w-full items-center">
                  <div className="flex justify-center items-center bg-purple-700 p-3 rounded-l-lg">
                  <img src={PersonIcon} alt="" className="w-6 h-6" />
                          </div>
              <input
                type="text"
                name="firstName"
                id="FirstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="flex-grow border-none bg-[rgba(241,166,140,0.441)] rounded-r-lg px-4 py-3"
              />
                </div>

                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>

              <div className="w-full flex flex-col gap-2">
            <label htmlFor="LastName" className="text-sm font-medium text-[#333]">Last Name</label>
            <div className="flex w-full items-center">
              <div className="flex justify-center items-center bg-purple-700 p-3 rounded-l-lg">
                <img src={PersonIcon} alt="" className="w-6 h-6" />
              </div>
              <input
                type="text"
                name="lastName"
                id="LastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="flex-grow border-none bg-[rgba(241,166,140,0.441)] rounded-r-lg px-4 py-3"
              />
              </div>

              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>

              <div className="w-full flex flex-col gap-2">
            <label htmlFor="UserName" className="text-sm font-medium text-[#333]">User Name</label>
            <div className="flex w-full items-center">
              <div className="flex justify-center items-center bg-purple-700 p-3 rounded-l-lg">
                <img src={PersonIcon} alt="" className="w-6 h-6" />
              </div>
              <input
                type="text"
                name="username"
                id="UserName"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="flex-grow border-none bg-[rgba(241,166,140,0.441)] rounded-r-lg px-4 py-3"
              />
              </div>

              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
              </div>

              <button type="button" onClick={nextStep} className="w-full py-3 mt-4 bg-blue-500 text-white rounded-lg">
                Next
              </button>
            </>
          )}

          {/* Step 2: Email */}
          {step === 2 && (
            <>
              <div className="flex w-full items-center">
                <div className="flex justify-center items-center bg-purple-700 p-3 rounded-l-lg">
                  <img src={MailIcon} alt="Mail" className="w-6 h-6" />
                </div>
                <input
                  type="text"
                  name="emailOrPhone"
                  placeholder="Email or Phone"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  className="flex-grow border-none bg-[rgba(241,166,140,0.441)] rounded-r-lg px-4 py-3"
                />
              </div>
              {errors.emailOrPhone && <p className="text-red-500 text-sm">{errors.emailOrPhone}</p>}

<div className="flex justify-between mt-4 w-full">
  <button
    type="button"
    onClick={prevStep}
    className="px-4 py-2 bg-gray-400 text-white rounded-lg"
  >
    Back
  </button>

  <button
    type="button"
    onClick={nextStep}
    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
  >
    Next
  </button>
</div>

            </>
          )}

          {/* Step 3: Country, Gender, BirthDate */}
          {step === 3 && (
            <>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border-none bg-[rgba(241,166,140,0.441)] rounded-lg px-4 py-3"
              />
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border-none bg-[rgba(241,166,140,0.441)] rounded-lg px-4 py-3"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}

              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full border-none bg-[rgba(241,166,140,0.441)] rounded-lg px-4 py-3"
              />
              {errors.birthDate && <p className="text-red-500 text-sm">{errors.birthDate}</p>}

<div className="flex justify-between mt-4 w-full">
  <button
    type="button"
    onClick={prevStep}
    className="px-4 py-2 bg-gray-400 text-white rounded-lg"
  >
    Back
  </button>

  <button
    type="button"
    onClick={nextStep}
    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
  >
    Next
  </button>
</div>

            </>
          )}

          {/* Step 4: Password */}
          {step === 4 && (
            <>
              <div className="flex flex-col gap-1 relative">
  <label htmlFor="Password" className="text-sm font-medium text-[#333]">Password</label>
  
  <div className="relative w-full flex items-center">
    <div className="flex justify-center items-center bg-purple-700 p-3 rounded-l-lg">
      <img src={PersonIcon} alt="" className="w-6 h-6" />
    </div>
    
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      id="Password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      className="flex-grow border-none bg-[rgba(241,166,140,0.441)] rounded-r-lg px-4 py-3"
    />

    <div
      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-black"
      onClick={() => setShowPassword(!showPassword)}
    >
      <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
    </div>
  </div>

{formData.password && (
    <div className="w-full h-2 mt-1 rounded-full bg-gray-300 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-300 ${
          passwordLevel === "Weak"
            ? "bg-red-500 w-1/3"
            : passwordLevel === "Good"
            ? "bg-yellow-400 w-2/3"
            : passwordLevel === "Excellent"
            ? "bg-green-500 w-full"
            : "bg-red-200 w-1/4"
        }`}
      ></div>
    </div>
  )}

  {/* Validation error */}
  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
</div>

              <div className="flex flex-col gap-1 relative mt-2">
  <label htmlFor="ConfirmPassword" className="text-sm font-medium text-[#333]">Confirm Password</label>

  <div className="relative w-full flex items-center">
    <div className="flex justify-center items-center bg-purple-700 p-3 rounded-l-lg">
      <img src={PassIcon} alt="" className="w-6 h-6" />
    </div>

    <input
      type={showConfirmPassword ? "text" : "password"}
      name="confirmPassword"
      id="ConfirmPassword"
      placeholder="Confirm Password"
      value={formData.confirmPassword}
      onChange={handleChange}
      className="flex-grow border-none bg-[rgba(241,166,140,0.441)] rounded-r-lg px-4 py-3"
    />

    <div
      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-black"
      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    >
      <i className={`fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
    </div>
  </div>

  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
</div>

<div className="flex justify-between mt-4 w-full">
  <button
    type="button"
    onClick={prevStep}
    className="px-4 py-2 bg-gray-400 text-white rounded-lg"
  >
    Back
  </button>

  <button
    type="submit"
    className="px-4 py-2 bg-green-500 text-white rounded-lg"
  >
    Create Account
  </button>
</div>


            </>
          )}
        </form>

        {/* Right -> Welcome */}
        <div className="w-1/2 bg-gradient-to-br from-[#6a11cb] to-[#2575fc] flex flex-col justify-center items-center p-10 gap-6 rounded-l-[200px]">
          <h2 className="text-white text-2xl font-bold">Welcome!</h2>
          <p className="text-white">Already have an account?</p>
          <button
            type="button"
            className="w-[250px] py-3 rounded-lg text-white font-bold text-[16px] cursor-pointer transition-all duration-500 bg-gradient-to-tr from-[#6a11cb] to-[#2575fc] hover:from-[#2575fc] hover:to-[#6a11cb]"
            onClick={onLogin}
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;

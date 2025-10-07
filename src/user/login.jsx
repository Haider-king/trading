import React, { useState } from "react";
import MailIcon from "../../img/mail.svg";
import PassIcon from "../../img/passkey.svg";
import { validateLogin } from "./validation"; 

const Login = ({ show, onClose }) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { errors, valid } = validateLogin({ emailOrPhone, password });
    setErrors(errors);
    if (valid) {
      alert("Login successful!");
      console.log({ emailOrPhone, password });
      onClose();
    }
  };

  const handleEmailChange = (e) => {
  setEmailOrPhone(e.target.value);
  setErrors((prev) => ({ ...prev, emailOrPhone: "" })); 
};

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
  setErrors((prev) => ({ ...prev, password: "" })); 
};


  return (
<section
  className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[1000] flex justify-center items-center ${
    show ? "flex" : "hidden"
  }`}
>
  <div className="bg-white w-11/12 max-w-[900px] h-[600px] rounded-2xl shadow-lg overflow-hidden flex relative">

    {/* Left -> Welcome */}
    <div className="w-1/2 bg-gradient-to-br from-[#6a11cb] to-[#2575fc] flex flex-col justify-center items-center p-10 gap-6 rounded-r-[200px]">
      <h2 className="text-white text-2xl font-bold">Hello, Welcome!</h2>
      <p className="text-white">Don't have an account?</p>
      <button
        type="button"
        className="w-[250px] py-3 rounded-lg text-white font-bold text-[16px] cursor-pointer transition-all duration-500 bg-gradient-to-tr from-[#6a11cb] to-[#2575fc] hover:from-[#2575fc] hover:to-[#6a11cb]"
        onClick={onClose}
      >
        Register
      </button>
    </div>

    {/* Right -> Form */}
    <form className="w-1/2 flex flex-col justify-center items-start gap-4 p-10 relative" onSubmit={handleSubmit}>
      <span
        className="absolute top-5 right-5 text-3xl cursor-pointer text-gray-700"
        onClick={onClose}
      >
        &times;
      </span>

      <h2 className="text-2xl font-bold mb-4">Login</h2>

      {/* Email or Phone */}
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="emailOrPhone" className="text-sm font-medium text-[#333]">Email or Phone</label>
        <div className="flex w-full items-center">
          <div className="flex justify-center items-center bg-purple-700 p-3 rounded-l-lg">
            <img src={MailIcon} alt="Mail" className="w-6 h-6" />
          </div>
          <input
            type="text"
            id="emailOrPhone"
            placeholder="Email or Phone"
            value={emailOrPhone}
            onChange={handleEmailChange}
            className="flex-grow border-none bg-[rgba(241,166,140,0.441)] rounded-r-lg px-4 py-3"
          />
        </div>
        {errors.emailOrPhone && <p className="text-red-500 text-sm">{errors.emailOrPhone}</p>}
      </div>

      {/* Password */}
      <div className="w-full flex flex-col gap-2 relative">
        <label htmlFor="password" className="text-sm font-medium text-[#333]">Password</label>
        <div className="flex w-full items-center relative">
          <div className="flex justify-center items-center bg-purple-700 p-3 rounded-l-lg">
            <img src={PassIcon} alt="Password" className="w-6 h-6" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="flex-grow border-none bg-[rgba(241,166,140,0.441)] rounded-r-lg px-4 py-3"
          />
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-black"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
          </div>
        </div>
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      <button
        type="submit"
        className="w-[300px] py-3 mt-4 border-none rounded-lg text-white font-bold text-[16px] cursor-pointer transition-all duration-500 bg-gradient-to-tr from-[#6a11cb] to-[#2575fc] hover:from-[#2575fc] hover:to-[#6a11cb]"
      >
        Login
      </button>
    </form>
  </div>
</section>

  );
};

export default Login;

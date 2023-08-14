import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import { json } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((email, name, password)) {
      fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify({ name, email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          
          navigate("/");
        })
        .catch((error) => console.log(error.message));
    }
    else{
      console.log('enter your credentials') //Need a toast container here
    }
  };
  return (
    <>
    <ToastContainer />
    <div className="flex justify-center flex-col items-center h-[80vh] ">
      <h1 className="font-bold text-[20px] text-center text-purple-800">
        Create an account
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <label className="block font-medium text-gray-700 mb-2">Name:</label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="block font-medium text-gray-700 mb-2">Email:</label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="block font-medium text-gray-700 mb-2 mt-4">
          Password:
        </label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-baseline">
          <button
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 mt-4"
            type="submit"
          >
            Signup
          </button>
          <button
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 mt-4 mx-2"
            onClick={() => {
              navigate("/login-page");
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Signup;

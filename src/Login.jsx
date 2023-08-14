import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
// const jwt = require('jsonwebtoken')
// import { json } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((email, password)) {
       fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          {
            data.token != undefined
              ? localStorage.setItem("token", data.token)
              : "";
          }
          const token = localStorage.getItem("token");
          const message = data.message;
          if (token) {
            toast("Logging in...", {
              position: "bottom-left",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setTimeout(() => {
              navigate("/");
            }, 1900);
          } else {
            toast.error(message, {
              position: "bottom-left",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
        .catch((error)=>{
         toast.error(error.message, {
            position: "bottom-left",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          })}
          // ,
          // setTimeout(() => {
          //   navigate("/error-page");
          // }, 1800)
        );
    } else {
      toast.warn("Please enter your credentials!", {
        position: "bottom-left",
        autoClose: 1800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <>
     
        <ToastContainer />
     

      <div className="flex justify-center flex-col items-center h-[80vh] ">
        <h1 className="font-bold text-[20px] text-center text-purple-800">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md min-w-[300px]"
        >
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
            type={!showPassword? "password": "text"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        { password&&  <button type="button" className="text-blue-500" onClick={()=>{setShowPassword((prev)=> !prev)}}>{!showPassword?"Show":"Hide"}</button>}
          <div className="flex justify-baseline">
            <button
              className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 mt-4"
              type="submit"
            >
              Login
            </button>
            <button
              className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 mt-4 mx-2"
              onClick={() => {
                navigate("/sign-up");
              }}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

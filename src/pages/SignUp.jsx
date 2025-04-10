import { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted"); 
    const requestBody = {
      name: formData.username,      // Username
      email: formData.email,        // Email
      phone: "9876543210",          // ph.no.
      password: formData.password,  // Password
    };

    try {
      // API Call using fetch
      const response = await fetch("https://codearena-1jev.onrender.com/auth/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log("Response data:", data); 

      if (response.ok) {
        console.log("Signup Successful:", data);
        
      } else {
        console.error("Signup Error:", data);
        
      }
    } catch (error) {
      console.error("Network Error:", error);
      
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#0D1230] overflow-hidden">
      <div className="bg-[#CACDE3] p-6 md:p-8 rounded-[8.44px] shadow-lg flex flex-col md:flex-row items-center justify-center max-w-[95%] md:max-w-[916.76px] max-h-[95%] md:max-h-[584px] w-full h-full">
        
        {/* Left Side - Illustration */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <div className="absolute bg-orange-400 w-24 h-12 rounded-full bottom-0"></div>
            <div className="absolute bg-yellow-400 w-12 h-16 rounded-md right-5"></div>
            <div className="absolute bg-black w-14 h-24 rounded-md right-12"></div>
            <div className="absolute bg-purple-600 w-16 h-32 rounded-md"></div>
          </div>
        </div>

        <div className="flex-1 w-full px-4 sm:px-6 md:px-8">
          <div className="flex justify-center mb-4">
            <img
              src="/logo1.png"
              alt="Logo"
              className="w-10 md:w-20"
            />
          </div>
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-950">Join CodeArena!</h2>
          <p className="text-gray-600 text-center mb-6">
            The ultimate battleground for programmers. Ready to challenge yourself?
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center border-b border-gray-400 py-2">
              <FaEnvelope className="text-gray-800 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none py-1 font-semibold text-gray-800"
                required
              />
            </div>
            <div className="flex items-center border-b border-gray-400 py-2">
              <FaUser className="text-gray-800 mr-2" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full outline-none py-1 font-semibold text-gray-800"
                required
              />
            </div>
            <div className="flex items-center border-b border-gray-400 py-2">
              <FaLock className="text-gray-800 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full outline-none py-1 font-semibold text-gray-900"
                required
              />
            </div>
            <button
  type="submit"
  className="bg-blue-600 text-white text-xl font-medium px-6 py-4 rounded-full w-[80%] max-w-xs hover:bg-blue-700 transition"
>
  Sign Up
</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

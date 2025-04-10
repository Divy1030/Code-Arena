import { useState } from "react";
import { FaLock } from "react-icons/fa";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    // Check if the passwords match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    // Start loading state
    setLoading(true);
    setMessage("");

    try {
      // Sending PUT request to the API
      const response = await fetch(
        "https://codearena-1jev.onrender.com/auth/v1/reset-password/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2RlYWFmYzcwMjQ2NTBhMzYzNTVmZWUiLCJpYXQiOjE3NDI2NDY4NzQsImV4cCI6MTc0MjkwNjA3NH0.pGKqAsJHHaEp9ELL-MgFB0L-v8b-t8an4r6bLef1BJI",
        {
          method: "PUT", // Set the method to PUT
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }), // Pass the password in the request body
        }
      );

      // Checking if the response is OK (status 200-299)
      const textResponse = await response.text(); // Get raw response text
      console.log("Response Status:", response.status); // Log the response status code
      console.log("Response Text:", textResponse); // Log the raw response

      let data = {};
      try {
        data = JSON.parse(textResponse); 
      } catch (err) {
        console.error("Error parsing JSON:", err); 
      }

     
      if (!response.ok) {
        throw new Error(data.message || "Failed to reset password");
      }

     
      setMessage("Password reset successfully!");
    } catch (error) {
     
      setMessage(error.message);
    } finally {
      
      setLoading(false);
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
        <div className="w-full md:w-1/2 p-6 flex flex-col items-center">
          <img
            src="/logo1.png"
            alt="Logo"
            width={100} 
            height={100} 
            className="w-20 mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-950">Reset Password</h2>
          <p className="text-sm text-gray-600 mb-4">Enter your new password below.</p>
          <div className="w-full relative mb-4">
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b-2 border-gray-400 py-2 text-gray-950 focus:outline-none bg-transparent"
            />
            <FaLock className="absolute right-2 top-3 text-gray-700" />
          </div>
          <div className="w-full relative">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border-b-2 border-gray-400 py-2 text-gray-950 focus:outline-none bg-transparent"
            />
            <FaLock className="absolute right-2 top-3 text-gray-700" />
          </div>
          <p
            onClick={handleReset}
            disabled={loading}
            className="bg-blue-600 text-white text-xl mt-4 font-medium px-6 py-4 rounded-full w-full max-w hover:bg-blue-700 transition cursor-pointer"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </p>
          {message && <p className="text-red-500 text-sm mt-2">{message}</p>}
          <p className="mt-4 text-blue-500 text-bold flex items-center gap-1 text-sm hover:underline">
            <a href="login"> ← Back to Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

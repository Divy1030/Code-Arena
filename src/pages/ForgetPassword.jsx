import { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await fetch("/auth/v1/forget-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage("Password reset link has been sent to your email.");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#0D1230] overflow-hidden">
      <div className="bg-[#CACDE3] p-6 md:p-8 rounded-[8.44px] shadow-lg flex flex-col items-center justify-center max-w-[95%] md:max-w-[916.76px] max-h-[95%] md:max-h-[584px] w-full h-full">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="w-full flex items-center justify-center">
            <img src="/logo1.png" 
            alt="logo"
            width={100} 
            height={100} 
            className="w-20 mb-4" />
          </div>
          <h2 className="text-lg md:text-3xl font-bold text-gray-950">Forgot Password</h2>
          <p className="text-gray-500 text-center">Enter your email address to receive a password reset link.</p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full max-w-md p-2 border-2 border-gray-900 rounded-md text-gray-900 focus:border-2 focus:border-blue-800 focus:ring-0 focus:outline-none"
              required
            />
            {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
            {message && <p className="text-green-500 font-semibold mt-2">{message}</p>}
            <button
              type="submit"
              className="bg-blue-600 text-white text-lg md:text-xl mt-4 font-medium w-[80%] max-w-xs px-4 md:px-6 py-2 md:py-4 rounded-full  max-w hover:bg-blue-700 transition"
            >
              Send Reset Link
            </button>
          </form>
          <p className="text-gray-500 text-sm text-center">
            Remembered your password? <a href="/login" className="text-blue-500">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

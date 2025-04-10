import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError(""); 
    
    try {
      const response = await fetch("https://codearena-1jev.onrender.com/auth/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), 
      });

      const data = await response.json();

      if (!response.ok) {
       
        if (response.status === 401) {
          throw new Error("Wrong email or password");
        } else {
          throw new Error(data.message || "Something went wrong");
        }
      }

      console.log("Login successful", data);
      localStorage.setItem("authToken", data.token); 
      alert("Login successful!");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      window.location.href = "https://your-api.com/auth/google";
    } catch (error) {
      setError("Google login failed");
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

        {/* Right Side - Login Form */}
        <div className="flex-1 w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 relative">
        <img 
    src="/logo1.png" 
    alt="CodeArena Logo" 
    className="w-16 h-16 mb-2 absolute top-5"
  />
        
          <div className="text-center mt-16">
            <h2 className="text-xl sm:text-3xl font-bold mt-3 text-gray-950">Welcome Back to CodeArena!</h2>
            <p className="text-gray-600 text-sm mt-1">
              Enter the arena and continue your coding journey.
            </p>
          </div>

          {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}

          
          <div className="mt-4">
            <div className="relative">
              <label className="text-gray-900 text-sm font-semibold ml-1"></label>
              <div className="flex items-center border-b border-gray-400 py-2 ">
                <FaUser className="text-gray-800 mr-2" />
                <input
                  type="email" // Change input type to email for proper email validation
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent outline-none py-1 font-semibold text-gray-800"
                />
              </div>
            </div>

            <div className="relative mt-6">
              <label className="text-gray-900 text-sm font-semibold ml-1"></label>
              <div className="flex items-center border-b border-gray-400 py-2">
                <FaLock className="text-gray-800 mr-2" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent outline-none py-1 font-semibold text-gray-800"
                />
              </div>
            </div>

            <div className="text-right mt-2 text-sm">
            <p className="text-gray-900">Forgot password? <a href="forgetpassword" className="text-blue-500 hover:underline">
                 Reset it here
              </a></p>
            </div>

            <p
              onClick={handleLogin}
              disabled={loading}
              className="bg-blue-600 text-white text-xl mt-4 font-medium px-6 py-4 rounded-full w-full max-w hover:bg-blue-700 transition"
            >
              {loading ? "Logging in..." : "Login"}
            </p>

            <p
              onClick={handleGoogleLogin}
              className="flex justify-center items-center mt-4 bg-[#6F83F4] text-gray-900 text-xl font-medium px-6 py-4 rounded-full w-full max-w hover:bg-[#9BA1C6] transition"
            >
              <FcGoogle className="text-xl" /> Login with Google
            </p>

            <p className="mt-4 text-center text-sm text-gray-600">
              New to CodeArena?{" "}
              <a href="signup" className="text-blue-500 hover:underline">
                Sign up now
              </a>{" "}
              and start competing!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

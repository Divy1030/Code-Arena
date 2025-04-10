import { useState, useRef } from "react";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); 
    if (!value) return;

    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      let newOtp = [...otp];
      if (newOtp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmit = async () => {
    const enteredOtp = otp.join("");
    
    if (enteredOtp.length < 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const response = await fetch('https://codearena-1jev.onrender.com/auth/v1/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: enteredOtp }),
      });

      if (!response.ok) {
        throw new Error("Failed to verify the OTP.");
      }

      const data = await response.json();

      if (data.success) {
        setError("");
        alert("OTP Verified!"); 
      } else {
        setError("Wrong authentication code. Please try again.");
      }
    } catch (error) {
      setError("An error occurred while verifying the OTP. Please try again.");
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
          <h2 className="text-lg md:text-3xl font-bold text-gray-950"> OTP Verification</h2>
          <p className="text-gray-500 text-center">Enter the 6-digit code that we have sent to your mail!</p>
          <div className="flex gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength="1"
                className={`w-10 h-10 md:w-12 md:h-12 text-gray-900 text-center border-2 border-gray-950 focus:border-2 focus:border-blue-800 focus:ring-0 focus:outline-none rounded-md text-lg font-bold ${error ? 'border-red-500' : 'border-blue-300'}`}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          <p
            onClick={handleSubmit}
            className="bg-blue-600 text-white text-lg md:text-xl mt-4 font-medium px-4 md:px-5 py-2 md:py-3 rounded-full w-[80%] max-w-xs hover:bg-blue-700 transition cursor-pointer"
          >
            Verify Code
          </p>
          <p className="text-gray-500 text-sm text-center">
            Haven’t got email? <a href="#" className="text-blue-500">Click here to resend</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Otp;

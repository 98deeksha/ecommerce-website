
import home from '../assets/login.png'
import { useState } from 'react';


const Signin = () => {
  const [phone, setPhone] = useState('')
  const [user, setUser] = useState(null)
  const [otp, setOtp] = useState("")


  return (
    <div className="grid grid-cols-2">
      <div className="bg-blue-600 h-screen w-10/12 p-16">
        <h1 className="text-white font-semibold text-3xl">Login</h1>
        <h1 className="text-gray-200 pt-5 text-lg">
          Get access to your Orders, Wishlist and Recommendations
        </h1>
        <img src={home} alt="hero" className="mt-44 w-80" />
      </div>
      <div className="pt-12">
        <input type="text"
          placeholder="Enter Email/Mobile number"
        />

        <p className="text-gray-500 text-sm mt-7">
          By continuing, you agree to Flipkart's
          <span className="text-blue-700">Terms of Use</span> and
          <span className="text-blue-700"> Privacy Policy</span>.
        </p>
        <button
         
          className="bg-[#fb641b] text-white w-11/12 mt-3 p-1.5 font-semibold"
        >
          Request OTP
        </button>
        <div id="recaptcha"></div>
        {phone && (
          <input
            placeholder="Enter OTP"
            className="text-lg w-11/12 p-2.5 mt-5"
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        )}
        {otp && (
          <button
           
            className="bg-[#fb641b] text-white w-11/12 mt-3 p-1.5 font-semibold"
          >
            Verify OTP
          </button>
        )}

        <p className="text-blue-500 text-center mt-64 font-semibold">
          New to Flipkart? Create an account
        </p>
      </div>
    </div>
  );
}

export default Signin


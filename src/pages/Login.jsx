import {  useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { authContext } from "../../contexts/AuthContext";
import { setCookie } from "../../hooks/setCookie";


// eslint-disable-next-line react/prop-types
function Login() {

    const MySwal = withReactContent(Swal)

    // eslint-disable-next-line no-unused-vars
    const {isLogin , setIsLogin} = useContext(authContext)
    
   const [email, setEmail] = useState("");
   const [password , setPassword] = useState("");

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === 'test@gmail.com' && password === '123456'){
        const Toast = MySwal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = MySwal.stopTimer;
              toast.onmouseleave = MySwal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "با موفقیت وارد شدید"
          });
          setIsLogin(true)
          setCookie('email',email,7)
          setCookie('isLogin',true,7)
          navigate("/");
    }else {
        const Toast = MySwal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = MySwal.stopTimer;
              toast.onmouseleave = MySwal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "اطلاعات وارد شده صحیح نمیباشد"
          });
    }
  };





  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs md:max-w-md w-full ">
        <div id="login-form">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
            Log In
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
            >
              Log In
            </button>
            <p className="text-center text-gray-600 mt-6">
              <a href="#" className="text-purple-500 hover:underline">
                Forgot Password?
              </a>
            </p>
            <p className="text-center text-gray-600 mt-6">
              Don’t have an account?{" "}
              <a href="#" className="text-purple-500 hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>

        <div id="signup-form" className="hidden">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
            >
              Sign Up
            </button>
            <p className="text-center text-gray-600 mt-6">
              Already have an account?{" "}
              <a href="#" className="text-purple-500 hover:underline">
                Log In
              </a>
            </p>
          </form>
        </div>

        <div id="forgot-password-form" className="hidden">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
            Forgot Password
          </h2>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
            >
              Reset Password
            </button>
            <p className="text-center text-gray-600 mt-6">
              Remember your password?{" "}
              <a href="#" className="text-purple-500 hover:underline">
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>

    </div>
    
  );
}

export default Login;

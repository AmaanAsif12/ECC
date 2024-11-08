import { useState } from "react";
import { Login } from "../config/firebase";
import { useNavigate } from "react-router-dom";

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Logged = async () => {
    try {
      await Login(email, password);
      alert("Login successfully");
      navigate("/");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900">Welcome Back</h1>
        <p className="text-center text-gray-600">Please login to your account</p>
        <div className="space-y-4">
          <input
            className="w-full p-3 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            className="w-full p-3 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <button
            className="w-full py-3 mt-4 font-semibold text-white transition duration-300 bg-black rounded-lg hover:bg-bblack focus:outline-none focus:ring-2 focus:ring-black"
            onClick={Logged}
          >
            Login
          </button>
        </div>
        <div className="text-center">
          <a href="#" className="text-sm text-black hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;

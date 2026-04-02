import React from 'react';

const Login = () => {
    return (
        <div>
             <div className="w-full max-w-md mx-auto">
  <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl">
    
    <div className="card-body p-8">
      
      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Welcome Back
      </h2>
      <p className="text-sm text-center text-gray-500 mb-6">
        Login to your account
      </p>

      <form className="space-y-4">
        
        {/* Email */}
        <div>
          <label className="label text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#0F75B8]"
          />
        </div>

        {/* Password */}
        <div>
          <label className="label text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#0F75B8]"
          />
        </div>

        {/* Forgot password */}
        <div className="text-right">
          <a className="text-sm text-[#0F75B8] hover:underline cursor-pointer">
            Forgot password?
          </a>
        </div>

        {/* Button */}
        <button className="btn w-full bg-[#0F75B8] text-white border-none hover:bg-[#0c5f94] transition duration-300">
          Login
        </button>

      </form>

      {/* Divider */}
      <div className="divider text-xs text-gray-400">OR</div>

      {/* Extra option */}
      <button className="btn btn-outline w-full">
        Continue with Google
      </button>

      {/* Signup */}
      <p className="text-center text-sm text-gray-500 mt-4">
        Don’t have an account?{" "}
        <span className="text-[#0F75B8] font-medium cursor-pointer hover:underline">
          Sign up
        </span>
      </p>

    </div>
  </div>
</div>
        </div>
    );
};

export default Login;

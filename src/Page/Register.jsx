import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const {register, handleSubmit,watch, formState: { errors }}  = useForm();
  const {registerUser} = useContext(AuthContext)

  const handlefromSubmit = (data) => {
     registerUser(data.email, data.password)
     .then(result =>{
        const user = result.user;
        alert('User created successfully');
        console.log(user);
     })
     .catch(error =>{
        console.log(error);
     })
  }

  return (
    <div>
      <div className="w-full max-w-lg mx-auto">
        <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl">
          <div className="card-body p-8">
            {/* Title */}
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Create Account 
            </h2>
            <p className="text-sm text-center text-gray-500 mb-6">
              Join us and get started
            </p>

            <form onSubmit={handleSubmit(handlefromSubmit)} className="space-y-4">
              {/* Name */}
              <div>
                <label className="label text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("name", { required:'true'})}
                  placeholder="Enter your name"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#0F75B8]"
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">You need to enter your name</p>}
              </div>

              {/* Email */}
              <div>
                <label className="label text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                {...register("email", { 
                  required: "Email is required",})}
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#0F75B8]"
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div>
                <input
  {...register("password", {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters"
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
      message:
        "Password must contain uppercase, lowercase, number & special character"
    }
  })}
  type="password"
  placeholder="Create a password"
  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#0F75B8]"
/>

{errors.password && (
  <p className="text-sm text-red-500 mt-1">
    {errors.password.message}
  </p>
)}
                </div>

              {/* Confirm Password */}
              <div>
                <label className="label text-sm font-medium text-gray-600">
                  Confirm Password
                </label>
                <input
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) => value === watch("password") || "Passwords do not match"
                    })}

                  type="password"
                  placeholder="Confirm your password"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#0F75B8]"
                />
                {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword.message}</p>}
              </div>

              {/* Terms */}
              <div className="flex items-center gap-2">
                <input type="checkbox" {...register("terms", { required: "Please agree to the terms and conditions" })} className="checkbox checkbox-sm" />
                <span className="text-sm text-gray-500">
                  I agree to the{" "}
                  <span className="text-[#0F75B8] cursor-pointer hover:underline">
                    Terms & Conditions
                  </span>
                </span>
              </div>

              {/* Button */}
              <button className="btn w-full bg-[#0F75B8] text-white border-none hover:bg-[#0c5f94] transition duration-300">
                Register
              </button>
            </form>

            {/* Divider */}
            <div className="divider text-xs text-gray-400">OR</div>

            {/* Google */}
            <button className="btn btn-outline w-full">
              Sign up with Google
            </button>

            {/* Login redirect */}
            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{" "}
              <span className="text-[#0F75B8] font-medium cursor-pointer hover:underline">
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

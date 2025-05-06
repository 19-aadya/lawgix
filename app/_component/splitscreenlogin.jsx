"use client";
import React from "react";
import Image from "next/image";

function SplitScreenLogin() {
  return (
    <div className="flex flex-col min-h-screen  bg-gray-50">
      <div className="flex flex-grow">
        {/* Left Side with Background Image */}
        <div className="hidden md:flex w-1/2 relative">
          <div className="absolute inset-0">
            <Image
              src="/law_bg.jpg" // Replace with your actual image path
              alt="Background"
              fill
              className="object-cover"
            />
            {/* Optional dark overlay */}
          </div>
          <div className="relative z-10 text-white items-center justify-center flex flex-col text-center p-12">
            <h1 className="text-4xl font-bold text-white">Welcome to Lawless</h1>
            <p className="mt-4 text-lg text-gray-200">
              Your one-stop solution for all legal needs.
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Sign in to your account</h2>
              <p className="text-sm text-gray-500">Enter your credentials below.</p>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">Password</label>
                <input
                  type="password"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-700">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a href="#" className="text-sm text-indigo-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="bg-blue-900 text-white font-semibold py-2 px-4 rounded w-full hover:bg-blue-800"
              >
                Sign In
              </button>
            </form>
            <p className="text-sm text-center text-gray-500">
              Don’t have an account?{" "}
              <a href="#" className="text-indigo-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplitScreenLogin;

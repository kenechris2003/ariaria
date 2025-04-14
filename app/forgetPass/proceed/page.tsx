
"use client";
import Image from 'next/image';
import { useState } from 'react';
import Localfont from "next/font/local";


const CustomFont = Localfont({
  src: [{ path: './ariaria.woff2' }],
  display: 'swap',
  
});

export default function forgetPass() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white w-full h-full flex justify-between">

      {/* Left Section with Image */}
      <div>
        <Image
          src="/woman_signin.png"
          alt="logo"
          width={900}
          height={1116}
          className="h-screen w-fit hidden lg:flex md:flex"
          loading='eager'
        />
      </div>

      {/* Right Section with Form */}
   

      <div className="shadow-[0_10px_15px_-2px_rgba(0,0,0,0.1),0_-10px_15px_-2px_rgba(0,0,0,0.1),10px_0_15px_-2px_rgba(0,0,0,0.1),-10px_0_15px_-2px_rgba(0,0,0,0.1)] rounded-[30px] w-full h-fit max-w-md p-3 lg:p-5 mx-5 lg:mx-auto mt-10 bg-white flex flex-col text-black">
      <div className="flex justify-center">
            <Image src="/ariaria_logo.png" alt="logo" width={148} height={84} />
        </div>
        <div className="text-center flex flex-col gap-3 py-10">
        <h1 className={`font-bold text-3xl mt-4 ${CustomFont.className}`}>Forget Password</h1>
          <p className="mt-2 text-[14px]">Enter new password.</p>
        </div>
        <form className="flex flex-col gap-32">
          <div className="flex flex-col gap-5">
 
            {/* Password Input */}
            <div className="space-y-2">
              <div className="relative">
                <span
                  className="cursor-pointer absolute right-0 pr-[20px] my-[12px]"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                >
                  {showPassword ? (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5C7.5 5 3.7 7.6 2 12C3.7 16.4 7.5 19 12 19C16.5 19 20.3 16.4 22 12C20.3 7.6 16.5 5 12 5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 15C13.7 15 15 13.7 15 12C15 10.3 13.7 9 12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5819 11.9999C15.5819 13.9799 13.9819 15.5799 12.0019 15.5799C10.0219 15.5799 8.42188 13.9799 8.42188 11.9999C8.42188 10.0199 10.0219 8.41992 12.0019 8.41992C13.9819 8.41992 15.5819 10.0199 15.5819 11.9999Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.9998 20.2697C15.5298 20.2697 18.8198 18.1897 21.1098 14.5897C22.0098 13.1797 22.0098 10.8097 21.1098 9.39973C18.8198 5.79973 15.5298 3.71973 11.9998 3.71973C8.46984 3.71973 5.17984 5.79973 2.88984 9.39973C1.98984 10.8097 1.98984 13.1797 2.88984 14.5897C5.17984 18.1897 8.46984 20.2697 11.9998 20.2697Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  )}
                </span>

                <input
                  className="flex h-10 w-full rounded-md outline-orange-500 px-3 py-3 text-sm bg-gray-200"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"} 
                  name="password"
                />
              </div>
            </div>
            
            {/* Password Input */}
            <div className="space-y-2">
              <div className="relative">
                <span
                  className="cursor-pointer absolute right-0 pr-[20px] my-[12px]"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                >
                  {showPassword ? (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5C7.5 5 3.7 7.6 2 12C3.7 16.4 7.5 19 12 19C16.5 19 20.3 16.4 22 12C20.3 7.6 16.5 5 12 5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 15C13.7 15 15 13.7 15 12C15 10.3 13.7 9 12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5819 11.9999C15.5819 13.9799 13.9819 15.5799 12.0019 15.5799C10.0219 15.5799 8.42188 13.9799 8.42188 11.9999C8.42188 10.0199 10.0219 8.41992 12.0019 8.41992C13.9819 8.41992 15.5819 10.0199 15.5819 11.9999Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.9998 20.2697C15.5298 20.2697 18.8198 18.1897 21.1098 14.5897C22.0098 13.1797 22.0098 10.8097 21.1098 9.39973C18.8198 5.79973 15.5298 3.71973 11.9998 3.71973C8.46984 3.71973 5.17984 5.79973 2.88984 9.39973C1.98984 10.8097 1.98984 13.1797 2.88984 14.5897C5.17984 18.1897 8.46984 20.2697 11.9998 20.2697Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  )}
                </span>

                <input
                  className="flex h-10 w-full rounded-md outline-orange-500 px-3 py-3 text-sm bg-gray-200"
                  placeholder="Confirm Password"
                  type={showPassword ? "text" : "password"} 
                  name="password"
                />
              </div>
            </div>
           

          </div>
          <div className="flex flex-col gap-5">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium text-white bg-orange-500 h-10 px-4 py-2" type="submit">Reset Password</button>

        </div>
        </form>
      </div>
    </div>
  );
}
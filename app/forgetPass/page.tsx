
"use client";
import Image from 'next/image';
import { useState } from 'react';
import Localfont from "next/font/local";
import { useRouter } from "next/navigation";

const CustomFont = Localfont({
  src: [{ path: './ariaria.woff2' }],
  display: 'swap',
  
});

export default function ForgetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); 

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
          <p className="mt-2 text-[14px]">Enter your email address</p>
        </div>
        <form className="flex flex-col gap-32">
          <div className="flex flex-col gap-5">
            {/* Email Input */}
            <div className="space-y-2">
              <input
                type='email'
                className="flex h-10 w-full rounded-md outline-orange-500  px-3 py-2 text-sm bg-gray-200 active:border-2"
                placeholder="Email Address"
                name="email"
              />
            </div>
        </div>
          <div className="flex flex-col gap-5">
          <button
              onClick={() => router.push("/forgetPass/otp")} 
              className="inline-flex items-center justify-center w-full rounded-md text-sm font-medium text-white bg-orange-500 h-10 px-4 py-2"
              type="button"
            >
              Proceed
            </button>

        </div>
        </form>
      </div>
    </div>
  );
}
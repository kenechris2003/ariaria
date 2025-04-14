"use client";

import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Localfont from "next/font/local";
import Image from "next/image";
import { useRouter } from "next/navigation";




const CustomFont = Localfont({
  src: [{ path: './ariaria.woff2' }],
  display: 'swap',
  
});

export default function forgetPass() {
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
          <p className="mt-2 text-[14px]">Enter the OTP sent to your email address</p>
        </div>
        <form className="flex flex-col gap-32 justify-center items-center">
          <div >
          
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

           


          </div>
          <div className="flex flex-col gap-5 w-full">
          <button
              onClick={() => router.push("/forgetPass/proceed")} 
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
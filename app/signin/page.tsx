import Image from 'next/image';
import Link from 'next/link';

export default function Signin(){
    return(
        <div className='bg-white w-full h-screen flex justify-between'>

        <div  >
            <Image src="/woman_signin.png" alt="logo" width={900} height={1116} className='h-screen w-fit' />

        </div>

        <div className="shadow-2xl rounded-2xl border w-full h-fit max-w-md p-3 lg:p-5 mx-auto mt-10 bg-white flex flex-col  text-black">
        <div className="text-center flex flex-col gap-3 py-10">
        <h1 className="font-bold text-3xl mt-4">Sign In</h1>
        <p className="mt-2 text-[14px]">Hey, nice to have you back!</p>
        
        </div>
        <form className="flex flex-col">
        <div className="flex flex-col gap-5">
        <div className="space-y-2">
        <input className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm bg-gray-200" placeholder="Email Address" name="email" />
        </div>
        <div className="space-y-2">
            <div className='relative'>
            <span className="cursor-pointer absolute right-0 pr-[20px] my-[12px]">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5819 11.9999C15.5819 13.9799 13.9819 15.5799 12.0019 15.5799C10.0219 15.5799 8.42188 13.9799 8.42188 11.9999C8.42188 10.0199 10.0219 8.41992 12.0019 8.41992C13.9819 8.41992 15.5819 10.0199 15.5819 11.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M11.9998 20.2697C15.5298 20.2697 18.8198 18.1897 21.1098 14.5897C22.0098 13.1797 22.0098 10.8097 21.1098 9.39973C18.8198 5.79973 15.5298 3.71973 11.9998 3.71973C8.46984 3.71973 5.17984 5.79973 2.88984 9.39973C1.98984 10.8097 1.98984 13.1797 2.88984 14.5897C5.17984 18.1897 8.46984 20.2697 11.9998 20.2697Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            </span>


            <input className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-200" placeholder="Password" type="password" name="password"/>
            </div>

        </div>

        </div>
        </form>
        </div>

        </div>
    )
}
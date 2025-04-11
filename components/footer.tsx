import Image from 'next/image'

export default function Footer() {
    return ( 
        <footer  className='bg-white w-full h-full text-black '> 
           
        <div>
            <div className="h-[42px] mx-auto space-y-4 lg:h-[84px] w-[72px] lg:w-[144px]">
                 <Image
                    src="/ariaria_logo.png"
                    alt="logo"
                    className="object-contain"
                    width={148}
                    height={84}
                    />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16'>
                <div>
                    <h1 className='mb-1 font-semibold font-libre text-2xl '> Contact Us</h1>
                    <ul>
                        <li className='py-2 flex'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0028 13.4304C13.7259 13.4304 15.1228 12.0336 15.1228 10.3104C15.1228 8.5873 13.7259 7.19043 12.0028 7.19043C10.2797 7.19043 8.88281 8.5873 8.88281 10.3104C8.88281 12.0336 10.2797 13.4304 12.0028 13.4304Z" strokeWidth="currentColor" strokeWidthWidth="1.5"></path> <path d="M3.61776 8.49C5.58776 -0.169998 18.4178 -0.159997 20.3778 8.5C21.5278 13.58 18.3678 17.88 15.5978 20.54C13.5878 22.48 10.4078 22.48 8.38776 20.54C5.62776 17.88 2.46776 13.57 3.61776 8.49Z" strokeWidth="currentColor" strokeWidthWidth="1.5"></path></svg>
                        <a href="https://goo.gl/maps/igGWyLjzogTEvUhg9" className='font-normal px-2 text-black hover:text-primary transition-all scale-1/50 duration-300 text-sm cursor-pointer leading-6'>
                        4th floor,Polystar building, Manuwa bus stop, Lekki phase 1, Lagos, Nigeria
                        </a>
                        </li>
                        <li className='py-2 flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" fill="CurrentColor"></path>
                        </svg>
                        <a href="tel:090134470693" className='font-normal px-2 text-black hover:text-primary transition-all scale-1/50 duration-300 text-sm cursor-pointer leading-6'> 09013 447 0693</a>
                        </li>
                        <li className='py-2 flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" fill="CurrentColor"></path></svg>
                        <a href="mailto:Customersupport@24modilemech.com" className='font-normal px-2 text-black hover:text-primary transition-all scale-1/50 duration-300 text-sm cursor-pointer leading-6'>
                        Customersupport@24modilemech.com
                        </a>
                        </li>

                    </ul>
                </div>
                <div>
                    <h1 className='mb-1 font-semibold font-libre text-2xl '>Quick Links</h1>
                    <ul>
                        <li className='py-2 flex'>
                            <a href="/about" className='font-normal px-2 text-black hover:text-primary transition-all scale-1/50 duration-300 text-sm cursor-pointer leading-6'>About Us</a>
                        </li>
                        <li className='py-2 flex'>
                        <a href="/Termsofuse" className='font-normal px-2 text-black hover:text-primary transition-all scale-1/50 duration-300 text-sm cursor-pointer leading-6'>Terms of Use</a>
                        </li>
                        <li className='py-2 flex'>
                        <a href="/Policy" className='font-normal px-2 text-black hover:text-primary transition-all scale-1/50 duration-300 text-sm cursor-pointer leading-6'>Privacy Policy</a>
                        </li>
                        <li className='py-2 flex'>
                        <a href="/FAQs" className='font-normal px-2 text-black hover:text-primary transition-all scale-1/50 duration-300 text-sm cursor-pointer leading-6'>FAQs</a>
                        </li>
                    </ul>
                </div>
                <form action="submit" className='mb-5 flex flex-col gap-5'>
                    <h1 className='mb-1 font-semibold text-2xl font-libre'> Send Enquiry</h1>
                    <div className='grid gap-5'>

                    <div className='space-y-2'>
                    <input type="text" placeholder='Email Address' className='flex h-10 w-full rounded-md border-none outline-orange-500 border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-orange-500 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-200'/>
                    </div>
                    <div>
                    <textarea placeholder='How can we help?' className='flex min-h-[80px] w-full rounded-md border-0 outline-orange-500 border-input px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-orange-500 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-200 h-32'/>
                    </div>
                    </div>
                    <div>

                    <button type='submit' className='bg-orange-400 w-full text-white rounded-md p-2inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'>Send Enquiry</button>
                    </div>
                </form>
            </div>


        </div>
        </footer>
    )

}

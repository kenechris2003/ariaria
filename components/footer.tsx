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
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0028 13.4304C13.7259 13.4304 15.1228 12.0336 15.1228 10.3104C15.1228 8.5873 13.7259 7.19043 12.0028 7.19043C10.2797 7.19043 8.88281 8.5873 8.88281 10.3104C8.88281 12.0336 10.2797 13.4304 12.0028 13.4304Z" stroke="currentColor" strokeWidth="1.5"></path> <path d="M3.61776 8.49C5.58776 -0.169998 18.4178 -0.159997 20.3778 8.5C21.5278 13.58 18.3678 17.88 15.5978 20.54C13.5878 22.48 10.4078 22.48 8.38776 20.54C5.62776 17.88 2.46776 13.57 3.61776 8.49Z" stroke="currentColor" strokeWidth="1.5"></path></svg>
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

                    <button type='submit' className='bg-orange-400 w-full text-white rounded-md p-2inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2'>Send Enquiry</button>
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-1 font-normal gap-4 text-center pt-2 text-black text-sm pb-8 px-4">
                <div className='text-white space-x-4'>
                <a className="p-2 cursor-pointer inline-flex items-center delay-50 rounded-full bg-orange-200 mx-1.5 text-xl text-primary transition-all hover:scale-150 duration-500" href="https://twitter.com/ariaria">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9525 7.91974C19.9647 8.09605 19.9647 8.27237 19.9647 8.45031C19.9647 13.8722 15.8371 20.1253 8.28966 20.1253V20.1221C6.06013 20.1253 3.8769 19.4867 2 18.2825C2.32419 18.3215 2.65001 18.341 2.97664 18.3418C4.82429 18.3435 6.61913 17.7235 8.07272 16.5819C6.31688 16.5486 4.77717 15.4038 4.23928 13.7325C4.85436 13.8511 5.48812 13.8267 6.09181 13.6618C4.17753 13.275 2.80033 11.5931 2.80033 9.63983C2.80033 9.62195 2.80033 9.60489 2.80033 9.58783C3.37071 9.90552 4.00934 10.0818 4.6626 10.1013C2.85964 8.89638 2.30388 6.49784 3.39265 4.62256C5.47593 7.18604 8.54966 8.74444 11.8493 8.90938C11.5186 7.48423 11.9703 5.99083 13.0364 4.989C14.689 3.43548 17.2882 3.51511 18.8418 5.16694C19.7607 4.98575 20.6415 4.64856 21.4475 4.1708C21.1412 5.12063 20.5001 5.92746 19.6437 6.44015C20.457 6.34428 21.2517 6.12652 22 5.7942C21.4491 6.61972 20.7552 7.33879 19.9525 7.91974Z" fill="#FF7F00"></path>
                </svg>
                </a>

                <a className="p-2 cursor-pointer inline-flex items-center delay-50 rounded-full bg-orange-200 mx-1.5 text-xl text-primary transition-all hover:scale-150 duration-500" href="https://twitter.com/ariaria">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.2137 13.3278L17.8356 9.23262H13.9452V6.57631C13.9452 5.45568 14.4877 4.36272 16.2301 4.36272H18V0.876308C18 0.876308 16.3945 0.599609 14.8603 0.599609C11.6548 0.599609 9.56164 2.56141 9.56164 6.11145V9.23262H6V13.3278H9.56164V23.2281C10.2767 23.3415 11.0082 23.3996 11.7534 23.3996C12.4986 23.3996 13.2301 23.3415 13.9452 23.2281V13.3278H17.2137Z" fill="#FF7F00"></path>
                </svg>
                </a>

                <a className="p-2 cursor-pointer inline-flex items-center delay-50 rounded-full bg-orange-200 mx-1.5 text-xl text-primary transition-all hover:scale-150 duration-500" href="https://twitter.com/ariaria">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.2846 7.28557H20.4275M6.14174 1.57129H19.856C22.3808 1.57129 24.4275 3.61799 24.4275 6.14272V19.857C24.4275 22.3817 22.3808 24.4284 19.856 24.4284H6.14174C3.61701 24.4284 1.57031 22.3817 1.57031 19.857V6.14272C1.57031 3.61799 3.61701 1.57129 6.14174 1.57129ZM12.9989 17.5713C10.4742 17.5713 8.42746 15.5246 8.42746 12.9999C8.42746 10.4751 10.4742 8.42843 12.9989 8.42843C15.5236 8.42843 17.5703 10.4751 17.5703 12.9999C17.5703 15.5246 15.5236 17.5713 12.9989 17.5713Z" stroke="#FF7F00" stroke-width="3"></path>
                </svg>
                </a>

                <a className="p-2 cursor-pointer inline-flex items-center delay-50 rounded-full bg-orange-200 mx-1.5 text-xl text-primary transition-all hover:scale-150 duration-500" href="https://twitter.com/ariaria">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0933 6.31746C24.0967 6.58704 24.8905 7.3808 25.1601 8.38421C25.6543 10.2113 25.6693 14.0004 25.6693 14.0004C25.6693 14.0004 25.6693 17.8044 25.175 19.6166C24.9055 20.62 24.1117 21.4137 23.1083 21.6833C21.2961 22.1775 14.0026 22.1775 14.0026 22.1775C14.0026 22.1775 6.70906 22.1775 4.89691 21.6833C3.89349 21.4137 3.09974 20.62 2.83016 19.6166C2.33594 17.7894 2.33594 14.0004 2.33594 14.0004C2.33594 14.0004 2.33594 10.2113 2.81518 8.3992C3.08476 7.39577 3.87851 6.60202 4.88194 6.33245C6.69409 5.83821 13.9876 5.82324 13.9876 5.82324C13.9876 5.82324 21.2812 5.82324 23.0933 6.31746ZM17.7168 14.0004L11.6663 17.5049V10.4959L17.7168 14.0004Z" fill="#FF7F00"></path>
                </svg>
                </a>

                <a className="p-2 cursor-pointer inline-flex items-center delay-50 rounded-full bg-orange-200 mx-1.5 text-xl text-primary transition-all hover:scale-150 duration-500" href="https://twitter.com/ariaria">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.429 8.969H13.143V10.819C13.678 9.755 15.05 8.799 17.111 8.799C21.062 8.799 22 10.917 22 14.803V22H18V15.688C18 13.475 17.465 12.227 16.103 12.227C14.214 12.227 13.429 13.572 13.429 15.687V22H9.429V8.969ZM2.57 21.83H6.57V8.799H2.57V21.83ZM7.143 4.55C7.14315 4.88528 7.07666 5.21724 6.94739 5.52659C6.81812 5.83594 6.62865 6.11651 6.39 6.352C5.9064 6.83262 5.25181 7.10165 4.57 7.1C3.88939 7.09954 3.23631 6.8312 2.752 6.353C2.51421 6.11671 2.32539 5.83582 2.19634 5.52643C2.0673 5.21704 2.00058 4.88522 2 4.55C2 3.873 2.27 3.225 2.753 2.747C3.23689 2.26816 3.89024 1.9997 4.571 2C5.253 2 5.907 2.269 6.39 2.747C6.872 3.225 7.143 3.873 7.143 4.55Z" fill="#FF7F00"></path>
                </svg>
                </a>
                
                </div>
                <span className="pt-3"> Ⓒ 2025 Ariaria. All Rights Reserved</span>
            </div>


        </div>
        </footer>
    )

}

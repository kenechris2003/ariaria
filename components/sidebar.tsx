import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
  onClose: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <div className="fixed inset-0 z-50 flex backdrop-blur-md" onClick={onClose}>

      <div className=" md:w-1/2 gap-3 bg-white h-full shadow-lg w-3/4">
      <div className="m-20 mt-3">
        <div className="flex justify-between items-center mb-5 gap-10">

                  <Image
                    src="/ariaria_logo.png"
                    alt="logo"
                    className="md:ml-15"
                    width={120}
                    height={84}
                  />
                   

                   <div className=" top-6">
            <button
               onClick={onClose}
               className="text-black hover:text-orange-400"
                >
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="2"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 className="h-6 w-6"
               >
                 <line x1="18" y1="6" x2="6" y2="18"></line>
                 <line x1="6" y1="6" x2="18" y2="18"></line>
               </svg>
        </button>
        </div>

        </div>
        </div>

                
        <ul className="p-4 mb-10">
          <li className="mb-5 bg-orange-500 p-2 rounded-sm">
            <Link href="/" className="text-white ">
              HOME
            </Link>
          </li>
          <li className="mb-5 bg-orange-500 p-2 rounded-sm">
            <Link href="/about" className="text-white">
              ABOUT US
            </Link>
          </li>
          <li className="mb-5 bg-orange-500 p-2 rounded-sm">
            <Link href="/allproduct" className="text-white ">
              ALL PRODUCT
            </Link>
          </li>
          <li className="mb-5 bg-orange-500 p-2 rounded-sm">
            <Link href="/categories" className="text-white ">
            CATEGORIES
            </Link>
          </li>
          <li className="mb-5 bg-orange-500 p-2 rounded-sm">
            <Link href="/signup" className="text-white">
              SIGN UP
            </Link>
          </li>
        </ul>
       
      </div>
    </div>
  );
}
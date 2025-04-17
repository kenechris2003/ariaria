"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Sidebar from "./sidebar"
import Search from "./search"

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname() 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <>
      <header className="fixed top-0 z-50 w-full shadow-md backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-5  lg:px-20 py-4">
          {/* Mobile menu button */}
          <button onClick={toggleSidebar} className="lg:hidden text-black" aria-label="Toggle menu">
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
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>

          {/* Navigation links */}
          <nav className="hidden lg:block">
            <ul className="flex gap-7">
              {[
                { name: "Home", href: "/" },
                { name: "Categories", href: "/categories" },
                { name: "About Us", href: "/about" },
              ].map((item) => (
                <li key={item.name} className="relative">
                  <Link href={item.href} className="text-black hover:text-orange-400">
                    {item.name}
                  </Link>
                  <span
                    className={`absolute left-0 bottom-0 w-full h-[1px] bg-orange-400 transition-transform duration-300 ${
                      pathname === item.href ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logo */}
          <div className="flex justify-center">
            <Image src="/ariaria_logo.png" alt="logo" width={148} height={84} />
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden lg:flex items-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black mr-1"
              >
                <path
                  d="M13.4166 24.5002C19.5378 24.5002 24.5 19.538 24.5 13.4168C24.5 7.29567 19.5378 2.3335 13.4166 2.3335C7.29549 2.3335 2.33331 7.29567 2.33331 13.4168C2.33331 19.538 7.29549 24.5002 13.4166 24.5002Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M25.6666 25.6668L23.3333 23.3335"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <Link href="" className="text-black hover:text-orange-400" onClick={toggleSearch}>
                Search
              </Link>
            </div>

            {/* Cart */}
            <div className="hidden lg:block">
              <Link href="/cart" className="text-black hover:text-orange-400">
                Cart
              </Link>
            </div>

            {/* Sign Up Button */}
            <button className="bg-orange-400 text-white rounded-xl">
              <Link
                href="/signin"
                className="inline-flex items-center justify-center text-sm font-medium h-10 rounded-full lg:rounded-lg p-3"
              >
                <span className="px-5 hidden lg:block">Sign In</span>
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
                  className="h-4 w-4 lg:hidden"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" x2="3" y1="12" y2="12"></line>
                </svg>
              </Link>
            </button>
          </div>
        </div>
      </header>

      {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
      {isSearchOpen && <Search onClose={toggleSearch} />}
    </>
  )
}


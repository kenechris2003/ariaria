

interface SearchProps {
  onClose: () => void;
}

export default function Search({ onClose }: SearchProps) {
    return(
    <div className="fixed inset-0 z-50 flex backdrop-blur-md">

      <div className="md:h-1/10 gap-3 h-1/6 lg:h-1/10 bg-white w-full shadow-lg flex p-10 pb-20 fixed" >

      <div className="flex flex-cols-1  items-center border ml-7 lg:w-3xl w-2xs border-gray-400 shadow-xl pl-4 pr-4 pt-4 pb-5 rounded-bl-xl rounded-tr-sm rounded-br-sm rounded-tl-xl border-r-0 text-black relative">
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
          <input
            type="search"
            placeholder="Search for an item"
            className="w-full ml-3 outline-0 h-4 text-1xl"
          />
        </div>
        <button className="inline-flex items-center justify-center text-sm font-medium h-10 rounded-full lg:rounded-lg p-3 bg-orange-500 text-white -ml-3.5">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
        <path d="M5.39844 2.1001H18.5984C19.6984 2.1001 20.5984 3.0001 20.5984 4.1001V6.3001C20.5984 7.1001 20.0984 8.1001 19.5984 8.6001L15.2984 12.4001C14.6984 12.9001 14.2984 13.9001 14.2984 14.7001V19.0001C14.2984 19.6001 13.8984 20.4001 13.3984 20.7001L11.9984 21.6001C10.6984 22.4001 8.89844 21.5001 8.89844 19.9001V14.6001C8.89844 13.9001 8.49844 13.0001 8.09844 12.5001L4.29844 8.5001C3.79844 8.0001 3.39844 7.1001 3.39844 6.5001V4.2001C3.39844 3.0001 4.29844 2.1001 5.39844 2.1001Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" stroke-minecap="round" strokeLinejoin="round"></path>
        <path d="M10.93 2.1001L6 10.0001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
          <p className="hidden lg:flex">Filter</p>
        </button>

      </div>
      <div className=" h-2/12 w-full" onClick={onClose}>

      </div>

       
      </div>

    )
}
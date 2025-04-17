import Download from "@/components/download";

export default function About() {
    return <div className="h-full m-100 mt-40 mb-10 mx-auto grid w-full items-center justify-center">
      <div className="text-black text-center mt-10 mb-5">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p className="lg:mx-100 px-5 text-sm">
      {`  Your one-stop online shopping destination where you can discover, explore, and buy almost anything you desire. We believe that shopping should be more than just a transaction; it should be an experience that brings joy, convenience, and endless possibilities right to your fingertips. Our vision is to revolutionize the way you shop by creating a digital marketplace that empowers you to discover and purchase a vast array of products with ease, efficiency, and unmatched satisfaction. We aspire to be your trusted companion in your shopping journey, offering a diverse range of products that cater to your every need and desire.`}
        </p>
      </div>
      <div className="flex gap-3 py-8 justify-center mx-65">
      <div className="rounded-xl ">
        <img src="1.png" alt="1" className="" />
      </div>
      <div className=" mt-6 lg:mt-10 rounded-xl">
      <img src="2.png" alt="2" />
      </div>
      <div className=" mt-3 lg:mt-5 rounded-xl">
      <img src="3.png" alt="3" />
      </div>
      <div className="rounded-xl">
      <img src="4.png" alt="4" />
      </div>

      </div>
          <Download/>
    </div>
}

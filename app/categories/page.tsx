import Download from "@/components/download";
import Card from "./card";


const items = [
  { 
      id: 1, 
      name: "Fashion",  
  },
  { 
    id: 2, 
    name: "Fashion",  
},
{ 
  id: 3, 
  name: "Fashion",  
},
{ 
  id: 4, 
  name: "Fashion",  
},
{ 
  id: 5, 
  name: "Fashion",  
},
{ 
  id: 6, 
  name: "Fashion",  
},
{ 
  id: 7, 
  name: "Fashion",  
},
{ 
  id: 8, 
  name: "Fashion",  
},
{ 
  id: 9, 
  name: "Fashion",  
},
{ 
  id: 10, 
  name: "Fashion",  
},
]


export default function Categories() {
    return <div className="h-full m-100 mb-10 mx-auto grid w-full items-center justify-center">
                    <button className=" px-40 text-white rounded-md text-center w-full">

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5'>
                    {items.map((item) => (
                        <Card key={item.id} Item={item} />
                    ))}
                </div>

            </button>
              <Download/>
    </div>;
}

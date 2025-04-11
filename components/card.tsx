
import Link from 'next/link'
interface Item {
    id: number;
    name: string;
    category: string;
    imageUrl: string;
    price: string;
    
}

interface CardProps {
    Item: Item;
}


export default function Card({ Item }: CardProps) {

    return (
        <div key={Item.id} className="flex flex-col mx-auto p-5 gap-2 m-2 sm:w-100 h-fit border-gray-500 shadow-xl rounded-2xl justify-between items-center">
          <Link href={`/Item/${Item.id}`} className='w-full h-auto relative z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100 mx-10'> <img src={Item.imageUrl} alt={Item.name} className="w-full h-full sm:w-5xl md:ml-0.5 object-cover rounded-2xl mb-4" /> </Link>  
            <div className="text-black lg:text-sm text-lg mt-2 font-bold"> {Item.name}</div>
            <div className="text-black lg:text-sm text-md">{Item.price}</div>
        </div>
    );
}
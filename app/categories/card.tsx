
import Link from 'next/link'
interface Item {
    id: number;
    name: string;

    
}

interface CardProps {
    Item: Item;
}


export default function Card({ Item }: CardProps) {

    return (
        <div key={Item.id} className='gap-4' >

            <div key={Item.id} className='items-center py-3 w-full mx-auto justify-center gap-4 bg-orange-500 rounded-md text-sm' >
          <Link href={`/Item/${Item.id}`} className='w-full rounded-lg mx-10'>
          
             {Item.name}
           </Link>  
            
        </div>
        </div>
    );
}
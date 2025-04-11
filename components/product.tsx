import Card from './card'
import React from 'react'

const items = [
    { 
        id: 1, 
        name: "Classic White T-Shirt", 
        category: "Tops", 
        imageUrl: "/dress.png", 
        price: "$19.99" 
    },
    { 
        id: 2, 
        name: "Denim Jacket", 
        category: "Outerwear", 
        imageUrl: "/dress.png", 
        price: "$49.99" 
    },
    { 
        id: 3, 
        name: "Black Skinny Jeans", 
        category: "Bottoms", 
        imageUrl: "/dress.png", 
        price: "$39.99" 
    },
    { 
        id: 4, 
        name: "Floral Summer Dress", 
        category: "Dresses", 
        imageUrl: "/dress.png", 
        price: "$29.99" 
    },
    { 
        id: 5, 
        name: "Leather Boots", 
        category: "Footwear", 
        imageUrl: "/dress.png", 
        price: "$89.99" 
    },
    { 
        id: 6, 
        name: "Hooded Sweatshirt", 
        category: "Tops", 
        imageUrl: "/dress.png", 
        price: "$34.99" 
    },
    { 
        id: 7, 
        name: "Plaid Scarf", 
        category: "Accessories", 
        imageUrl: "/dress.png", 
        price: "$14.99" 
    },
    { 
        id: 8, 
        name: "Running Shoes", 
        category: "Footwear", 
        imageUrl: "/dress.png", 
        price: "$59.99" 
    },
    { 
        id: 9, 
        name: "Wide-Brim Hat", 
        category: "Accessories", 
        imageUrl: "/dress.png", 
        price: "$24.99" 
    },
    { 
        id: 10, 
        name: "Slim Fit Blazer", 
        category: "Outerwear", 
        imageUrl: "/dress.png", 
        price: "$69.99" 
    }
  ];  


export default function Product(){
    return(
    <div className="bg-white w-full h-full flex flex-col rounded-xl text-black px-4 sm:px-6 lg:px-8 pt-8">
        
        <p>Featured Products</p>
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 p-5'>
        {items.map((item) => (
            <Card key={item.id} Item={item} />
        ))}
    </div>
</div>
    )
}
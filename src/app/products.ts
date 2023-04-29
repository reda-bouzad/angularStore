
export interface Product{
   id:number;
   name:string;
   price:number;
   description:string;
   available:boolean;
}

// we declare an Array of objects of the type Product
// each object need to have the attributes that are on the interface
export const products : Product[] =  [
  {
    id: 1,
    name: "Phone Xl",
    price: 1800,
    description: 'A large phone with one of the best screens',
    available: true
  },
  {
    id: 2,
    name: "Phone mini",
    price: 699,
    description: 'A great phone with one of the best cameras',
    available: true
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'A standard phone with a nice camera',
    available: true
  },
  {
    id: 4,
    name: 'Laptop',
    price: 2000,
    description: 'a great laptop with a very good GPU',
    available: false
  },
]

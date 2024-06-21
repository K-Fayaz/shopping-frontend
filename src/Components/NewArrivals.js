import { useState } from "react";
import ItemCard from "./ItemCard";


const NewArrivals = ()=>{

    const [selected,setSelected] = useState("Men Fashion");

    let arrivals = [
        {
            image:'arrival-1',
            name:'Shiny Dress'
        },
        {
            image:'arrival-2',
            name: 'Full Sweater'
        },
        {
            image:'arrival-3',
            name: 'White Shirt'
        },
        {
            image:'arrival-4',
            name:'Colourful Dress'
        },
        {
            image: 'arrival-5',
            name: 'Long Dress'
        },
        {
            image: 'arrival-6',
            name: 'White Dress'
        }
    ]

    return(
        <main>
            <section className="grid place-items-center w-2/3 mx-auto mb-5">
                <h1 className="font-logo font-bold text-3xl text-[#484848] mb-3">New Arrivals</h1>
                <p className="text-sm text-[#8A8A8A] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
            </section>

            <div className="w-full flex flex-row justify-around my-3">
                <button 
                    className={`text-xs text-[#8A8A8A] py-2 px-4  rounded-md ${selected === 'Women Fashion' ? 'bg-black text-white':''}`}
                >
                    Women's Fashion
                </button>
                <button 
                    className={`text-xs text-[#8A8A8A] py-2 px-4  rounded-md ${selected === 'Men Fashion' ? 'bg-black text-white':''}`}
                >
                    Men's Fashion
                </button>
                <button 
                    className={`text-xs text-[#8A8A8A] py-2 px-4  rounded-md ${selected === 'Men Accessories' ? 'bg-black text-white':''}`}
                >
                    Men's Accessories
                </button>
                <button 
                    className={`text-xs text-[#8A8A8A] py-2 px-4  rounded-md ${selected === 'Women Accessories' ? 'bg-black text-white':''}`}
                >
                    Women's Accessories
                </button>
            </div>

            <div className="grid grid-rows-2 grid-cols-3 gap-[50px]">

                {
                    arrivals.map((item,index)=>(
                        <ItemCard key={index} Item={item} />
                    ))
                }
            </div>
            <div className="grid place-items-center mt-10">
                <button className="bg-black text-white text-sm py-2 px-3 rounded drop-shadow-md my-8">View more</button>
            </div>
        </main>
    )   
};


export default NewArrivals;
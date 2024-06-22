
import { useState } from "react";

const CartItem = ()=>{

    const [price,setPrice] = useState(0);
    const [count,setCount] = useState(0);

    return(
        <div className="w-full flex justify-between mt-5 border-b-2 pb-5">
                <div className="basis-[30%] flex">
                    <img className="w-[50%] h-[250px] object-contain" src={require("../Assets/cart.png")} alt="Cart Image"/>
                        <div className="ml-5">
                            <h1 className="text-sm font-semibold mt-5">Mini Dress with Ruffled straps</h1>
                            <button className="px-5 py-2 bg-black text-white mt-5 rounded">Buy Now</button>
                        </div>
                </div>
                <h1 className="basis-[20%] text-lg font-bold font-logo">$14.90</h1>
                <div className="basis-[20%]">
                    <div className="border-2 rounded flex items-center w-[80px] justify-center">
                        <button disabled={count === 0} 
                            onClick={()=>{
                                let c = count;
                                setCount(c-1);
                                c = c-1;
                                setPrice(c * 14.90);
                            }} 
                            className={`text-lg font-bold ${count === 0 ? 'text-[#8A8A8A]':''}`}
                        >
                            -
                        </button>
                        <p className="text-lg font-bold ml-2">{count}</p>
                        <button className="text-lg font-bold ml-2"
                                onClick={()=>{
                                    let c = count+1;
                                    setCount(c);
                                    setPrice(c*14.90);
                                }}
                        >+</button>
                    </div>
                </div>  
                <div className="basis-[20%]"> 
                <p className="text-md font-bold">{price}</p>
            </div>
        </div>
    )
}

export default CartItem;
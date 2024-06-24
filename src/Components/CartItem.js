
import { useState } from "react";
import { BASE_URL } from "../Constants";

const CartItem = ({ Product , setProducts , setTotal })=>{

    const [price,setPrice] = useState(Product.price * Product.quantity);
    const [count,setCount] = useState(Product.quantity);

    const handleRemoveCart = ()=>{
        console.log("Something triggered me")
        let url = `${BASE_URL}/product/remove?productId=${Product.productId}`;
        let options = {
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                token: localStorage?.getItem('token')
            }
        };

        fetch(url,options)
            .then((response)=> response.json())
            .then((result)=>{
                if(result.status){
                    setProducts((prev)=> prev.filter((item)=>  item.productId !== Product.productId));
                    setTotal((prev)=> prev-(Product.price * Product.quantity))
                }
            })
            .catch((err)=>{
                console.log("Something went wrong: ",err);
            })

    }

    return(
        <div className="w-full flex justify-between mt-5 border-b-2 pb-5">
                <div className="basis-[30%] flex">
                    <img className="w-[50%] h-[250px] object-contain" src={Product.image} alt="Cart Image"/>
                        <div className="ml-5">
                            <h1 className="text-sm font-semibold mt-5">{Product.title}</h1>
                            <button onClick={handleRemoveCart} className="text-sm px-3 py-2 bg-black text-white mt-5 rounded">Remove From Cart</button>
                        </div>
                </div>
                <h1 className="basis-[20%] text-lg font-bold font-logo">${Product.price}</h1>
                <div className="basis-[20%]">
                    <div className="border-2 rounded flex items-center w-[80px] justify-center">
                        <button disabled={count === Product.quantity} 
                            onClick={()=>{
                                let c = count;
                                setCount(c-1);
                                c = c-1;
                                setPrice(c * 14.90);
                            }} 
                            className={`text-lg font-bold ${count === Product.quantity ? 'text-[#8A8A8A]':''}`}
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
                <p className="text-md font-bold">${price}</p>
            </div>
        </div>
    )
}

export default CartItem;
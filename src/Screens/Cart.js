import Navbar from "../Partials/Navbar"
import CartItem from "../Components/CartItem";
import NewsLetter from "../Components/NewsLetter";
import HomeFooter from "../Components/HomeFooter";
import { useEffect , useState } from "react";
import { BASE_URL } from "../Constants";
import { useNavigate } from "react-router-dom";
import CartItemSkeleton from "../Components/CartItemSkeleton";
import React from "react";

const Cart = ()=>{

    const navigate = useNavigate();
    const [products,setProducts] = useState([]);
    const [total,setTotal] = useState(0);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{

        if(!localStorage.getItem('token') || !localStorage.length){
            navigate('/login');
            return;
        }

        let url = `${BASE_URL}/product/get/all`;

        let options = {
            headers:{
                'Content-Type':'application/json',
                token: localStorage?.getItem('token'),
            }
        }

        fetch(url,options)
            .then((response)=> response.json())
            .then((result)=>{
                if(result.status)
                {
                    setProducts(result.content.data);
                    const totalPrice = result.content.data.reduce((accumulator ,item) => {
                        return accumulator += item.price * item.quantity;
                      }, 0);
                    setTotal(Number(totalPrice));
                    if(result.content.data.length > 0){
                        setTimeout(()=>{
                            setLoading(false);
                        },1500);    
                    }else{
                        setLoading(false);
                    }
                }
            })
            .catch((err)=>{
                console.log("Something went wrong: ",err);
            })
    },[]);  

    return(
        <main className="w-full">
            <div className="w-11/12 mx-auto mb-[50px]">
                <Navbar/>
                <div className="w-full">
                    {
                        !loading && 
                        products.length == 0 && 
                        <div className="w-full mt-20 flex flex-col items-center">
                            <img 
                                className="w-[60%] h-[350px] object-contain" 
                                src={require("../Assets/empty.jpg")} 
                                alt="Empty Cart" 
                            />
                            <h1 className="font-logo mt-10 font-bold text-2xl">;(</h1>
                            <h1 
                                className="text-lg text-semibold2 mt-">
                                Don't be sad ... There are enough products at
                                <span className="font-logo text-xl font-bold ml-2">FASCO</span>
                            </h1>
                        </div>
                    }
                    {
                        products.length > 0 || loading && 
                        <div className="w-full flex justify-between my-10 border-b-2 pb-5">
                            <h1 className="basis-[30%] text-md font-bold">Product</h1>
                            <h1 className="text-md basis-[20%] font-bold">Price</h1>
                            <h1 className="text-md basis-[20%] font-bold">Quantity</h1>
                            <h1 className="text-md basis-[20%] font-bold">Total</h1>
                        </div>
                    }
                    {
                        !loading && products.map((item,index)=>(
                            <CartItem key={index} Product={item} setProducts={setProducts} setTotal={setTotal} />
                        ))
                    }
                    {
                        loading && (
                            <React.Fragment>
                                <CartItemSkeleton/>
                                <CartItemSkeleton/>
                            </React.Fragment>
                        )
                    }
                </div>
                {/* <div className="w-full flex flex-col items-end mt-10">
                    <div className="w-[30%] flex justify-between">
                        <h1 className="font-bold text-md">Sub Total</h1>
                        <h1 className="font-bold text-md font-logo">${total}</h1>
                    </div>
                    <button className="mt-5 bg-black rounded text-white font-semibold w-[30%] py-2">Checkout</button>
                </div> */}
            </div>
            <NewsLetter/>
            <HomeFooter/>
        </main>
    )
}

export default Cart;
import Navbar from "../Partials/Navbar"
import CartItem from "../Components/CartItem";
import NewsLetter from "../Components/NewsLetter";
import HomeFooter from "../Components/HomeFooter";
import { useEffect , useState } from "react";
import { BASE_URL } from "../Constants";

const Cart = ()=>{


    const [products,setProducts] = useState([]);
    const [total,setTotal] = useState(0);

    useEffect(()=>{
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
                    setTotal(totalPrice);
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
                    <div className="w-full flex justify-between my-10 border-b-2 pb-5">
                        <h1 className="basis-[30%] text-md font-bold">Product</h1>
                        <h1 className="text-md basis-[20%] font-bold">Price</h1>
                        <h1 className="text-md basis-[20%] font-bold">Quantity</h1>
                        <h1 className="text-md basis-[20%] font-bold">Total</h1>
                    </div>
                    {
                        products.map((item,index)=>(
                            <CartItem key={index} Product={item} setProducts={setProducts} setTotal={setTotal} />
                        ))
                    }
                </div>
                <div className="w-full flex flex-col items-end mt-10">
                    <div className="w-[30%] flex justify-between">
                        <h1 className="font-bold text-md">Sub Total</h1>
                        <h1 className="font-bold text-md font-logo">${total}</h1>
                    </div>
                    <button className="mt-5 bg-black rounded text-white font-semibold w-[30%] py-2">Checkout</button>
                </div>
            </div>
            <NewsLetter/>
            <HomeFooter/>
        </main>
    )
}

export default Cart;
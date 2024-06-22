import Navbar from "../Partials/Navbar"
import CartItem from "../Components/CartItem";
import NewsLetter from "../Components/NewsLetter";
import HomeFooter from "../Components/HomeFooter";


const Cart = ()=>{


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
                    <CartItem/>
                </div>
                <div className="w-full flex flex-col items-end mt-10">
                    <div className="w-[30%] flex justify-between">
                        <h1 className="font-bold text-md">Sub Total</h1>
                        <h1 className="font-bold text-md font-logo">$100.00</h1>
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
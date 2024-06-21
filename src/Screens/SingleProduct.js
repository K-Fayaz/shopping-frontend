import Navbar from "../Partials/Navbar";
import { useEffect, useState } from "react";
import { STORE_API } from "../Constants";
import { Rating } from "@mui/material";
// import {CategoryIcon} from '@mui/icons-material/';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import NewsLetter from "../Components/NewsLetter";
import HomeFooter from "../Components/HomeFooter";
import SingleProductSkeleton from "../Components/SingleProductSkeleton";

const SingleProduct = ()=>{

    let [product,setProduct] = useState(null);
    let [count,setCount] = useState(0);
    const [loading,setloading] = useState(true);

    const handleCountIncreasre = ()=>{
        setCount((prev)=>(prev+1));
    }

    const handleCountDecrease = ()=>{
        setCount((prev)=>(prev-1));
    }
    
    useEffect(()=>{
        
        let chunks = window.location.href.split("/");
        let id = chunks[chunks.length-1];
        
        let url = `${STORE_API}/products/${id}`;

        if(!id && Number(id) == NaN){
            return;
        }

        fetch(url)
            .then((response)=> response.json())
            .then((result)=> {
                console.log(result);
                setTimeout(()=>{
                    setloading(false);
                },3000);
                setProduct(result);
            })
            .catch((err)=>{
                console.log("Something went wrong: ",err);
            })

    },[]);    

    return(
        <main className="w-full">
            <div className="w-11/12 mx-auto mb-[100px]">
                <Navbar/>
                {
                    loading && <SingleProductSkeleton/>
                }
                {
                    !loading && <div className="w-full flex mt-10">
                                    <section className="h-[450px] basis-[50%] border-r-2">
                                        <img className="object-contain h-[450px] w-full" src={product.image} alt={product.title} />
                                    </section>
                                    <section className="basis-[50%] pl-10">
                                        <h1 className="font-logo text-md text-[#666666]">FASCO</h1>
                                        <h1 className="text-xl font-bold mt-3">{product.title}</h1>
                                        <div className="mt-3 flex flex-row items-center">
                                            <ShoppingBagIcon/>
                                            <p className="ml-3">{product.category}</p>
                                        </div>
                                        <div className="flex flex-row mt-3 items-center">
                                            <Rating name="read-only" readOnly value={product.rating.rate} size="small" />
                                            <p className="ml-2">({product.rating.count})</p>
                                        </div>
                                        <details className="my-3">
                                            <summary>Description</summary>
                                            <p className="text-sm text-[#666666]">{product.description}</p>
                                        </details>
                                        <h1 className="font-logo font-bold text-xl mt-2">${product.price}</h1>

                                        <section className="flex justify-between items-center mt-5">
                                            <div className="flex basis-[100px] items-center justify-between">
                                                <button 
                                                    disabled={count === 0}
                                                    className={`font-bold text-xl ${count == 0 ? 'text-[#666666]':''}`}
                                                    onClick={()=>setCount((prev)=>(prev-1))}
                                                >-</button>
                                                <p>{count}</p>
                                                <button 
                                                    className="font-bold text-xl"
                                                    onClick={()=>setCount((prev)=>(prev+1))}
                                                >+</button>
                                            </div>
                                            <button 
                                                className="basis-[75%] py-2 border border-black hover:bg-black hover:text-white font-bold"
                                            >Add to Cart</button>
                                        </section>
                                    </section>
                                </div>
                }
            </div>
            <NewsLetter/>
            <HomeFooter/>
        </main>
    )
};

export default SingleProduct;
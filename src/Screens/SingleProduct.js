import Navbar from "../Partials/Navbar";
import { useEffect, useState } from "react";
import { BASE_URL, STORE_API } from "../Constants";
import { Rating } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import NewsLetter from "../Components/NewsLetter";
import HomeFooter from "../Components/HomeFooter";
import SingleProductSkeleton from "../Components/SingleProductSkeleton";
import { useNavigate } from "react-router-dom";


const SingleProduct = ()=>{

    let [product,setProduct] = useState(null);
    let [count,setCount] = useState(1);
    let [clicked,setClicked] = useState(false);
    let [removeClicked,setRemoveClicked] = useState(false);
    const [loading,setloading] = useState(true);
    const [added,setAdded] = useState(false);

    const navigate = useNavigate();

    const handleAddtoCart = ()=>{
        
        setClicked(true);
        if(!localStorage.getItem('token') || !localStorage.length) {
            console.log("You need to login first!!");
            navigate("/login");
            return;
        }

        let payload = { quantity: count ,...product };
        let options = {
            method:"POST",
            body: JSON.stringify(payload),
            headers:{
                'Content-Type':'application/json',
                token: localStorage.getItem('token')
            }
        };

        let url = `${BASE_URL}/product/add`;

        fetch(url,options)
            .then(response=>response.json())
            .then(result =>{
                console.log("Result is :",result);
                if(result.status){
                    setAdded(true);
                    setClicked(false);
                }
            })
            .catch((err)=>{
                console.log("Something went wrong: ",err);
                setClicked(false);
            })
    } 

    const handleCartRemove = ()=>{
        let chunks = window.location.href.split("/");
        let id = chunks[chunks.length-1];

        setRemoveClicked(true);

        if(!localStorage.getItem('token')|| !localStorage.length){
            navigate('/login');
            return;
        }

        let payload = {
            productId: id
        }

        let url = `${BASE_URL}/product/remove?productId=${id}`;
        let options = {
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                token: localStorage?.getItem('token')
            }
        };

        fetch(url,options)
            .then((response)=> response.json())
            .then((result)=>{
                if(result.status){
                    setAdded(false);
                    setRemoveClicked(false);
                }
            })
            .catch((err)=>{
                console.log(err);
                setRemoveClicked(false);
            })
    }


    useEffect(()=>{
        
        if(!localStorage.getItem('token') || !localStorage.length) {
            navigate("/login");
            return;    
        }

        let chunks = window.location.href.split("/");
        let id = chunks[chunks.length-1];

        let url = `${BASE_URL}/product/get?productId=${id}`;

        let options = {
            headers:{
                token: localStorage?.getItem('token'),
            }
        };

        fetch(url,options)
            .then((response)=> response.json())
            .then((result)=>{
                console.log("Required product is :",result);
                if(result.status){
                    setAdded(result.content.data.exists);
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    },[]);
    
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
                                                    disabled={count === 1}
                                                    className={`font-bold text-xl ${count == 1 ? 'text-[#666666]':''}`}
                                                    onClick={()=>setCount((prev)=>(prev-1))}
                                                >-</button>
                                                <p>{count}</p>
                                                <button 
                                                    className="font-bold text-xl"
                                                    onClick={()=>setCount((prev)=>(prev+1))}
                                                >+</button>
                                            </div>
                                            {
                                                !added && <button
                                                    disabled={clicked || added }
                                                    className='basis-[75%] py-2 border border border-black hover:text-white font-bold hover:bg-black' 
                                                    onClick={handleAddtoCart}>
                                                        Add to Cart    
                                                </button>
                                            }
                                            {
                                                added && <button 
                                                            disabled={removeClicked}
                                                            className='basis-[75%] py-2 text-white font-bold bg-green-600'
                                                            onClick={handleCartRemove}
                                                        >Remove From Cart</button>
                                            }
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
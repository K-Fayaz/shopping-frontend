import { useEffect, useState } from "react";
import HomeFooter from "../Components/HomeFooter";
import NewsLetter from "../Components/NewsLetter";
import Navbar from "../Partials/Navbar";
import { STORE_API } from "../Constants.js";
import ProductCard from "../Components/ProductCard.js";
import ProductsSkeleton from "../Components/ProductsSkeleton.js";

const Products = ()=>{

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [query,setQuery] = useState(null);
    const [sort,setSort] = useState(null);

    let skeletons = [
        {
            name:'1'
        },
        {
            name:'1'
        },
        {
            name:'1'
        },
        {
            name:'1'
        },
        {
            name:'1'
        },
        {
            name:'1'
        },
        {
            name:'1'
        },
    ]


    useEffect(()=>{
        let url;
        
        setLoading(true);


        if(!query)
            url = `${STORE_API}/products`;
        else
            url = `${STORE_API}${query}`;

        if(sort !== null)
            url = `${url}?sort=${sort}`;


        fetch(url)
            .then((response)=> response.json())
            .then((result)=> {
                console.log(result);
                setTimeout(()=>{
                    setLoading(false);
                },4000);
                setProducts(result);
            })
            .catch((err)=>{
                console.log(err);
            })

    },[query,sort]);

    return(
        <main className="w-full">
            <div className="w-11/12 mx-auto mb-[50px]">
                <Navbar/>
                <div className="flex mt-[25px]">
                    <section className="w-1/4">
                        <h1 className="font-bold text-2xl mt-5 mb-10">Filters</h1>
                        <div className="w-11/12">
                            <h1 className="font-bold text-md mt-3">Categories</h1>
                            <p 
                                className={`text-sm text-[#8A8A8A] mt-3 cursor-pointer ${query === '/products' ? 'text-black font-bold':''} `}
                                onClick={()=> setQuery("/products")}
                            >All Categories</p>
                            <p 
                                className={`text-sm text-[#8A8A8A] mt-3 cursor-pointer ${query === '/products/category/electronics' ? 'text-black font-bold':''}`}
                                onClick={()=> setQuery("/products/category/electronics")}
                            >Electronics</p>
                            <p 
                                className={`text-sm text-[#8A8A8A] mt-3 cursor-pointer ${query === "/products/category/men's clothing" ? 'text- font-bold':''}`}
                                onClick={()=> setQuery("/products/category/men's clothing")}
                            >Men's Fashion</p>
                            <p 
                                className={`text-sm text-[#8A8A8A] mt-3 cursor-pointer ${query === "/products/category/jewelery" ? 'text-black font-bold':''}`}
                                onClick={()=> setQuery("/products/category/jewelery")}
                            >Jewelery</p>
                            <p 
                                className={`text-sm text-[#8A8A8A] mt-3 cursor-pointer ${query === "/products/category/women's clothing" ? 'text-black font-bold':''}`}
                                onClick={()=> setQuery("/products/category/women's clothing")}
                            >Women's Fashion</p>
                        </div>
                        <div className="w-11/12 mt-10">
                            <h1 className="font-bold text-md mt-3">Price</h1>
                            <p 
                                className={`text-sm text-[#8A8A8A] mt-3 cursor-pointer ${sort === null ? 'text-black font-bold':''} `}
                                onClick={()=>setSort(null)}
                            >Low to High</p>
                            <p 
                                className={`text-sm text-[#8A8A8A] mt-3 cursor-pointer ${sort === 'desc' ? 'text-black font-bold':''}`}
                                onClick={()=>setSort('desc')}
                            >High to Low</p>
                        </div>
                    </section>
                    <section className="w-3/4 grid grid-rows-auto grid-cols-3 gap-10">
                        {
                            !loading && products.map((item,index)=>(
                                            <ProductCard Product={item} key={index} />
                                        ))
                        }
                        {
                            loading && skeletons.map((item,index)=>(
                                            <ProductsSkeleton key={index}/>
                                        ))
                        }
                    </section>
                </div>
            </div>
            <NewsLetter/>
            <HomeFooter/>
        </main>
    )   
};

export default Products;
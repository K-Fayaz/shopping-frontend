
import Navbar from "../Partials/Navbar";
import Hero from "../Components/Hero";
import Brands from "../Components/Brands";
import NewArrivals from "../Components/NewArrivals";
import NewsLetter from "../Components/NewsLetter";
import HomeFooter from "../Components/HomeFooter";
import { useEffect } from "react";
import { CiHome } from "react-icons/ci";


const Home = ()=>{
    return(
        <main className="w-full">
            <div className="w-3/4 mx-auto">
                <Navbar/>
                <Hero/>
                <Brands/>
                <NewArrivals/>
                <h1 className="w-full bg-red-500 font-bold text-3xl">HI This is a Test application Is it updating itself ? when I edit the file? <CiHome/></h1>
            </div>
            <NewsLetter/>
            <HomeFooter/>
        </main>
    )
};

export default Home;
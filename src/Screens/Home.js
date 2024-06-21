
import Navbar from "../Partials/Navbar";
import Hero from "../Components/Hero";
import Brands from "../Components/Brands";
import NewArrivals from "../Components/NewArrivals";
import NewsLetter from "../Components/NewsLetter";
import HomeFooter from "../Components/HomeFooter";

const Home = ()=>{
    return(
        <main className="w-full">
            <div className="w-3/4 mx-auto">
                <Navbar/>
                <Hero/>
                <Brands/>
                <NewArrivals/>
            </div>
            <NewsLetter/>
            <HomeFooter/>
        </main>
    )
};

export default Home;
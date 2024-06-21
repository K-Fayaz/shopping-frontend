
import HeroComponent from "./HeroComponent";

const Hero = ()=>{
    return(
        <main className="flex h-[500px] justify-between mt-10">
            <HeroComponent image="man-1.png"/>
            <div className="basis-[30%] flex flex-col justify-between">
                <section className="bg-[#E0E0E0] rounded-lg w-full">
                    <img src={require("../Assets/friends-1.png")} alt="Friends 1" />
                </section>
                <section className="flex flex-col items-center">
                    <h1 className="font-[100px] text-[#484848] font-hero1 text-[60px]">ULTIMATE</h1>
                    <h1 className="font-hero1 text-[70px]"> SALE </h1>
                    <h1 className="my-2">New Collection</h1>
                    <button className="bg-black mb-4 py-2 px-8 text-white rounded-md">Shop Now</button>
                </section>
                <section className="bg-[#E0E0E0] rounded-lg w-full">
                    <img src={require("../Assets/friends-2.png")} alt="Friends 1" />
                </section>
            </div>
            <HeroComponent image="man-2.png"/>
        </main> 
    )
};

export default Hero;




const Brands = ()=>{
    return(
        <main className="w-full flex justify-between my-10">
            <div className="basis-[18%] flex justify-center items-center h-[100px]">
                <img className="object-contain" src={require("../Assets/brand-1.png")} alt="brand 1" />
            </div>
            <div className="basis-[18%] flex justify-center items-center h-[100px]">
                <img src={require("../Assets/brand-2.png")} alt="brand 2" />
            </div>
            <div className="basis-[18%] flex justify-center items-center h-[100px]">
                <img src={require("../Assets/brand-3.png")} alt="brand 3" />
            </div>
            <div className="basis-[18%] flex justify-center items-center h-[100px]">
                <img src={require("../Assets/brand-4.png")} alt="brand 4" />
            </div>
            <div className="basis-[18%] flex justify-center items-center h-[100px]">
                <img src={require("../Assets/brand-5.png")} alt="brand 5" />
            </div>
        </main>
    )
};

export default Brands;
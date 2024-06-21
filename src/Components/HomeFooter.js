

const HomeFooter = ()=>{
    return(
        <main className="w-full mt-10 mb-10">
            <div className="w-3/4 mx-auto mt-3 border-t flex justify-between">
                <h1 className="text-3xl font-logo font-bold mt-5">FASCO</h1>
                <div className="flex basis-[45%] justify-around mt-5">
                    <p className="text-[#484848] text-xs">Support Corner</p>
                    <p className="text-[#484848] text-xs">Invoicing</p>
                    <p className="text-[#484848] text-xs">Contract</p>
                    <p className="text-[#484848] text-xs">Careers</p>
                    <p className="text-[#484848] text-xs">Blog</p>
                    <p className="text-[#484848] text-xs">FAQ's</p>
                </div>
            </div>
        </main>
    )
};

export default HomeFooter;
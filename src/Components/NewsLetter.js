import { TextField } from "@mui/material";



const NewsLetter = ()=>{

    const handleFormSubmit = (e)=>{
        e.preventDefault();
    }

    return(
        <main className="w-full h-[450px] mt-10">
            <div className="w-3/4 mx-auto border-t h-full flex">
                <div className="w-11/12 mx-auto mt-10 flex justify-between items-center">
                    <img className="object-contain h-full" src={require("../Assets/news-1.png")} alt="News letter -1"/>
                    <section className="flex flex-col items-center basis-[55%]">
                        <h1 className="font-bold text-2xl text-center">Subscribe To Our Newsletter</h1>
                        <p className="text-[#8A8A8A] text-xs my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
                        </p>
                        <form onSubmit={handleFormSubmit} className="w-full">
                            <div>
                                <TextField
                                    type="email"
                                    required
                                    className="w-full"
                                    placeholder="emily@gmail.com"
                                
                                />
                            </div>
                            <button className="bg-black py-2 px-5 text-white rounded mt-3 mx-auto">Subscribe Now</button>
                        </form>
                    </section>
                    <img className="object-contain h-full" src={require("../Assets/news-2.png")} alt="News letter -2"/>
                </div>
            </div>
        </main>
    )
};

export default NewsLetter;
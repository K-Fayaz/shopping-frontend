import Navbar from "../Partials/Navbar";


const Products = ()=>{
    return(
        <main className="w-full">
            <div className="w-11/12 mx-auto">
                <Navbar/>
                <div className="flex">
                    <section className="w-1/4 bg-red-300">HI</section>
                    <section className="w-3/4 bg-green-300">Hola</section>
                </div>
            </div>
        </main>
    )   
};

export default Products;
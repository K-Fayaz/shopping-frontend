

import { Link } from "react-router-dom";

const ProductCard = ({ Product })=>{
    return(
        <main className="h-[380px] hover:shadow-xl px-3 cursor-pointer">
            <img className="w-full h-[70%] object-contain" src={Product.image} alt={Product.id} />
            <div>
                <p className="text-xs font-bold mt-5 hover:underline">
                    <Link to={`/product/${Product.id}`}>
                        {Product.title}
                    </Link>
                </p>
                <p className="font-logo font-bold text-lg mt-2">${Product.price}</p>
            </div>
        </main>
    )
};

export default ProductCard;
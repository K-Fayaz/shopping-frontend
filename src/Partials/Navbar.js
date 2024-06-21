
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <header className="flex justify-between items-center py-5">
            <Link to="/">
                <h1 className="text-3xl font-logo font-bold">FASCO</h1>
            </Link>
            <div className="basis-[55%]">
                <ul className="flex justify-between items-center">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/#">Deals</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/login">Sign In</Link>
                    </li>
                    <li className="bg-black text-white rounded-md py-1 px-3 drop-shadow-2xl">
                        <button>
                            <Link to="/signup">Sign up</Link>
                        </button>
                    </li>
                
                </ul>
            </div>
        </header>
    )
}

export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

const Navbar = ()=>{

    const [token,setToken] = useState(localStorage?.getItem('token'));
    const navigate = useNavigate();
    
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        setToken(null);
        navigate('/');
    }

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
                    {
                        !token && <li>
                                    <Link to="/login">Sign In</Link>
                                </li>
                    }
                    {
                        !token && <li className="bg-black text-white rounded-md py-1 px-3 drop-shadow-2xl">
                                    <button>
                                        <Link to="/signup">Sign up</Link>
                                    </button>
                                </li>
                    }
                    {
                        token && <li>
                                    <div className="flex items-center">
                                        <ShoppingCartIcon className="mr-2"/>
                                        <Link to="/cart">Cart</Link>
                                    </div>
                                </li>
                    }
                    {
                        token && <li className="bg-black text-white rounded-md py-1 px-3 drop-shadow-2xl">
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar;
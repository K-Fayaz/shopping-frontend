

const Navbar = ()=>{
    return(
        <header className="flex justify-between items-center py-5">
            <h1 className="text-3xl font-logo font-bold">FASCO</h1>
            <div className="basis-[55%]">
                <ul className="flex justify-between items-center">
                    <li>Home</li>
                    <li>Deals</li>
                    <li>New Arrivals</li>
                    <li>Sign In</li>
                    <li className="bg-black text-white rounded-md py-1 px-3 drop-shadow-2xl">
                        <button>Sign up</button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;
import { TextField } from "@mui/material";



const Login = ()=>{

    const handleSignInFormSubmit = (e)=>{
        e.preventDefault();
    }
    
    return(
        <main className="w-full h-screen grid place-items-center">
            <section className="w-3/4 flex">
                <img className="object-contain basis-[50%] h-[450px]" src={require("../Assets/login.png")} alt="Login page hero"/>
                <div className="basis-[50%]">
                    <h1 className="text-3xl font-logo font-bold">FASCO</h1>
                    <p className="text-md font-semibold mt-5">Sign in to FASCO</p>
                    <form className="w-full my-10" onSubmit={handleSignInFormSubmit}>
                        <div className="mt-[35px]">
                            <TextField
                                className="w-full"
                                variant="standard"
                                placeholder="emily@gmail.com"
                                autoComplete="off"
                                type="email"
                            />
                        </div>
                        <div className="mt-[35px]">
                            <TextField
                                className="w-full"
                                variant="standard"
                                type="password"
                                placeholder="**********"
                            />
                        </div>
                        <button className="w-full rounded bg-black text-white py-2 mt-10">Sign In</button>
                    </form>
                    <button className="w-full border rounded font-semibold border-blue-500 py-2">Register Now</button>
                </div>
            </section>
        </main>
    )
};

export default Login;
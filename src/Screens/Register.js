import { TextField } from "@mui/material";



const Register = ()=>{

    const handleFormSubmit = (e)=>{
        e.preventDefault();
    }
    
    return(
        <main className="w-full h-screen grid place-items-center">
            <section className="w-3/4 flex">
                <img className="object-contain basis-[50%] h-[450px]" src={require("../Assets/register.png")} alt="Login page hero"/>
                <div className="basis-[50%]">
                    <h1 className="text-3xl font-logo font-bold">FASCO</h1>
                    <p className="text-md font-semibold mt-5">Register to FASCO</p>
                    <form className="w-full mt-10 mb-5" onSubmit={handleFormSubmit}>
                        <div className="mt-[25px]">
                            <TextField
                                className="w-full"
                                variant="standard"
                                placeholder="Kate Bishop"
                                autoComplete="off"
                                type="text"
                            />
                        </div>
                        <div className="mt-[25px]">
                            <TextField
                                className="w-full"
                                variant="standard"
                                placeholder="kate@gmail.com"
                                autoComplete="off"
                                type="email"
                            />
                        </div>
                        <div className="mt-[25px]">
                            <TextField
                                className="w-full"
                                variant="standard"
                                type="password"
                                placeholder="**********"
                            />
                        </div>
                        <button className="w-full rounded bg-black text-white py-2 mt-5">Sign In</button>
                    </form>
                    <button className="w-full border rounded font-semibold border-blue-500 py-2">Register Now</button>
                </div>
            </section>
        </main>
    )
};

export default Register;
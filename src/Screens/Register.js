import { TextField } from "@mui/material";
import { BASE_URL } from "../Constants";
import { useNavigate } from "react-router-dom";


const Register = ()=>{

    const navigate = useNavigate();

    const handleFormSubmit = (e)=>{
        e.preventDefault();

        let payload = {};

        let formData = new FormData(e.target);

        for(let [key,value] of formData.entries()){
            payload[key] = value;
        }

        let url = `${BASE_URL}/user/signup`;

        let options = {
            method:"POST",
            body: JSON.stringify(payload),
            headers:{
                'Content-Type':'application/json'
            }
        }

        fetch(url,options)
            .then((response)=> response.json())
            .then((result)=> {
                if(result.status){
                    localStorage.setItem('token',result.content.meta.token);
                    navigate("/");
                }else{
                    console.log("Something has gone wrong:(",result);
                }
            })
            .catch((err)=> console.log("Something went wrong:",err));

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
                                name="username"
                            />
                        </div>
                        <div className="mt-[25px]">
                            <TextField
                                className="w-full"
                                variant="standard"
                                placeholder="kate@gmail.com"
                                autoComplete="off"
                                type="email"
                                name="email"
                            />
                        </div>
                        <div className="mt-[25px]">
                            <TextField
                                className="w-full"
                                variant="standard"
                                type="password"
                                placeholder="**********"
                                name="password"
                            />
                        </div>
                        <button className="w-full rounded bg-black text-white py-2 mt-5">Register</button>
                    </form>
                    <button 
                        className="w-full border rounded font-semibold border-blue-500 py-2"
                        onClick={()=>navigate('/login')}
                    >Sign In</button>
                </div>
            </section>
        </main>
    )
};

export default Register;


const HeroComponent = ({ image })=>{
    return(
        <section className="bg-[#E0E0E0] basis-[30%] flex flex-col-reverse rounded-lg">
                <img className="object-contain w-[100%] h-[80%]" src={require(`../Assets/${image}`)} alt="Image Man 1"/>
                <div className="text-white"></div>
            </section>
    )
}

export default HeroComponent;
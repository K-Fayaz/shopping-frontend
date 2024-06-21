
import Rating from '@mui/material/Rating';

const ItemCard = ({ Item })=>{
    return(
        <main className="h-[300px] grid place-items-center my-5 drop-shadow-lg">
            <div className=" h-full">
                <img className="rounded-md" src={require(`../Assets/${Item.image}.png`)} alt="Arrival 1" />
                <div className='flex justify-between my-4'>
                    <div>
                        <h1 className='text-sm'>{Item.name}</h1>
                        <p className='text-xs text-[#8A8A8A]'>Al Karam</p>
                    </div>
                    <Rating name='new-arrival-1' size='small' value={5} readOnly />
                </div>
                <p className='text-xs text-[#8A8A8A]'>(4.1k) Customer Reviews </p>
                <div className='flex flex-row justify-between my-3'>
                    <h1 className='font-bold text-2xl font-logo'>$95.50</h1>
                </div>
            </div>
        </main>
    )
};

export default ItemCard;
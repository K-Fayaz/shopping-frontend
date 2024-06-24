import { Skeleton } from "@mui/material";

const CartItemSkeleton = ()=>{
    return(
        <div className="w-full flex justify-between mt-5 border-b-2 pb-5">
                <div className="basis-[30%] flex">
                    <Skeleton variant="rectangular" className="w-[50%]" height={250} />
                        <div className="ml-5">
                            <Skeleton variant="text" className="w-[100px]" />
                            <Skeleton variant="rectangular" className="w-[100px] h-[30px]" />
                        </div>
                </div>
                <div className="basis-[20%]">
                     <Skeleton variant="text" className="w-[100px] h-[50px]" />
                </div>
                <div className="basis-[20%]">
                    <div className="border-2 rounded flex items-center w-[100px] justify-center">
                        <Skeleton variant="rectangular" className="w-[100px] h-[30px]" />
                        <Skeleton variant="circular" width={40} height={4} />
                        <Skeleton variant="rectangular" className="w-[100px] h-[30px]" />
                    </div>
                </div>  
                <div className="basis-[20%]"> 
                    <Skeleton variant="text" className="text-md font-bold" />
                </div>
        </div>
    )
};

export default CartItemSkeleton;
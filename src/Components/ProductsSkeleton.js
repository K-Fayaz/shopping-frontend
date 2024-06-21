
import { Skeleton } from "@mui/material";

const ProductsSkeleton = ()=>{
    return(
        <main className="h-[380px] px-3 cursor-pointer">
            <Skeleton className="w-full" variant="rectangular" height={300} />
            <div>
                <Skeleton className="text-lg font-bold mt-5" variant="text"/>
                <Skeleton className="font-bold text-lg mt-2 w-[100px]" variant="text"/>
            </div>
        </main>
    )
};

export default ProductsSkeleton;
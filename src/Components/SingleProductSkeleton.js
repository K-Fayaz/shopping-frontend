import { Skeleton } from "@mui/material";


const SingleProductSkeleton = ()=>{
    return(
        <div className="w-full flex mt-10">
                                    <section className="h-[450px] basis-[50%]">
                                        <Skeleton variant="rectangular" className="w-full" height='450px' />
                                    </section>
                                    <section className="basis-[50%] pl-10">
                                        <Skeleton variant="text" className="text-md w-[200px]"/>
                                        <Skeleton variant="text" className="text-xl font-bold mt-3 w-[200px]"/>
                                        <div className="mt-3 flex flex-row items-center w-[20%]">
                                            <Skeleton variant="text" className="text-md w-[50px]"/>
                                            <Skeleton variant="text" className="text-md ml-3 w-[50px]"/>
                                        </div>
                                        <div className="flex flex-row mt-3 justify-between items-center w-[20%] mb-3">
                                            <Skeleton variant="circular"  width={20} height={20} />
                                            <Skeleton variant="circular"  width={20} height={20}/>
                                            <Skeleton variant="circular"  width={20} height={20} />
                                            <Skeleton variant="circular"  width={20} height={20} />
                                            <Skeleton variant="circular"  width={20} height={20} />
                                        </div>
                                        <div className="my-3">
                                            <Skeleton variant="rectangular" className="text-md"/>
                                            <Skeleton variant="rectangular" height={100}/>
                                        </div>
                                        <Skeleton variant="rectangular" className="w-[100px] mt-5"/>

                                        <section className="flex justify-between items-center mt-5">
                                            <div className="flex basis-[80px] mr-5 items-center justify-between">
                                                <Skeleton variant="rectangular" className="w-[50px]" />
                                                <Skeleton variant="rectangular" className="w-[50px]" />
                                                <Skeleton variant="rectangular" className="w-[50px]" />
                                            </div>
                                            <Skeleton variant="rectangular" className="basis-[75%] py-2" />
                                        </section>
                                    </section>
                                </div>
    )
}

export default SingleProductSkeleton;
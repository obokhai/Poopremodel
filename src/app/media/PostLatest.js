import Image from "next/image";
import Link from 'next/link'

export default function PostLatest() { 

    return <Link href="/post">
    <div className="w-full flex mb-8 cursor-pointer">
                <Image
                    src="/assets/blog2.png"
                    alt="Pooplogg Logo"
                    width={40}
                    height={40}
                    priority
                    className="h-[97px] w-[150px]"
                    />
                
                <div className="ml-4 relative">
                    <p className="text-[10px]">April 27th 2023</p>
                    <p className="text-[14px] font-bold text-darkblue mt-2 leading-[16px]">The most popular business of the year</p>
                    <div className="flex justify-between w-[100%] items-center bottom-0  absolute">
                        <div className="flex justify-between w-[45%] items-center">
                            <Image

                            src="/assets/blog1.png"
                            alt="Pooplogg Logo"
                            width={50}
                            height={50}
                            priority
                            className="rounded-[45%] h-[30px] w-[30px]"
                            />
                            <p className="text-[12px] text-darkblue font-bold">Jeffery Jeff</p>
                        
                        </div>
                        <div className="w-[45%]">
                            <p className="text-[10px]">1 min read</p>
                        </div>
                        
                    </div>
                </div>
    </div>
    </Link>
}
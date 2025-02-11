import Image from "next/image";
import Link from 'next/link'

export default function PostMain({image}) {

    return <Link href="/post" className="lg:w-fit w-[100%]">
            <div className=" w-full cursor-pointer mb-4">
    <img
        src={image}
        alt="Pooplogg Logo"
        width="100%"
        height={250}
        priority
        
    />
    <div className="rounded-md border border-darkblue p-2 mt-2">
    <div className="flex justify-between items-center ">
   
    <p className="mt-1 text-[14px] font-bold text-neon w-[70%] break-text">The most popular business of the year</p>
    <p className="mt-1 text-[12px]">May 4th 2022</p>
    </div>
    
    {/* <p className=" text-[10px] text-grey w-[350px] break-text">
    Then King David went in and sat before the Lord, and he said:“Who am I, Lord God, and what is my family, that you have brought me this far? 17 And as if this were not enough in your sight, my God, you have spoken about the future of the house of your servant. You, Lord God, have looked on me as though I were the most exalted of men
    </p> */}
    <div className="flex justify-between  items-center mt-2">
        <div className="flex justify-between w-[30%] items-center">
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

    <p className="text-[10px]">1 min read</p>
    </div>
    </div>
</div>
</Link>
}
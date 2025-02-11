import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({icon, title, w=50 , h=50, bgcolor}) {

    return (     
     <Link className={`" border-[#0B4870]': 'bg-[#ECFFF4]'} h-[250px] w-[240px] block-services rounded-md cursor-pointer p-4 flex flex-col justify-between text-center items-center border border-darkblue"`} href="https://dashboard.pooplogg.com/welcome-page" target="_blank">
        <div className="rounded-md p-2">

        <Image
                src={icon}
                alt="evacuation"
                width={w}
                height={h}
                priority
                
                /> 
        </div>
        <p className="font-bold text-darkblue text-[12px] my-4">{title}</p>
        <Image
        src="/assets/lines.svg"
        alt="lines"
        width={100}
        height={50}
        priority
      /> 
      </Link>
       
    )
  }
  
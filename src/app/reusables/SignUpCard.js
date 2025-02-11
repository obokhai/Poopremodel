import Link from "next/link";
import Image from "next/image";

export default function SignUpCard({icon, title, cname}) {

    return (    

      <Link href="https://dashboard.pooplogg.com/welcome-page" target="_blank" className="rounded-md border block-services relative flex flex-col items-center border-darkblue cursor-pointer px-1 py-4 justify-end">
      <div  className="w-[100%]">
       
          <img
            src={`${icon}`}
            alt="account"
            className={`${cname} top-1`} 
          /> 
          
       
        <div className=" text-darkblue text-[12px] font-bold mt-2 rounded bg-white w-full text-center items-center px-6 py-2 flex flex-col justify-center w-full items-center">
            {`Pooplogg For ${title}`}
        
            <Image
                src="/assets/lines.svg"
                alt="lines"
                width={100}
                height={50}
                priority
              /> 
              </div>
              
      </div>
      </Link>
     

    )
  }
  
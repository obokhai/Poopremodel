import Image from "next/image";

export default function ProcessCard({icon, title}) {

    return (     
     
      <div className="rounded-md  py-2 min-w-[15vw] ">
        <div className="flex flex-col lg:flex-row justify-left w-full items-center mt-1">
          <Image
            src={`/assets/${icon}.svg`}
            alt="account"
            width={30}
            height={30}
            priority
          /> 
          {/* <p className="text-darkgreen font-bold text-[40px]">01</p> */}
          <p className="text-white ml-2  font-bold text-[12px] mt-1">{title}</p>
        </div>     
      </div>


    )
  }
  
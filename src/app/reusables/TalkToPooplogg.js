import Image from "next/image";

export default function TalkToPooplogg() {

    return (     
      <div className="rounded-md lg:bg-darkblue h-fit px-4 py-2 flex flex-col lg:flex-row justify-between items-center lg:w-[50vw] w-full mt-4">
        <div className="lg:flex w-full hidden">
        <div className="flex justify-center w-auto p-2 rounded-md bg-white border border-darkblue items-center">
          <Image
            src={`/assets/customercare.svg`}
            alt="account"
            width={20}
            height={20}
            priority
          /> 
         </div>
         <div className=" ml-2">
         <p className="text-white text-[14px] font-bold">Talk to Pooplogg</p>
        <div className="flex  w-full items-center">
            <p className="text-[14px] text-white">Ready to Help:</p>
            <p className="text-[16px] font-bold text-neon ml-8">0700 0700 211</p>
          </div>
         </div>
         </div>
         <div className="flex w-full  justify-center  items-center mt-4 lg:mt-0"> 
          
          <div className="cursor-pointer border border-darkblue lg:border-white w-fit h-fit flex p-2  items-center rounded-md">
            <img src="/assets/playstore.svg" className='h-[15px] mr-2'/>
            <p className="text-[13px] font-normal lg:text-white text-darkblue">Get on Android</p>
          </div>
          
          
          <div className="cursor-pointer border border-darkblue lg:border-white w-fit h-fit flex p-2  items-center rounded-md ml-2">
            <img src="/assets/applealt.svg" className='h-[15px] mr-2 lg:block hidden'/>
            <img src="/assets/apple.svg" className='h-[15px] mr-2 lg:hidden block'/>
            <p className="text-[13px] font-normal lg:text-white text-darkblue">Get on Iphone</p>
          </div>
            </div>
      </div>


    )
  }
  
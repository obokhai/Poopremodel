import Image from "next/image";
import TalkToPooplogg from "../reusables/TalkToPooplogg";
export default function AboutUs() {
    
  
    return (
      <main className="flex min-h-screen flex-col items-center w-full mt-32 lg:mt-24">
        <div className="w-full w-screen aboutus-bg lg:h-[300px] h-[100px] text-white relative">
            <p className="font-bold text-[30px] absolute left-[5%] bottom-4">About Us</p>
        </div>

        <div className="max-w-6xl rounded-md lg:px-0 px-5  py-4 h-fit ">
            <p className="text-[20px] text-darkblue font-bold">
            This is Pooplogg
            </p>
            <div className="bg-neon w-[10%] h-[4px] rounded-[10px]"></div>
            <p className="text-[14px] leading-8 text-grey mt-1">
            Through technology and collaboration, we aim to transform the way cities and communities manage their waste water infrastructure and water resources, thus fostering resilience and sustainable development.
            </p>
        </div>
        <div className="flex lg:flex-row flex-col mt-12 max-w-6xl w-screen justify-between items-center">
            <div className="mission lg:h-[300px] h-[200px] p-4 lg:w-[25vw] w-[90%] rounded-[10px] lg:rounded-[20px]">
            <div className="bg-darkblue text-white py-2 px-4 rounded w-fit text-[12px] font-bold">Our Vision - Green Economy</div>
            </div>
            <div className="sustainability lg:my-0 my-4 h-[300px] p-4 lg:w-[25vw] w-[90%] rounded-[10px] lg:rounded-[20px]">
            <div className="bg-darkblue text-white py-2 px-4  rounded w-fit text-[12px] font-bold">Our Mission - Sustainability</div>
            </div> 
            <div className="tech h-[300px] p-4 lg:w-[25vw] w-[90%] rounded-[10px] lg:rounded-[20px]">
            <div className="bg-darkblue text-white py-2 px-4  rounded w-fit text-[12px] font-bold">Our Method - Technology</div>
            </div> 
        </div>
       
        {/* <div className="flex flex-col max-w-6xl w-screen mt-6 ">
            
            <div className="w-full sustainability p-4 h-[250px]">
                <div className="bg-darkblue text-white py-2 px-4  rounded w-fit text-[12px] font-bold">Our Goal - Sustainability</div>
            </div>
                <div className="bg-darkblue w-full p-4 text-[12px] text-white">
                A cleaner earth is our goal! We seek to deploy bespoke environmentally sustainable green solutions in every city or community of engagement.
                </div>
        </div> */}

        {/* <div className="flex flex-col-reverse lg:flex-row  mt-12 max-w-6xl w-screen justify-between items-center">
            
            <div className=" lg:w-[50vw] w-[90%] px-8 py-4">
            <p className="font-bold text-darkblue text-[18px]">Revolutionizing Waste Handling in the Developing World.</p>
            <div className="bg-neon w-[20%] h-[4px] rounded-[10px]"></div>
            <p className="text-[14px] leading-8 text-grey mt-4">
            Welcome to Pooplogg, where we are dedicated to transforming Waste Water collections, transportation and recycling in the developing world through innovative technology, advanced monitoring tools, and artificial intelligence (AI). With a mission to improve public health, protect the environment, and enhance the quality of life for communities, we are committed to revolutionizing the way Sewage Systems, Water Systems and all related infrastructure are managed and maintained.
            </p>
            </div>
            
            
            <div className="tech h-[300px] p-4 lg:w-[35vw] w-[90%] rounded-[10px] lg:rounded-[20px]">
            <div className="bg-darkblue text-white py-2 px-4  rounded w-fit text-[12px] font-bold">Our Method - Technology</div>
            </div> 
            <div className="bg-darkblue w-full p-4 text-[12px] text-white">
            At Pooplogg, Our customers are constantly served with easy to use dashboards and prompts.
                </div>
            
        </div> */}

        
        <div className="mt-14 max-w-6xl w-screen">
            <p className="font-bold text-[24px] text-darkblue text-center lg:text-left">Advisory Team</p>
            <div className="flex flex-col lg:flex-row w-full justify-between items-center mt-4">
                <div >
                <Image
                    src="/assets/founder.png"
                    alt="Pooplogg Logo"
                    width={250}
                    height={250}
                    priority
                    className="rounded-md"
                    /> 
                    <div className="bg-darkblue mt-2 rounded text-white p-2 text-center">
                       <p className="text-[16px] font-bold">Temitayo Ojeleke</p>
                       <p className="text-[12px] text-neon mt-2">CEO</p>
                    </div>
                </div>
                <div className="lg:my-0 my-8">
                <Image
                    src="/assets/adviser1.png"
                    alt="Adviser 1"
                    width={250}
                    height={250}
                    priority
                    className="rounded-md"
                    /> 
                    <div className="bg-darkblue mt-2 rounded text-white p-2 text-center">
                       <p className="text-[16px] font-bold">Felix Ekundayo</p>
                       <p className="text-[12px] text-neon mt-2">Adviser</p>
                    </div>
                </div>
                <div>
                <Image
                    src="/assets/adviser2.png"
                    alt="Adviser 2"
                    width={250}
                    height={250}
                    priority
                    className="rounded-md"
                    /> 
                    <div className="bg-darkblue mt-2 rounded text-white p-2 text-center">
                       <p className="text-[16px] font-bold">Kelvin Balogun</p>
                       <p className="text-[12px] text-neon mt-2">Adviser</p>
                    </div>
                </div>
            </div>
        </div>
        <TalkToPooplogg/>
      </main>
    )
}
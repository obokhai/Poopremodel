import TalkToPooplogg from "../reusables/TalkToPooplogg";

import SocialMediaIcon from "../reusables/SocialMediaIcon";

export default function Shop() {
    
    return (
      <main className="flex min-h-screen flex-col items-center w-full mt-32 lg:mt-24">
        <div className="w-screen bg-darkblue relative lg:h-[200px] h-[120px] flex flex-col justify-center items-center">
            <p className="font-bold text-[20px] bottom-4 text-neon">Pooplogg Mart</p>
            <div className="bg-white divmove w-[4px] lg:h-[50px] h-[20px] rounded-md my-1"></div>
            
        </div>
        
        <div className="flex flex-col my-12 max-w-6xl w-screen justify-center items-center ">
            {/* <div className="flex my-12 w-[60vw] justify-center ">
                <div className="flex justify-between w-full mt-14"> 
                    <input className='h-[45px] w-[70%] bg-lightgrey rounded-[8px] border border-darkblue px-4 text-[12px] text-darkblue' placeholder='Enter your email' name='email' />
                    <IconButton title={"Request Service"}/>
                </div>
            </div> */}
            <div className="flex flex-col min-w-[60vw] min-h-[30vh]  p-4 justify-center lg:justify-between  rounded-md  border border-darkblue">
            <div className="flex w-full h-fit justify-center items-center ">
                <p className="text-darkblue font-bold text-[50px]">Coming Soon</p>
            </div>
            <div className="flex w-full h-fit justify-center items-center">
                <div className="lg:w-[30%] w-[100%]">
                    <p className="font-bold text-darkblue text-center">Follow Us</p>
                <div className="flex justify-between mt-4 ">
                    <SocialMediaIcon icon={"/contactus/linkedin.svg"} alt={false}/>
                    <SocialMediaIcon icon={"/contactus/instagram.svg"} alt={false}/>
                    <SocialMediaIcon icon={"/contactus/facebook.svg"} alt={false}/>
                    <SocialMediaIcon icon={"/contactus/twitter.svg"} alt={false}/>
                </div>
                </div>
                
            </div>
            </div>
        </div>
        
       
        <TalkToPooplogg/>
      </main>
    )
}
import Image from "next/image";
import IconButton from "../reusables/IconButton";
import SocialMediaIcon from "../reusables/SocialMediaIcon";
import Link from "next/link";

export default function Footer() {

    return (     
        <div className="mt-8 flex lg:flex-row flex-col bg-darkblue justify-between w-full text-white p-10">
        <div className="lg:w-[20%] w-[100%]">
        <Image
            src="/logo2.png"
            alt="Pooplogg Logo"
            width={100}
            height={24}
            priority
          /> 
          <p className="text-[14px] my-4"> We choose to be the catalyst for social change and a cleaner environment.</p>
          <div className="flex justify-between">
              <SocialMediaIcon icon={"/assets/linkedin.svg"}/>
              <SocialMediaIcon icon={"/assets/instagram.svg"}/>
              <SocialMediaIcon icon={"/assets/facebook.svg"}/>
              <SocialMediaIcon icon={"/assets/twitter.svg"}/>
          </div>
          <div className="font-bold text-[12px] w-full flex mt-8"><p className="mr-4 cursor-pointer">Privacy Policy</p><p className="cursor-pointer">Terms & Conditions</p></div>
        </div>
        <div className="lg:w-[15%] w-[100%] lg:items-start flex flex-col gap-y-6 mt-4 lg:mt-0">
          <div>
          <p className="font-bold text-[16px]">Services</p>
          <div className="w-[25%] rounded bg-neon h-[5px] mt-1"></div>
          </div>
              <Link href="https://dashboard.pooplogg.com/welcome-page" target="_blank" className="text-[14px]">Pooplogg for Individuals</Link>
              <Link href="https://dashboard.pooplogg.com/welcome-page" target="_blank" className="text-[14px]">Pooplogg for Business</Link>
              {/* <Link href="https://dashboard.pooplogg.com/welcome-page" target="_blank" className="text-[14px]">For Estate</Link> */}
              {/* <Link href="https://dashboard.pooplogg.com/welcome-page" target="_blank" className="text-[14px]">For Industries</Link> */}
          </div>
        
        <div className="lg:w-[15%] w-[100%] flex flex-col justify-between mt-4 lg:mt-0">
        <div>
          <p className="font-bold text-[16px]">Quick Links</p>
          <div className="w-[20%] rounded bg-neon h-[5px] mt-1"></div>
          </div>
              <p className="text-[14px]">About Us</p>
              <p className="text-[14px]">Our Services</p>
              <p className="text-[14px]">Media</p>
              <p className="text-[14px]">Contact Us</p>
        </div>
        <div className="lg:w-[25%] w-[100%] flex flex-col mt-4 lg:mt-0">
        <div>
          <p className="font-bold text-[16px]">Subscribe Us</p>
          <div className="w-[20%] rounded bg-neon h-[5px] mt-1"></div>
          </div>
              <p className="text-[14px] my-4">Get the latest news and information about happenings in the industry.</p>
              <div className="flex w-full justify-between">
              <input className='h-[45px] w-[60%] border-2 border-darkblue rounded px-4 text-[12px] text-darkblue' placeholder='Enter your email' name='email' />
              <IconButton title={"Subscribe"}/>
              </div>
        </div>
    </div>

    )
  }
  
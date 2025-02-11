"use client"
import Image from "next/image";
import Link from "next/link";
import ProcessCard from "../reusables/ProcessCard";
import SignUpCard from "../reusables/SignUpCard";

import { useState } from "react";

export default function HomePage() { 
  const [activeSection, setActiveSection] = useState("section1");
  return (
    <div>

    <div className="lg:p-10 p-0 w-full mt-32 lg:mt-24 " >
      <div className="mt-18 flex flex-col lg:max-w-6xl lg:flex-row justify-between max-w-6xl mx-auto w-full lg:w-screen items-center">
      
        <div className="lg:w-[42vw] w-[80vw] text-center lg:text-start">
          <div className="flex flex-col h-auto justify-between">   
         
            <p className="font-normal text-[46px] text-darkblue leading-[44px]"> <span className="text-neon font-bold">We drive </span>sewage and waste water solutions for the <span className="text-darkblue italic font-bold"> Developing World </span></p>
          
            {/* <div className="bg-neon w-full h-[2px] rounded-[10px] mt-2"></div> */}
            {/* <div className="flex justify-between w-full"> 
            <p className="text-[12px] text-grey ">HOME.</p>
            <p className="text-[12px] text-grey ">BUSINESSES.</p>
            <p className="text-[12px] text-grey ">ESTATE.</p>
            <p className="text-[12px] text-grey ">CITIES. </p>
          </div> */}
          

          {/* Updated Hero Section Button  */}
          <section className="space-y-6 mt-8 text-[#0B4870] relative">
              <p className="font-bold"> Get Serviced Now, Register Here!!!</p>
              <div className="border-2 border-[#0B4870] py-3 rounded-lg text-sm">
                <div className="flex  justify-center items-center gap-x-4">
                {/* <span className="absolute border-2  w-6 hover:w-24 border-[#e0ffe0] px-2 py-2 left-32 h-10 bg-[#e0ffe0] transition-all ease-in-out hover:bg-linear-to-t from-[#00ED63] to-[#9BF443] cursor-pointer duration-500 hover:rounded-lg hover:bg-linkcolor"/>
                <span className="absolute border-2 w-6 hover:w-24 border-[#e0ffe0] px-2 py-2 left-96 h-10 bg-[#e0ffe0] transition-all ease-in-out hover:bg-linear-to-t from-[#00ED63] to-[#9BF443] cursor-pointer duration-500 hover:rounded-lg hover:bg-linkcolor"/> */}
                  <div className="flex z-10 gap-x-1 items-center cursor-pointer"><Link href="http://User.pooplogg.com/register" target="_blank">Pooplogg for <span className="font-bold text-lg">Business</span></Link></div>
                  <div className="h-2 w-14 rounded-xl bg-[#0B4870]"/>
                  <div className="flex z-10 gap-x-1 items-center cursor-pointer"><Link href="http://User.pooplogg.com/register" target="_blank">Pooplogg for <span className="font-bold text-lg">Homes</span></Link></div>
                </div>
              </div>
          </section>  

          {/* <div className="flex lg:flex-row flex-col w-full mt-8  items-center"> 
          <Link href="#pooplogg_as" >
            <div className=" flex justify-between rounded-[50px] p-[10px] bg-darkblue  items-center cursor-pointer border border-darkblue">
              <p className="text-white text-[10px] font-bold mr-4 ml-2">Join Our Ecosystem</p>
              <Image
              src="/assets/arrow.svg"
              alt="arrow"
              width={18}
              height={18}
              priority
            /> 
            </div> */
            /* </Link > */
            /* <div className="flex lg:flex-row flex-col lg:ml-10 lg:w-[52%] w-full lg:justify-between items-center"> 
            <Link href="/">
            <div className="cursor-pointer border border-darkblue flex p-2 items-center rounded-md mt-4 lg:mt-0">
              <img src="/assets/playstore.svg" className='h-[20px] mr-2'/>
              <p className="text-[13px] text-darkblue font-normal">Get on Android</p>
            </div>
            </Link>
            <Link href="/">
            <div className="cursor-pointer border border-darkblue flex p-2 items-center rounded-md mt-4 lg:mt-0">
              <img src="/assets/apple.svg" className='h-[20px] mr-2'/>
              <p className="text-[13px] text-darkblue font-normal">Get on Iphone</p>
            </div>
            </Link>
          </div>
            {/* <input className='h-[45px] w-[70%] border-2 border-darkblue rounded px-4 text-[12px] text-darkblue' placeholder='Enter your email' name='email' />
            <IconButton title={"Request Service"}/>}
             <TalkToPooplogg/> 
          </div> */}
          
          
            
          </div>
        </div>
        <div className="africa min-h-[70vh] lg:w-[45vw] w-[100vw] flex items-center justify-center relative">
        <Image
              className="phone-animation"
              src="/assets/app.png"
              alt="Pooplogg Logo"
              width={300}
              height={400}
              priority
            /> 
        </div>
      </div>
      
     
      </div>
      <section className="flex gap-8 min-h-screen justify-between w-full mt-60  text-altblue">
      <aside className="relative text-white items-center">
      <div className="bg-[#0B4870] w-[535px] ps-20 py-10 space-y-12 px-10 sticky top-20 rounded-tr-2xl rounded-br-2xl">
        <div className="flex gap-3 items-center">
          <button className={`${activeSection === "section1" ? "bg-[#0EE232] border-none text-[#134468]":"bg-[#134468] border-2 border-white text-white"} h-12 text-md font-light rounded-md w-40`} onClick={() => setActiveSection("section1")}>PHomes</button>
          <button className={`${activeSection === "section2" ? "bg-[#0EE232] border-none text-[#134468]":"bg-[#134468] border-2 border-white text-white"} h-12 text-md font-light rounded-md w-40`} onClick={() => setActiveSection("section2")}>P4Business</button>
          <Image src={`/pooplogg_side.png`} alt="" width={60} height={80}/>
        </div>
        {activeSection === "section1" ? (
          <div className="space-y-6">
            <h2 className="font-bold">Pooplogg For Homes</h2>
            <p className="text-white text-xs font-light leading-6">
            P4homes is a specialized account built to meet the infrastructure needs of home owners
            </p>
            <Image src={`/PHOMES_UPDATE.png`} alt="" width={377} height={40}/>
            <div className="flex border-2 border-white rounded-lg justify-between h-14 px-4 items-center">
            <Link href="https://user.pooplogg.com/register"> <button className="">Register Now  </button></Link>
              <Image src={`/arrow_register.png`} alt="" width={21} height={10}/>
            </div>
        </div>
      

        ) :(
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <h2 className="font-bold">Pooplogg For Business</h2>
              <p className="text-white text-xs font-light leading-6">
              P4B helps Business owners and facility managers properly allocate, and track resources on their infrastructures with a specialized dashboard and reporting system</p>
              <Image src={`/P4B.png`} alt="" width={357} height={40}/>
              <div className="flex border-2 border-white rounded-lg justify-between h-14 px-4 items-center">
                <button className=""><Link href="/">Register Now </Link> </button>
                <Image src={`/arrow_register.png`} alt="" width={21} height={10}/>
              </div>
            </div>
          </div>
        )
        }
        </div>
      </aside>
      <aside className="flex flex-col items-center px-20 lg:mt-12">
      {activeSection === "section1" ? (
        <div id="section1" className="mx-auto">
        <div className="space-y-12 mx-auto text-center raleway-normal flex flex-col justify-center items-center ">
          <div className="space-y-6 lg:w-[85%] w-full">
            <h2 className="raleway-heading text-main_text text-3xl" >1. Register Your Property</h2>
            <p className="leading-6  text-sm tracking-wide">PHOMES manages properties for homes. Users can monitor and manage their property infrastructure using this platform when they sign up. </p>
            <Image src={'/phomes_section_1.png'} alt="MacBook Pooplog Demo 1" width={600} height={300} className="lg:mx-auto"/>
          </div>
          <div className="space-y-6 lg:w-[85%] w-full">
            <h2 className="raleway-heading text-main_text text-2xl">2. Get Optimized and Rank Up</h2>
            <p className="leading-6 text-sm tracking-wide">We'll schedule an on-site visit to evaluate your waste water and water infrastructure. You'll receive a digital report of our findings and expert recommendations for maintenance and improvement. </p>
            <Image src={'/MacBook_Pro_2.png'} alt="MacBook Pooplog Demo 2" width={600} height={300} className="lg:mx-auto"/>
          </div>
          <div className="space-y-6 lg:w-[85%] w-full">
            <h2  className="raleway-heading text-main_text text-2xl">3. Enjoy a Digitize Platform</h2>
            <p className="leading-6 text-sm tracking-wide"> Following your visit, you'll immediately receive two valuable benefits, a Pooplogg coin and a personalized digital dashboard.  This dashboard provides insights into your waste water and water infrastructure, allowing you to monitor sewage levels and track the overall health of your property.</p>
            <Image src={'/PHOMES_UPDATE.png'} alt="MacBook Pooplogg Demo 3" width={300} height={300} className="lg:mx-auto"/>
          </div>
        </div>
        </div>
      ) : (
        <div>
          <div id="section2">
        <div className="space-y-12 mx-auto text-center raleway-normal flex flex-col justify-center items-center">
          <div className="space-y-6 lg:w-[85%] w-full">
            <h2 className="raleway-heading text-main_text text-3xl" >1. Register Your Property</h2>
            <p className="leading-6  text-sm tracking-wide">P4Business is a unique product for individuals who seek to manage their property infrastructure using the most intelligent AI tool  available globally. Users can monitor, manage and solve their property infrastructure issues when they sign up on our platform.</p>
            <Image src={'/P4B_section_1.png'} alt="MacBook Pooplog Demo 1" width={600} height={300} className="lg:mx-auto"/>
          </div>
          <div className="space-y-6 lg:w-[85%] w-full">
            <h2 className="raleway-heading text-main_text text-2xl">2. Get Optimized and Rank Up</h2>
            <p className="leading-6 text-sm tracking-wide">This is the first process that give us the permission to reach out to you , to agree on a convenient time to visit your property and evaluate your waste water and water infrastructure for free, also providing you a digital report on our findings and provide expert feedbacks on our best to maintain or improve the state of your waste water and water infrastructure.</p>
            <Image src={'/P4B_MacBook.png'} alt="MacBook Pooplog Demo 2" width={600} height={300} className="lg:mx-auto"/>
          </div>
          <div className="space-y-6 lg:w-[85%] w-full">
            <h2  className="raleway-heading text-main_text text-2xl">3. Get Optimized and Rank Up!</h2>
            <p className="leading-6 text-sm tracking-wide">Once the visit is done you receive two things immediately a Pooplogg coin and a digital dashboard representing your waste water and water infrastructure helping you to track sewage levels of your property also , the digital report gives  you a summary of the health rate of your property.</p>
            <Image src={'/P4B.png'} alt="MacBook Pooplogg Demo 3" width={300} height={300} className="lg:mx-auto"/>
          </div>
        </div>
        </div>
        </div>
      )  } 
        </aside>
      </section>
    </div>
    )
}
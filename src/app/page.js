"use client"
import Image from "next/image";
import { useState } from "react"
import Footer from "./reusables/Footer";
import HomePage from "./home/HomePage";
import AboutUs from "./aboutus/AboutUs";
import Services from "./services/Services";
import ContactUs from "./contactus/ContactUs";
import Shop from "./shop/Shop";
import Media from "./media/Media";
import Test from "./test/Test";


const navigation = ["Home", "Our Services", "About Us","Media", "Contact Us"]


export default function Home() {
  const [active, setActive] = useState("Home")
  const [width, setWidth] = useState("w-0")

  const openNav = () => {
    setWidth("w-[100vw]")
  }

  const closeNav = () => {
    setWidth("w-0")
  }

  return (
    <main className="flex min-h-screen  flex-col items-center w-full">
      
        <div className="w-full lg:py-5 py-3 px-9 fixed z-30 w-screen items-center justify-between text-sm flex bg-darkblue lg:bg-lightgreen">
            <Image
              src="/assets/pooplogglogo.png"
              alt="Pooplogg Logo"
              width={100}
              height={24}
              priority
              className="lg:block hidden"
            />  
            <Image
              src="/logo2.png"
              alt="Pooplogg Logo"
              width={80}
              height={18}
              priority
              className="lg:hidden block"
            />  
          <div className="lg:flex hidden w-[40vw] justify-between">
              {navigation.map((data, index)=>
            <div className="flex flex-col items-center" key={index}>
              <p className={`cursor-pointer text-[12px] font-bold ${active === data ? "text-linkcolor" : "text-darkblue"}`} onClick={()=>setActive(data)}>{data}</p>
              <div className={`${active === data ? "bg-neon" : ""} w-[50px] h-[6px] rounded-[10px] `}></div>
            </div>
              )
            }
          </div>
          <div className="lg:hidden block">
            <p className="font-bold text-white text-[12px] cursor-pointer" onClick={openNav}>MENU</p>
          </div>
      </div>
            {
              (()=> {
                switch (active) {
                case 'Home':
                  return <HomePage/>
                case 'About Us':
                  return <AboutUs/>
                case 'Our Services':
                  return <Services/>

                case 'Media':
                  return <Media />
                case 'Contact Us':
                  return <ContactUs />
                default:
                  return null
              }
            })()
            }
      
      
      <Footer/>
      <div id="myNav" className={`overlay ${width}`}>

 
          <a  className="closebtn cursor-pointer" onClick={closeNav}>&times;</a>
            {navigation.map((data, index)=>
            <div className="flex flex-col items-center overlay-content" key={index}>
              <a className={`cursor-pointer text-[12px] font-bold ${active === data ? "text-linkcolor" : "text-darkblue"}`} onClick={()=>setActive(data)}>{data}</a>
              <div className={`${active === data ? "bg-neon" : ""} w-[50px] h-[6px] rounded-[10px] `}></div>
            </div>
              )
            }
      </div>
    </main>
  );
}

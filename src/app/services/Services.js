import TalkToPooplogg from "../reusables/TalkToPooplogg";
import ServicesCard from "../reusables/ServiceCard";
import Link from "next/link";
import Image from "next/image";
// import country from "/Countries.png"
export default function Services() {
    
    return (
      <main className="flex min-h-screen flex-col justify-start mt-32 lg:mt-24 overflow-hidden">
        <div className="w-screen bg-[url(/Countries.png)]  h-[90vh] bg-cover bg-center relative flex flex-col justify-start pt-16">
          <div className="flex flex-col font-light ms-32 text-[#0B4870] gap-y-2">
          <h1 className="text-4xl font-extralight ">PoopLogg <br/> <span className="font-bold text-4xl">Services</span></h1>
          <p className="font-base">Available to meet all infrastructure needs</p>
          </div>
        <div className="bg-white divmove w-[4px] h-[50px] rounded-md my-1"></div>
            
        </div>
        <div id="service" className="flex justify-between ms-32 -mt-[350px] gap-x-[350px]">
          <div className="flex gap-x-12 w-full">
            <span className="flex items-center w-48 h-20 rotate-3  bg-[#134468] px-2 gap-x-4 rounded-lg">
              <Image src='/for_businesses.png' alt='' width={30} height={30} className="contain" />
               <p className="text-sm text-white">For <br/><span className="font-bold">Businesses</span></p>
            </span>
            {/* <span className="flex items-center w-48 h-20 rotate-3 bg-white border-[1px] border-altblue px-2 gap-x-4 rounded-lg">
              <Image src='/real-estate.png' alt='' width={30} height={30} />
               <p className="text-sm  text-[#134468] ">For <span className="font-bold"> Estates </span></p>
            </span> */}
            <span className="flex items-center w-48 h-20 rotate-3  bg-[#134468] px-2 gap-x-4 rounded-lg">
              <Image src='/homeowners.png' alt='' width={30} height={30} />
               <p className="text-sm text-white">For <br/><span className="font-bold">Home Owners</span></p>
            </span>
          </div>
          <div className="flex flex-col justify-start w-full z-10 gap-y-2 text-[#0B4870]">
            <h2 className="text-[#134468] text-2xl font-extrabold float-start"><span className="text-linkcolor">Our</span> Services</h2>
            <p className="leading-wide font-light">Are Coming to a city near you</p>
            </div>
        </div>
          {/* <ServicesCard icon="evacuate" bgcolor="e0ffe0" heading="Evacuate" caption="Sewage" /> */}
           <div className="z-20">
            <div className="flex justify-start w-full ms-28 mt-14">
              <h3 className=" text-[20px] leading-7 text-[#134468]">Book a Service</h3>
            </div> 
          <div id="services_1" className="lg:flex flex-col w-screen z-20 text-[#0B4870] lg:flex-row lg:items-stretch flex-wrap h-fit mt-12 justify-between px-28">

          <Link href="https://user.pooplogg.com/register"> <span className="bg-[#ECFFF4] rounded-xl border-[1px] border-[#0B4870] gap-y-8 h-[250px] w-[240px] flex flex-col justify-center items-center gap-2" >
              <Image src='/evacuate.png' alt="" width={80} height={40}/>
              <div className="space-y-2 flex flex-col items-center">
                <h4 className="text-[16px] font-bold">Evacuate</h4>
                <p className="text-[16px] font-light">Sewage</p>
              </div>
              <div className="h-1 w-28  bg-linkcolor rounded-xl"/>
           </span></Link>
           <Link href="https://user.pooplogg.com/register"><span className="bg-white rounded-xl border-[1px] border-[#0B4870] gap-y-8 h-[250px] w-[240px] flex flex-col justify-center items-center gap-2" >
              <Image src='/sewage.png' alt="" width={80} height={18} />
              <div className="space-y-2 flex flex-col items-center">
                <h4 className="text-[16px] font-bold">Sewage</h4>
                <p className="text-[16px] text-center font-light">Treatment<br/> Plant</p>
              </div>
              <div className="h-1 w-28  bg-linkcolor rounded-xl"/>
           </span></Link>
           
           <Link href="https://user.pooplogg.com/register"> <span className="bg-[#ECFFF4] rounded-xl border-[1px] border-[#0B4870] gap-y-8 h-[250px] w-[240px] flex flex-col justify-center items-center gap-2" >
              <Image src='/services/bio.png' alt="" width={35} height={61}/>
              <div className="space-y-2 flex flex-col items-center">
                <h4 className="text-[16px] font-bold">Bio</h4>
                <p className="text-[16px] font-light">Digester</p>
              </div>
              <div className="h-1 w-28  bg-linkcolor rounded-xl"/>
           </span></Link>
           <Link href="https://user.pooplogg.com/register"><span className="bg-white gap-y-8 rounded-xl border-[1px] border-[#0B4870] h-[250px] w-[240px] flex flex-col justify-center items-center gap-2" >
              <Image src='/services/drainage.svg' alt="" width={51} height={33}/>
              <div className="space-y-2 flex flex-col items-center">
                <h4 className="text-[16px] font-bold">Drainage</h4>
                <p className="text-[16px] font-light">Services</p>
              </div>
              <div className="h-1 w-28  bg-linkcolor rounded-xl"/>
           </span></Link>
           </div>

           <div id="services_2" className="lg:flex flex-col w-screen z-20 text-[#0B4870] lg:flex-row lg:items-stretch flex-wrap h-fit mt-12 justify-between px-28">

           <Link href="https://user.pooplogg.com/register"><span className="bg-white rounded-xl border-[1px] border-[#0B4870] gap-y-8 h-[250px] w-[240px] flex flex-col justify-center items-center gap-2" >
              <Image src='/services/water_delivery.png' alt="" width={88} height={40}/>
              <div className="space-y-2 flex flex-col items-center">
                <h4 className="text-[16px] font-bold">Water</h4>
                <p className="text-[16px] font-light">Delivery By Tanker</p>
              </div>
              <div className="h-1 w-28  bg-linkcolor rounded-xl"/>
           </span></Link>
           <Link href="https://user.pooplogg.com/register"><span className=" rounded-xl border-[1px] border-[#0B4870] gap-y-8 h-[250px] w-[240px] flex flex-col justify-center items-center gap-2" >
              <Image src='/services/water.svg' alt="" width={80} height={18}/>
              <div className="space-y-2 flex flex-col items-center">
                <h4 className="text-[16px] font-bold">Water</h4>
                <p className="text-[16px] font-light">Treatment</p>
              </div>
              <div className="h-1 w-28  bg-linkcolor rounded-xl"/>
           </span></Link>
           
           <Link href="https://user.pooplogg.com/register"><span className="bg-white rounded-xl border-[1px] border-[#0B4870] gap-y-12 h-[250px] w-[240px] flex flex-col justify-center items-center gap-2" >
              <Image src='/services/plumbing.svg' alt="" width={50} height={61}/>
              <div className="space-y-2 flex flex-col items-center">
                <h4 className="text-[16px] font-bold">Plumbing</h4>
                
              </div>
              <div className="h-1 w-28  bg-linkcolor rounded-xl"/>
           </span></Link>
           <Link href="https://user.pooplogg.com/register"> <span className=" gap-y-8 rounded-xl border-[1px] border-[#0B4870] h-[250px] w-[240px] flex flex-col justify-center items-center gap-2" >
              <Image src='/services/civil.svg' alt="" width={55} height={55}/>
              <div className="space-y-2 flex flex-col items-center">
                <h4 className="text-[16px] font-bold">Civil Works</h4>
                <p className="text-[16px] font-light"></p>
              </div>
              <div className="h-1 w-28  bg-linkcolor rounded-xl"/>
           </span></Link>
           </div>

           <div id="services_3" className="lg:flex flex-col w-screen z-20 text-[#0B4870] lg:flex-row lg:items-stretch flex-wrap h-fit mt-12 justify-between px-28">

           <Link href="https://user.pooplogg.com/register"><span className=" rounded-xl border-[1px] border-[#0B4870] gap-y-8 h-[250px] w-[240px] flex flex-col justify-center items-center gap-2" >
              <Image src='/services/fumigation.svg' alt="" width={88} height={40}/>
              <div className="space-y-2 flex flex-col items-center">
                <h4 className="text-[16px] font-bold">Fumigation</h4>
                <p className="text-[16px] font-light"></p>
              </div>
              <div className="h-1 w-28  bg-linkcolor rounded-xl"/>
            </span></Link>
            <Link href="https://user.pooplogg.com/register"><span className=" bg-white rounded-xl border-[1px] border-[#0B4870] gap-y-8 h-[250px] w-[240px] flex flex-col justify-center items-center gap-2" >
              <Image src='/services/electrical.svg' alt="" width={80} height={18}/>
              <div className="space-y-2 flex flex-col items-center">
                <h4 className="text-[16px] font-bold">Electrical</h4>
                <p className="text-[16px] font-light"> </p>
              </div>
              <div className="h-1 w-28  bg-linkcolor rounded-xl"/>
            </span></Link>

            <Link href="https://user.pooplogg.com/register">  <span className=" rounded-xl border-[1px] border-[#0B4870] gap-y-12 h-[250px] w-[240px] flex flex-col justify-center items-center gap-2" >
              <Image src='/services/greenranking.svg' alt="" width={50} height={61}/>
              <div className="space-y-2 flex flex-col items-center">
                <h4 className="text-[16px] font-bold">Green </h4>
                <p className="text-[16px] font-light">Ranking</p>
              </div>
              <div className="h-1 w-28  bg-linkcolor rounded-xl"/>
            </span></Link>
            <Link href="https://user.pooplogg.com/register">  <span className="bg-white gap-y-8 rounded-xl border-[1px] border-[#0B4870] h-[250px] w-[240px] flex flex-col justify-center items-center gap-2" >
              <Image src='/services/logbook.png' alt="" width={55} height={55}/>
              <div className="space-y-2 flex flex-col items-center">
                <h4 className="text-[16px] font-bold">STP</h4>
                <p className="text-[16px] font-light">LogBook</p>
              </div>
              <div className="h-1 w-28  bg-linkcolor rounded-xl"/>
            </span></Link>
            </div>

            <div id="services_4" className="flex max-lg:flex-col w-screen z-20 text-[#0B4870] h-fit mt-12 gap-x-24 px-28">

            <Link href="https://user.pooplogg.com/register"> <span className="bg-white rounded-xl border-[1px] border-[#0B4870] gap-y-8 h-[250px] w-[240px] flex flex-col items-center justify-center gap-2" >
              <Image src='/services/csr.svg' alt="" width={88} height={40}/>
              <div className="space-y-2 flex flex-col items-center">
                <h4 className="text-[16px] font-bold">Corporate  </h4>
                <p className="text-[16px] font-light">Social Responsibility</p>
              </div>
              <div className="h-1 w-28  bg-linkcolor rounded-xl"/>
            </span></Link>
            <Link href="https://user.pooplogg.com/register">  <span className="rounded-xl border-[1px] border-[#0B4870] gap-y-8 h-[250px] w-[240px] flex flex-col justify-center items-center gap-2" >
              <Image src='/services/others-icon.png' alt="" width={80} height={18}/>
              <div className="space-y-2 flex flex-col items-center">
                <h4 className="text-[16px] font-bold">Others</h4>
                <p className="text-[16px] font-light"> </p>
              </div>
              <div className="h-1 w-28  bg-linkcolor rounded-xl"/>
            </span></Link>
            </div>
           </div>
           {/* <ServiceCard icon={"/services/maintenance.png"} title={"STP (Sales/Maintenance)"}/>
        <ServiceCard icon={"/services/bio1.png"} title={"Bio-Digesters"} w={30} h={30}/>
          
        
           <ServiceCard icon={"/services/civil.svg"} title={"Civil Works"}/>
           <ServiceCard icon={"/services/plumbing.svg"} title={"Plumbing"}/>
           <ServiceCard icon={"/services/electrical.svg"} title={"Electricals"}/>
           <ServiceCard icon={"/services/fumigation.svg"} title={"Fumigation"}/>
       
           <ServiceCard icon={"/services/water.svg"} title={"Water Treatment"}/>
           <ServiceCard icon={"/services/greenranking.svg"} title={"Green Ranking"}/>
           <ServiceCard icon={"/services/logbook.png"} title={"Logbook"}/>
           <ServiceCard icon={"/services/csr.svg"} title={"Corporate Social Responsibility"}/>
       
           <ServiceCard icon={"/services/others-icon.png"} title={"Others"}/>
           <TalkToPooplogg/> */}
       </main>
    )
}
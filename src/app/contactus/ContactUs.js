import TalkToPooplogg from "../reusables/TalkToPooplogg";
import SocialMediaIcon from "../reusables/SocialMediaIcon";
export default function ContactUs() {
    
    return (
    //   <main className="flex min-h-screen flex-col items-center w-full mt-32 lg:mt-24">
    //     <div className="w-screen bg-darkblue relative lg:h-[200px] h-[120px] flex flex-col justify-center items-center">
    //         <p className="font-bold text-[20px] bottom-4 text-neon">Contact Us</p>
    //         <div className="bg-white divmove w-[4px] lg:h-[50px] h-[20px] rounded-md my-1"></div>    
    //     </div>
        
    //     <div className="flex flex-col my-12 max-w-6xl w-screen justify-center items-center ">
    //         {/* <div className="flex my-12 w-[60vw] justify-center ">
    //             <div className="flex justify-between w-full mt-14"> 
    //                 <input className='h-[45px] w-[70%] bg-lightgrey rounded-[8px] border border-darkblue px-4 text-[12px] text-darkblue' placeholder='Enter your email' name='email' />
    //                 <IconButton title={"Request Service"}/>
    //             </div>
    //         </div> */}
    //         <div className="flex flex-col lg:w-[60vw] w-[90vw] h-fit p-4 justify-between rounded-md  border border-darkblue">
    //         <div className="lg:w-[30%] w-[100%]">
                    
    //                 <div className="bg-neon h-[6px] w-[20%] rounded-md"></div>
    //                 <p className="text-[30px] font-bold text-darkblue">Hey! Let’s Talk</p>
    //             </div>
    //         <div className="flex flex-col mt-4 lg:mt-0 lg:flex-row w-full h-fit justify-between items-center ">
    //             <div className="flex w-full lg:w-[20vw] h-fit items-center">
    //                 <div className="bg-darkblue flex items-center rounded justify-center text-white w-[18%] h-[40px]">
    //                     <p className="font-bold text-[12px]">1</p>
    //                 </div>
    //                 <div className="ml-6">
    //                     <p className="text-neon font-bold text-[16px]">Call</p>
    //                     <a className="text-darkblue text-[14px]" href="tel:+2347000700211">0700 0700 211</a>
    //                 </div>
    //             </div>
    //             <div className="flex w-full lg:w-[20vw] h-fit items-center">
    //                 <div className="bg-darkblue flex items-center rounded justify-center text-white w-[18%] h-[40px]">
    //                     <p className="font-bold text-[12px]">2</p>
    //                 </div>
    //                 <div className="ml-6">
    //                     <p className="text-neon font-bold text-[16px]">Send Email</p>
    //                     <a className="text-darkblue text-[14px]" href="mailto:info@pooplogg.com">info@pooplogg.com</a>
    //                 </div>
    //             </div>
    //             <div className="flex w-full lg:w-[20vw] h-fit items-center">
    //                 <div className="bg-darkblue flex items-center rounded justify-center text-white w-[23%] h-[40px]">
    //                     <p className="font-bold text-[12px]">3</p>
    //                 </div>
    //                 <div className="ml-6">
    //                     <p className="text-neon font-bold text-[16px]">Visit Us</p>
    //                     <p className="text-darkblue text-[14px]">Federal Mortgage Bank Building, Marina, Lagos.</p>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="">
                
            
    //             <div className="flex lg:w-[30%] justify-between mt-4">
    //                 <SocialMediaIcon icon={"/contactus/linkedin.svg"} alt={false}/>
    //                 <SocialMediaIcon icon={"/contactus/instagram.svg"} alt={false}/>
    //                 <SocialMediaIcon icon={"/contactus/facebook.svg"} alt={false}/>
    //                 <SocialMediaIcon icon={"/contactus/twitter.svg"} alt={false}/>
    //             </div>
    //             <p className="font-bold text-darkblue mt-2">Follow Us</p>
    //         </div>
    //         </div>
    //     </div>
        
       
    //     <TalkToPooplogg/>
    //   </main>
    <section className="flex flex-col justify-center mt-24 max-md:mt-12 items-center">
      <div className="text-center text-[#000] space-y-2 mb-12">
        <h1 className="font-bold text-3xl">Contact Us</h1>
        <p className="font-light text-[#334] ">Any question or remarks? Just write us a message!</p>
      </div>
       <div className="flex justify-center gap-x-8 max-md:flex-col w-full bg-white p-3 h-[85vh]">
        <aside id="contact_info" className="relative bg-[#134468] text-white space-y-20 w-2/5 pe-14 self-center h-[100%] pb-36 ps-10 pt-7 rounded-xl" >
          <div id="heading" className="space-y-5">
            <h2 className="font-semibold text-2xl">Contact Information</h2>
            <p className="text-sm font-light">Say something to start live chat!</p>
          </div>
          <div className="flex flex-col gap-12 mt-12 font-light">
            <span className="flex gap-x-4 text-sm"><img src="/phone.png"/> 0700 0700 211</span>
            <span className="flex gap-x-4 text-sm"><img src="/email.png"/> info@pooplogg.com</span>
            <span className="flex gap-x-4 text-sm h-6"><img src="/location.png"/> <a> Federal Mortgage Bank Building,<br/> Marina, Lagos.</a></span>
          </div>
          <div className="absolute bottom-8 left-20 flex gap-x-5">
            <img alt="" src="/Linkedin.png"/>
            <img alt="" src="/Instagram.png"/>
            <img alt="" src="/Facebook.png"/>
            <img alt="" src="/X.png"/>
          </div>
          <img src="/top_circle.png" className="absolute w-48 right-0 -me-12"/>
          <img src="/bottom_circle.png" className="absolute bottom-16 w-28 right-16"/>
        </aside>
        <aside id="contact_form" className="w-3/5 text-[black] pe-10 relative">
          <form className="bg-white mt-12 w-[500px]">
            <div className="flex gap-x-5 mb-10 w-stretch"id="first_last">
              <div className="border-b-2 border-b-grey flex-col flex gap-y-4 w-full">
                <label>First Name</label>
                <input type="text" placeholder="First Name" className="focus:outline-none pb-2 border-none outline-none  placeholder:text-[#A8A8A8]" />
              </div>
              <div className="border-b-2 border-b-grey flex-col w-full flex gap-y-4">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" className="focus:outline- pb-2 border-none outline-none placeholder:text-[#A8A8A8]" />
              </div>
            </div>
            <div className="flex gap-x-5  mb-8" id="email_phone">
              <div className="border-b-2 border-b-grey flex-col w-full flex gap-y-4 w-full'">
                <label>Email</label>
                <input type="email" placeholder="Email" className="focus:outline-none pb-2 border-none outline-none placeholder:text-[#A8A8A8]" />
              </div>
              <div className="border-b-2 border-b-grey w-full flex-col flex gap-y-4">
                <label>Phone Number</label>
                <input type="number" placeholder="+2347000700211" className="focus:outline- pb-2 border-none outline-none placeholder:text-[#A8A8A8]" />
              </div>
            </div>
            
            <div className="border-b-2 border-b-grey w-full flex-col flex gap-y-12 mt-12">
              {/* <label>Message</label> */}
              <textarea className="border-none outline-none" placeholder="Message" rows={4}/>
            </div>
            <div className="flex justify-end items-center mt-12">
              <input type="submit" value="Send Message" className="bg-[#22B43B] w-52 h-12 rounded-md text-white text-sm "/>
            </div>
          </form>
            <img src="/letter_send.png" className="absolute right-40 -bottom-12 w-56 "/>
        </aside>
        </div>
    </section>
    )
}
// import { Locate } from '@iconify/react'

export default function Test() { 
return (
    <section className="flex flex-col justify-center mt-24 max-md:mt-12 items-center">
      <div className="text-center text-[#000] space-y-2 mb-12">
        <h1 className="font-bold text-3xl">Contact Us</h1>
        <p className="font-light text-[#334] ">Any question or remarks? Just write us a message!</p>
      </div>
       <div className="flex justify-center gap-x-8 max-md:flex-col w-full bg-white p-3">
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
          <div className="absolute bottom-8 left-36 flex gap-x-5">
            <img alt="" src="/Linkedin.png"/>
            <img alt="" src="/Instagram.png"/>
            <img alt="" src="/Facebook.png"/>
            <img alt="" src="/X.png"/>
          </div>
        </aside>
        <aside id="contect_form" className="w-3/5 text-[black] pe-10">
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
            <div  className="space-y-3 text-xs">
              <h4>Select Subject?</h4>
              <div className="flex">
              <label class="flex items-center space-x-1 w-full">
                <input type="checkbox" class="hidden peer" />
                <span class="w-6 h-6 rounded-full flex border-2 border-[#011C2A] items-center justify-center peer-checked:bg-[#011C2A] peer-checked:border-none">
                  <img src="/check.png" alt="checkmark" class="w-4 h-4 peer-checked:opacity-100" />
                </span>
                <span>General Enquiry</span>
              </label>
              <label class="flex items-center space-x-1 w-full">
                <input type="checkbox" class="hidden peer" />
                <span class="w-6 h-6 rounded-full flex border-2 border-[#011C2A] items-center justify-center peer-checked:bg-[#011C2A] peer-checked:border-none">
                  <img src="/check.png" alt="checkmark" class="w-4 h-4 peer-checked:opacity-100" />
                </span>
                <span>General Enquiry</span>
              </label>
              <label class="flex items-center space-x-1 w-full">
                <input type="checkbox" class="hidden peer" />
                <span class="w-6 h-6 rounded-full flex border-2 border-[#011C2A] items-center justify-center peer-checked:bg-[#011C2A] peer-checked:border-none">
                  <img src="/check.png" alt="checkmark" class="w-4 h-4 peer-checked:opacity-100" />
                </span>
                <span>General Enquiry</span>
              </label>
              <label class="flex items-center w-full space-x-1">
                <input type="checkbox" class="hidden peer" />
                <span class="w-6 h-6 rounded-full flex border-2 border-[#011C2A] items-center justify-center peer-checked:bg-[#011C2A] peer-checked:border-none">
                  <img src="/check.png" alt="checkmark" class="w-4 h-4 peer-checked:opacity-100" />
                </span>
                <span>General Enquiry</span>
              </label>
              </div>
            </div>
            <div className="border-b-2 border-b-grey w-full flex-col flex gap-y-4 mt-12">
              <label>Message</label>
              <textarea className="border-none outline-none" rows={2}/>
            </div>
            <div className="flex justify-end items-center mt-12">
              <input type="submit" value="Send Message" className="bg-[#22B43B] w-52 h-12 rounded-xl text-white text-sm "/>
            </div>
          </form>
        </aside>
        </div>
    </section>
  )
}

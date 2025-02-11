import TalkToPooplogg from "../reusables/TalkToPooplogg";
import PostMain from "./PostMain";
import PostLatest from "./PostLatest";

export default function Media() {
    
    return (
      <main className="flex min-h-screen flex-col items-center w-full mt-32 lg:mt-24">
        <div className="w-screen bg-darkblue relative lg:h-[200px] h-[100px]  flex flex-col justify-center items-center media-banner">
            <p className="font-bold text-[30px] absolute left-[9.5%] text-white bottom-4">Media</p>  
        </div>
        
        <div className="flex flex-col my-12 max-w-6xl w-screen justify-center items-center p-2">
            {/* <div className="flex my-12 w-[60vw] justify-center ">
                <div className="flex justify-between w-full mt-14"> 
                    <input className='h-[45px] w-[70%] bg-lightgrey rounded-[8px] border border-darkblue px-4 text-[12px] text-darkblue' placeholder='Enter your email' name='email' />
                    <IconButton title={"Request Service"}/>
                </div>
            </div> */}
            
            
            <div className="flex lg:flex-row flex-col-reverse w-full h-fit justify-between">
              <div className="lg:w-[62%] w-[100%]">
              <p className="text-darkblue font-bold text-[20px] mb-4">Latest Post</p>
                <div className="flex flex-wrap flex-col lg:flex-row items-center justify-between w-full">
                  <PostMain image={"/assets/blog1.png"}/>
                  <PostMain image={"/assets/blog2.png"}/>
                  <PostMain image={"/assets/blog3.png"}/>
                  <PostMain image={"/assets/blog1.png"}/>
                </div>
              </div>
              
              <div className="lg:w-[35%] w-[100%]">
              <p className="text-darkblue font-bold text-[20px] mb-4">Top Post</p> 
                <PostLatest/>
                <PostLatest/>
                <PostLatest/>
              </div>
                
            </div>
            
        </div>
        
       
        <TalkToPooplogg/>
      </main>
    )
}
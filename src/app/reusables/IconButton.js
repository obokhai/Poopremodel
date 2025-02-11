export default function IconButton({title}) {

    return (     
      <div 
          className={`bg-neon border-2 border-darkblue text-darkblue px-4 py-1 flex rounded cursor-pointer items-center`} >               
          {/* <img src="/request.svg" className='h-[15px]'/> */}
          <p className='text-[12px] ml-4 font-bold'>{title}</p>
      </div>

    )
  }
  
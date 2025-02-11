export default function SocialMediaIcon({icon, alt=true}) {

    return (     
      <div className={`${alt ? 'bg-white' : 'bg-neon'}  min-w-[50px] flex items-center justify-center  p-4 rounded cursor-pointer `} >               
          <img src={icon} className='h-[15px]'/>
      </div>

    )
  }
  
import Image from 'next/image'

export default function ServicesCard({icon, bgcolor, heading, caption}){
    return(
        <span className={`"bg-#${bgcolor} rounded-xl border-2 border-[#0B4870] h-[250px] w-[240px] flex flex-col justify-center items-center gap-2"`} >
            <Image src={`/${icon}.png`} alt="" width={80} height={80}/>
                <div className="space-y-2 flex flex-col items-center">
                    <h4 className="text-2xl font-bold">{{heading}}</h4>
                    <p>{{caption}} hello</p>
                </div>
                {/* <div className="h-2 w-28  bg-linkcolor"/> */}
        </span>
    )
}
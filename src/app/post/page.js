import Image from "next/image";
import Link from 'next/link'

export default function Post() { 

    return <main className="flex min-h-screen flex-col items-center w-full">
                <div className="max-w-6xl py-5 w-screen justify-between text-sm flex flex-col">
                   
                <Link href="/" className="text-grey font-bold text-[12px] mb-4">Home</Link>
                    
                
                <div>
                    <p className="font-bold text-[24px] text-darkblue">Introducing Streaks, Direct Debit, and Off-season Football Triggers</p>
                </div>
                <Image
                    src="/blog2.png"
                    alt="Pooplogg Logo"
                    width={40}
                    height={40}
                    priority
                    className="h-[40vh] w-[50vw] mt-4"
                    />
                
                </div>
            </main>
    
}
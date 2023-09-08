import Link from "next/link";

export default function Nav(){
    return(
        <nav className='flex flex-row p-1 ml-[34em] justify-end items-center gap-4'>
            <Link href="/" className='flex text-orange-200 text-[1.5em] cursor-pointer '>Home</Link>
            <Link href="/wikifruits" className='flex text-orange-200 text-[1.5em] cursor-pointer '>WikiFruits</Link>                
            <Link href="/characters" className='flex text-orange-200 text-[1.5em] cursor-pointer '>Characters</Link>
        </nav>
    )
}
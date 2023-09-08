import {BsTelephone} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineFacebook} from 'react-icons/ai'

export default function Footer(){
    const Informations = "For More Informations"
    return(
        <footer className=' mt-[1px] justify-between flex bg-black text-white p-8'>
      <h1 className='text-orange-300 italic ml-1 uppercase p-2 text-[1.1em]'>{Informations}</h1>
        <div className='flex'>
          <ol className='justify-center items-center flex flex-row gap-5 mt-2 mr-3 '>
            <li className='cursor-pointer text-[2em]'><BsTelephone/></li>
            <li className='cursor-pointer text-[2.5em]'><AiOutlineInstagram/></li>
            <li className='cursor-pointer text-[2.5em]'><HiOutlineMail/></li>
            <li className='cursor-pointer text-[2.4em]'><AiOutlineFacebook/></li>
          </ol>
        </div>
     </footer>
    )
}
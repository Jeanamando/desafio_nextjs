import {BsTelephone} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineFacebook} from 'react-icons/ai'
import { Lora } from 'next/font/google'
import { type } from 'os'
import Image from 'next/image'

export default function Home() {

  return (
    <>
      <header className=' flex bg-black'>
         
          <img src="https://opwiki.de/images/Ruffy_Jollyroger.jpg" 
          alt="image luffy one piece" 
          className='h-[4em] w-[9em] mt-3' />
          <h1 className='flex text-orange-200 -mt-3 p-3 -ml-3 text-[3.5em] '>
            One Piece
          </h1>
          
            <nav className='flex w-auto p-1 ml-[42em]  items-end gap-3'>
              <span className='flex flex-row text-orange-200 text-[1.5em] cursor-pointer '>Anime</span>
              <span className='flex flex-row text-orange-200 text-[1.5em] cursor-pointer '>Série</span>
              <span className='flex flex-row text-orange-200 text-[1.5em] cursor-pointer '>Mangá</span>
            </nav>
      </header>
     <section className="flex justify-center bg-onepiece bg-no-repeat mt-[1px] bg-cover h-[45vw] ">
        <div className='flex justify-center  flex-col text-center'>
            <div className='flex flex-row gap-[13em]'>
            <h1 className='ml-[4.5em] uppercase flex-row text-7xl font-extrabold mt-[1em] text-center justify-center flex text-orange-200'>
                The One Piece 
            </h1>
              <button className=' uppercase text-orange-200 mb-[1em] hover:scale-105 transition hover:bg-gradient-to-r from-[#d6a6cb] to-[#7375f4]  focus:outline-none  h-[3.8em] w-[9em] bg-zinc-950 rounded-[2em] font-extrabold text-[1em]'>
              Cadastre-se
            </button>
            </div>
            <div className='uppercase justify-center text-[4.3em] font-extrabold mt-[4.5em] flex text-orange-200'>
              IS REAL
            </div>
        </div>
     </section>
     <main>
      <section className=" mt-[1px] bg-black flex justify-between text-white uppercase font-bold">
        <h1 className='hover:scale-110 transition-[2s] italic font-semibold font-mono text-center flex text-orange-200 text-[1.7em] p-[2.5em] justify-center whitespace-pre flex-col'>
          Faça parte <br />
          dessa aventura com a<br /> 
          tripulação do chapéu de palha
          </h1>
        <section>
        <Image 
        src={"https://hitsite.com.br/wp-content/uploads/2022/05/one-piece-mugiwara.jpg"}
        width={"720"}
        height={"100"}
        alt='Imagem mugiwaras'
        />
        </section>
      </section>
      
     </main>
     
     <footer className=' mt-[1px] justify-between flex bg-black text-white p-8'>
      <h1 className='text-orange-300 italic ml-1 uppercase p-2 text-[1.1em]'>For More Informations</h1>
        <div className='flex'>
          <ol className='justify-center items-center flex flex-row gap-5 mt-2 mr-3 '>
            <li className='cursor-pointer text-[2em]'><BsTelephone/></li>
            <li className='cursor-pointer text-[2.5em]'><AiOutlineInstagram/></li>
            <li className='cursor-pointer text-[2.5em]'><HiOutlineMail/></li>
            <li className='cursor-pointer text-[2.4em]'><AiOutlineFacebook/></li>
          </ol>
        </div>
     </footer>
     </>
      )
}

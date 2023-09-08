import Image from 'next/image'
import Footer from './components/footer'
import Header from './components/header'

export default function Home() {

  return (
    <>
     <section className="flex justify-center bg-onepiece bg-no-repeat mt-[1px] bg-cover h-[45vw] ">
        <div className='flex justify-center  flex-col text-center'>
            <div className='flex flex-row gap-[13em]'>
            <h1 className='ml-[4.5em] uppercase flex-row text-7xl font-extrabold mt-[1em] text-center justify-center flex text-orange-200'>
                The One Piece 
            </h1>
              <button className=' uppercase text-orange-200 mb-[1em] hover:scale-105 transition hover:bg-gradient-to-r from-[#d6a6cb] to-[#7375f4]  focus:outline-none  h-[3.8em] w-[9em] bg-black rounded-[2em] font-extrabold text-[1em]'>
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
        <Image 
        src={"https://hitsite.com.br/wp-content/uploads/2022/05/one-piece-mugiwara.jpg"}
        width={"720"}
        height={"100"}
        alt='Imagem mugiwaras'
        />
      </section>
     </main>
    </>
)
}

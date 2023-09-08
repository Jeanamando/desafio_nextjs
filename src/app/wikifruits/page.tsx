import Image from 'next/image'
import gomugomu from "gomugomu.jpg"

export default function Wikifruits(){
    return(
        <div className=" min-h-screen bg-black text-orange-200">
            <h1 className="font-bold italic text-[2em] p-4 text-center">Wiki Akuma no mi</h1>
                <section className='justify-center items-center flex flex-row'>
                    <div className='justify-start text-center w-[30em]'>
                        <h1 className='font-mono text-[2.5em]'>Gomu Gomu no mi</h1>
                        <span className=' font-mono text-[1.5em]'>Gomu gomu no mi é uma akuma no mi do tipo paramecia, ela concede ao usuário se transforma em um homem borracha, seu usuário é Monkey D. Luffy</span>
                    </div>
                    <div className='ml-[10em] flex justify-end'>
                    <Image className='rounded-3xl'
                        src='https://i.pinimg.com/564x/c7/16/1b/c7161b19481e22f001096a0bc341f858.jpg'
                        width={"300"}
                         height={"100"}
                        alt='Gomu gomu no'
                    />
                    </div>
                </section>
        </div>
)
}
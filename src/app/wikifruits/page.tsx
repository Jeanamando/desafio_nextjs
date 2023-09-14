import Image from 'next/image'
import gomugomu from "gomugomu.jpg"
import Cards from './cards'


export default function Wikifruits(){
    return(
        <section className='min-h-screen bg-black font-bold'>
            <div >
                <Cards
                title='Gomu gomu no mi'
                subtitle='Gomu gomu no mi é uma akuma no mi do tipo paramecia, ela concede ao usuário se transforma em um homem borracha, seu usuário é Monkey D. Luffy'
                src='https://i.pinimg.com/originals/4d/b6/05/4db60516b56012a72882efdcd04d54bf.jpg'
                alt='Gomu gomu no'
                />
            </div>
        </section>
)
}
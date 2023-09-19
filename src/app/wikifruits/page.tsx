import Image from 'next/image'
import gomugomu from "gomugomu.jpg"
import Cards from './cards'


export default function Wikifruits(){
    return(
        <section className='flex mt-[1px] min-h-screen bg-black font-bold'>
            <div>
                <Cards
                model='Paramecia'
                title='Gomu gomu no mi'
                subtitle='Gomu gomu no mi é uma akuma no mi do tipo paramecia, ela concede ao usuário se transforma em um homem borracha, seu usuário é Monkey D. Luffy'
                />
            </div>
        </section>
)
}
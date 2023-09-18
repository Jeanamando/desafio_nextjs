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
                src='https://i.pinimg.com/564x/9e/cf/8d/9ecf8de6510431653178a56754417e23.jpg'
                alt='Gomu gomu no'
                />
            </div>
        </section>
)
}
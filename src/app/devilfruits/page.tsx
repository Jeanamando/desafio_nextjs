import Image from 'next/image'
import gomugomu from "gomugomu.jpg"
import Cards from './cards'


export default function Devilfruits(){
    return(
        <section className=' mt-[1px] min-h-screen bg-black font-bold'>
            <span className='flex font-bold w-full justify-center p-4 font-mono text-orange-200 text-4xl'>Devil Fruits</span>
                <div>
                    <Cards
                    model='Paramecia'
                    title='Gomu Gomu no mi'
                    subtitle='A Gomu Gomu no Mi é uma Akuma no Mi do tipo Paramecia. Dá ao corpo do usuário as propriedades da borracha. Isso os transforma em humanos de borracha.'
                    />
                </div>
        </section>
)
}
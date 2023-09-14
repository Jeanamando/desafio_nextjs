import Image from "next/image"
import { type } from "os"
import { title } from "process"
import GOMUNOMI from "../public/GOMUNOMI.png"

type PropCard = {
    title:string
    subtitle: string
    src: string
    alt: string
}
export default function Cards(props:PropCard){

    return(
        
        <section>
            <div className=" text-white rounded-2xl flex flex-col w-1/3 text-center place-items-center gap-4">
                <h1 className="text-xl uppercase">
                    {props.title}
                </h1>
                <Image className=' rounded-2xl'
                    src={props.src}
                    width={"200"}
                     height={"200"}
                    alt={props.alt}
                />
                <h2 className="text-base">
                    {props.subtitle}
                </h2>
            </div>
        </section>
    )
}

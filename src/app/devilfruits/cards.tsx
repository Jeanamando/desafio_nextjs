
type PropCard = {         
    model: string
    title:string
    subtitle: string
}
    
 export default function Cards(props:PropCard){
    
     return(

<div className="m-5 relative bg-cover bg-gomugomu group duration-500 cursor-pointer group overflow-hidden  text-gray-50 h-80 w-60  rounded-2xl ">
  <div className="absolute bg-stone-900 bg-opacity-80 -bottom-44 w-60 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
    <span className="text-orange-200 uppercase font-bold text-xs">
      {props.model}
    </span>
    <span className="text-purple-300 font-mono font-bold text-2xl">
      {props.title}
    </span>
    <p className="flex text-left text-lg font-mono text-purple-200">
      {props.subtitle}
    </p>
  </div>
</div>
)
}
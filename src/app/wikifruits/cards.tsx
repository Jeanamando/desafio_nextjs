
type PropCard = {         
    model: string
    title:string
    subtitle: string
}
    
 export default function Cards(props:PropCard){
    
     return(

<div className="m-5 relative group duration-500 cursor-pointer group overflow-hidden  text-gray-50 h-72 w-56  rounded-2xl ">
  <div className="w-56 h-72 bg-gomugomu bg-cover text-gray-800">
    <div className="flex flex-row justify-between">
    <svg className="fill-current stroke-current w-8 h-8 p-2 hover:bg-lime-200  rounded-full m-1" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
  </svg>
  <svg className="fill-current stroke-current w-8 h-8 p-2 m-1 hover:bg-lime-200 rounded-full" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
  </svg>
    </div>
  </div>
  <div className="absolute bg-stone-900 bg-opacity-80 -bottom-44 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
    <span className="text-orange-200 uppercase font-bold text-xs">{props.model}</span>
    <span className="text-orange-200 font-bold text-xl">{props.title}</span>
    <p className="text-orange-200">{props.subtitle}</p>
  </div>
</div>
)
}
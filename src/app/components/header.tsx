import Nav from "./nav"



export default function Header(){
        
    return(
        
        <header className=' mb-[1px] w-full flex bg-black'>
            <img src="https://opwiki.de/images/Ruffy_Jollyroger.jpg" 
                alt="image luffy one piece" 
                className=' flex justify-start h-[4em] w-[9em] mt-3' />
               
            <h1 className='flex text-orange-200 -mt-3 p-3 -ml-3 text-[3.5em] '>
                One Piece
            </h1>
            <Nav/>
        </header>
)
}
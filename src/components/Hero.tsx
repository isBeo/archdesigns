import FloCard from "./FloCard"



const Hero =()=>{
  const w = '700'
  const h = '350'
  return (
    <div className="relative mb-10">

     <div className="img max-w-[780] ">
     <img src={`https://media.istockphoto.com/id/172664772/nl/foto/house-plans.jpg?s=1024x1024&w=is&k=20&c=QM346QJZc5uXdw6S98RVufLrBkbFKisaaQGhJTPK5dU=`} 
        alt="hero" width={w}  
        height={h}
      />
     </div>

     <div className="floatingCard absolute
        -bottom-4 max-w-[300px] ml-3 right-0
        
        ">
        <FloCard />
     </div>
    </div>
  )
}
export default Hero
import Image from "next/image"

const Hero =()=>{
  const w = '700'
  const h = '400'
  return (
    <div>
      <img src={`https://media.istockphoto.com/id/172664772/nl/foto/house-plans.jpg?s=1024x1024&w=is&k=20&c=QM346QJZc5uXdw6S98RVufLrBkbFKisaaQGhJTPK5dU=`} 
        alt="hero" width={w}  
        height={h}
      />
    </div>
  )
}
export default Hero
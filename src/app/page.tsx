import Hero from '@/components/Hero'
import TopProducts from '@/components/TopProducts'
import React from 'react'
const page = () => {

  // console.log('toFixed=> ',23.2222.valueOf())
  let num = (23423.2132.valueOf())

    num = Number('23 ')
  //  num = new Date('1990-05-12')

  // console.log(num)
  // console.log(Number.isInteger(23))

  const a = [
    'John',"Paul",'Peter',
  ]

  const aRender = [...a]
  const aRe = aRender.toSpliced(2,0,'&')
  const re = aRender.join(' ')
  // console.log(re)

  return (
    <div>
      <div className="hero">
        <Hero />
      </div>

      {/* <p>{
          `
            These are the most used English names: 
              ${aRe.filter((i)=>{
                return i
              })}
          `
        }</p> */}
        
        <p>
          {
            re
          }
        </p>

        <div className="fruits">
          <TopProducts />
        </div>

    </div>
  )
}

export default page

import Image from 'next/image'
import React from 'react'

const FloCard = () => {
    
    const t = new Date()
    const ti = [t.getHours(),t.getMinutes()]
    
    const time = ti[0]<12?
    (`${ti[0]}:${ti[1] }am`):
    (`${ti[0]}:${ti[1]}pm`)
    
    console.log('time =',time)
    
    const fDetails = [{
        label:'House Designs',
        descpt:'Modern plans that suits your life style',
        dp:'https://media.istockphoto.com/id/1620678692/nl/foto/laptop-books-and-smiles-productive-home-environment.jpg?s=612x612&w=0&k=20&c=gXeARns7YHlKEx1FPlwsfPo58b4pXDvk_75FdREq5Og=',
        name:'Engr. Henry',
        time:time
    }]


    // const Card = fDetails.map(f=>{

    // })

  return (
    <div 
       className='
          shadow-sm shadow-slate-900
          w-full  bg-slate-200 p-3 lg:hidden
    '>
{
    fDetails.map(f=>{
        return(
            <div key={f.label}>
                <span className='
                   text-2xl font-bolder'>{f.label}</span>
                <div className="flex flex-col dp">
                <img src={f.dp} className='rounded-full ' width={100}  alt={'dp'}/>
                <span>{f.name}</span><span>{time}</span>
                </div>
                <p>{f.descpt}</p>
            </div>
        )
    })
}
    </div>
  )
}

export default FloCard
import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full w-2/3 rounded-4xl p-6 flex gap-10 flex-nowrap overflow-x-auto'>
        {props.users.map((elem)=>{
            return (<RightCard key = {elem.id} data={elem}/>)
        })}
        
    </div>
  )
}

export default RightContent

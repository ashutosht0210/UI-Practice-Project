import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    console.log(props.data.img);
  return (
    <div className='h-full w-80 rounded-4xl overflow-hidden relative shrink-0'>
        <img className='h-full w-full object-cover' src= {props.data.img}></img>
        <RightCardContent data = {props.data}/>
        
    </div>
  )
}

export default RightCard

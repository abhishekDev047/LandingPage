
import Blogs from './Components/Blogs';

export default function Home() {
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12];
  return (
<>
    <div className="text-center flex flex-row flex-wrap items-center justify-center">
    
    {arr.map((item, index)=>(
    <Blogs key={item}/>
    ))}
    </div>
</>
  )
}

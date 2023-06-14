import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

function Blogs() {
  return (
    <div className='flex flex-col items-center justify-center border border-black py-3 px-1 w-full sm:w-5/12 lg:w-3/12 rounded-lg m-5 '>
        <div className='my-3 font-bold text-lg sm:text-xl'> The lifeline of Developers </div>
        <div className=''> <Image className='overflow-hidden' height={350} width={500} alt='BlogPost'  src={'/poster.jpg'} layout='intrinsic' ></Image> </div>
        <div className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam suscipit similique minima, dolorem, neque nemo quibusdam beatae molestiae, aspernatur libero at quos excepturi deserunt nam praesentium eveniet alias iste dignissimos? Excepturi officia maxime unde consectetur provident voluptatibus eos est quasi, molestiae dolorem quod molestias nesciunt incidunt eius non.</div>
        <div className='my-3'> <Link className='text-blue-500' href={''}>read more</Link></div>
    </div>
  )
}

export default Blogs;
import { ArrowRight } from 'lucide-react';

const RightCardContent = ({id, intro, tag}) => {
  return (
    <div>
        <div className="flex flex-col justify-between top-0 left-0 absolute p-8 h-full w-full ">

            <h2 className="shadow-2xs rounded-full text-xl font-medium flex justify-center items-center bg-white h-10 w-10">{id}</h2>

            <div>
                <p className="text-white mb-10">{intro}</p>

                <div className='flex justify-between' >
                    <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-2 py-2 rounded-full'><ArrowRight /></button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
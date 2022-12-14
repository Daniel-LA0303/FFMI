import React, {useEffect} from 'react';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const Info = ({
    result
}) => {

    const { fatFreeMass, bodyFat, ffmi, NormalizedFFmi} =result;
  return (
    <div className='w-full'>
    <div className='mx-auto py-4 w-64 sm:w-60 md:w-56 lg:w-64 xl:w-80  '>
        <CircularProgressbar 
            styles={buildStyles({
                pathColor: '#96c93d',
                trailColor: '#f5f5f5',
                textColor: 'white',
                strokeLinecap: 'butt',
                pathTransitionDuration: 1
            })}
            minValue={0}
            maxValue={80}
            value={ffmi}
            text={ffmi}
        />
    </div>
    <div className='mx-8 my-4 sm:mx-4 md:mx-10 text-white'>
        <div className=' flex justify-between mb-1'>
            <p className=' text-lg sm:text-base lg:text-xl '>Fat Free Mass</p>
            <p className=' text-lg sm:text-base lg:text-2xl'>{fatFreeMass} kg</p>
        </div>
        <div className=' flex justify-between mb-1'>
            <p className=' text-lg sm:text-base lg:text-xl '>Body Fat</p>
            <p className=' text-lg sm:text-base lg:text-2xl'>{bodyFat} %</p>
        </div>
        <div className=' flex justify-between mb-1'>
            <p className=' text-lg sm:text-base lg:text-xl '>FFMI</p>
            <p className=' text-lg sm:text-base lg:text-2xl'>{ffmi}</p>
        </div>
        <div className=' flex justify-between mb-1'>
            <p className=' text-lg sm:text-base lg:text-xl '>Normalized FFMI</p>
            <p className=' text-lg sm:text-base lg:text-2xl'>{NormalizedFFmi}</p>
        </div>
        
    </div>
</div>
  )
}

export default Info
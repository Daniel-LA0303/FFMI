import React, {useEffect} from 'react'

const Info = ({
    result, 
    metricImperial, 
    setMetricImperial
}) => {
  return (
    <div className='w-full'>
    <div className='mx-auto py-4 w-64 sm:w-60 md:w-56 lg:w-64 xl:w-80  '>
        {/* <CircularProgressbar 
            styles={buildStyles({
                pathColor: '#96c93d',
                trailColor: '#f5f5f5',
                textColor: 'white',
                strokeLinecap: 'butt',
                pathTransitionDuration: 1
                // weight: 'auto'
            })}
            minValue={0}
            maxValue={80}
            value={ffmi}
            text={ffmi}
        /> */}
    </div>
    <div className='mx-8 my-4 sm:mx-4 md:mx-10 text-white'>
        <div className=' flex justify-between mb-1'>
            <p className=' text-lg sm:text-base lg:text-xl '>Fat Free Mass</p>
            <p className=' text-lg sm:text-base lg:text-2xl'>{fatFreeMass} kg</p>
            {/* <p className=' text-lg sm:text-base lg:text-2xl'>{!metricImperial ? fatFreeMass.toFixed(2) : fatFreeMass1.toFixed(2)} kg</p>  */}
        </div>
        <div className=' flex justify-between mb-1'>
            <p className=' text-lg sm:text-base lg:text-xl '>Body Fat</p>
            <p className=' text-lg sm:text-base lg:text-2xl'>{bodyFat} %</p>
            {/* <p className=' text-lg sm:text-base lg:text-2xl'>{!metricImperial ? bodyFat.toFixed(2) : bodyFatT1.toFixed(2)} %</p> */}
        </div>
        <div className=' flex justify-between mb-1'>
            <p className=' text-lg sm:text-base lg:text-xl '>FFMI</p>
            <p className=' text-lg sm:text-base lg:text-2xl'>{ffmi}</p>
            {/* <p className=' text-lg sm:text-base lg:text-2xl'>{!metricImperial ? ffmi.toFixed(2) : ffmi1.toFixed(2)}</p> */}
        </div>
        <div className=' flex justify-between mb-1'>
            <p className=' text-lg sm:text-base lg:text-xl '>Normalized FFMI</p>
            <p className=' text-lg sm:text-base lg:text-2xl'>{NormalizedFFmi}</p>
            {/* <p className=' text-lg sm:text-base lg:text-2xl'>{!metricImperial ? ffmiAjusted.toFixed(2) : ffmiAjusted1.toFixed(2)}</p> */}
        </div>
        
    </div>
</div>
  )
}

export default Info
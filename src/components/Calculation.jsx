import React, {useState, useEffect} from 'react';

const Calculation = ({
    metricImperial,
    setMetricImperial,
    result, 
    setResult,
    modal
}) => {

    const[data, setData] = useState({
        height: 160,
        weight: 70,
        bodyFat: 10
    });
    const[inches, setInches] = useState(6);
    
    const {height, weight, bodyFat} = data;

    
    let fatFreeMass1, bodyFatT1, meters, ffmi1, ffmiAjusted1, feet;


    useEffect(() => {
        if(metricImperial === false){
            //METRIC
            //fat free mass
            fatFreeMass1 = weight * (1-(bodyFat/100)); //lean weight
            //body fat
            bodyFatT1 = weight * (bodyFat/100); 
            //FFMI
            meters = height/100 ;
            ffmi1 = ((fatFreeMass1/2.2)*2.20462)/Math.pow(meters,2);
            //ajusted ffmi formula
            ffmiAjusted1 = ffmi1 + (6.1 * (1.8 - meters)); 

            setResult({
                fatFreeMass: fatFreeMass1.toFixed(2),
                bodyFat: bodyFatT1.toFixed(0),
                ffmi: ffmi1.toFixed(2),
                NormalizedFFmi: ffmiAjusted1.toFixed(2)
            })
        }else{
            //IMPERIAL
            //fat free mass
            fatFreeMass1 = weight * (1-(bodyFat/100)); //lean weight
            //body fat
            bodyFatT1 = weight * (bodyFat/100); //total body fat
            //FFMI
            ffmi1 = (fatFreeMass1/ 2.2) / Math.pow(((height * 12.0 + inches) * 0.0254), 2);
            //ajusted ffmi formula
            ffmiAjusted1 = ffmi1 + (6.1 * (1.8 - (height * 12.0 + inches) * 0.0254));
            setResult({
                fatFreeMass: fatFreeMass1.toFixed(2),
                bodyFat: bodyFatT1.toFixed(0),
                ffmi: ffmi1.toFixed(2),
                NormalizedFFmi: ffmiAjusted1.toFixed(2)
            })
        }
    }, [data]);

    const getData = (e) => {        
        setData({
            ...data,
            [e.target.name] : Number(e.target.value)
        });
    }

    const changeFunction = () => {
        setMetricImperial(!metricImperial);
        if(metricImperial === false){
            setData({
                height: 5,
                weight: 140,
                bodyFat: 10
            });
            setInches(6)
        }else{
            setData({
                height: 160,
                weight: 70,
                bodyFat: 10
            })
        }
    }
    
  return (
    <>

    <div className=' w-full mx-10 my-5 p-3'>
        <div className={`flex justify-center items-center ${!modal ? 'relative' : 'hidden' }`}>
            <p className='mx-5'>Metric</p>
            <input 
                type="checkbox" 
                onChange={() => changeFunction()}
                className={'cursor-pointer' }
            />
            <p className='mx-5'>Imperial</p>
        </div>
        <div className={!metricImperial ? ' my-16' : null}>
            <div className=' my-4'>
                <div className='flex justify-between text-2xl mb-2'>
                    <p>Height {!metricImperial ? '(m)' : 'Feets'}</p>
                    <p>{height} <span className=' text-sm'>{!metricImperial ? 'cm' :'ft'}</span></p>
                </div>
                <input 
                    type="range" 
                    name='height' 
                    min={!metricImperial ? '120' : '3'} 
                    max={!metricImperial ? '220' : '8'}  
                    className="slider"
                    onChange={getData}
                    value={height}
                />
                
                <div className='flex justify-between text-2xl '>
                    <p>{!metricImperial ? '120 cm' : '3 feet'}</p>
                    <p>{!metricImperial ? '220 cm' : '8 feet'}</p>
                </div>
            </div>
            {!metricImperial ? null : (
                <div className='my-4'>                    
                    <div className='flex justify-between text-2xl  mb-2'>
                        <p>Height Inches</p>
                        <p>{inches} <span className=' text-sm'>in</span></p>
                    </div>
                    <input 
                        type="range" 
                        name='inches' 
                        min="0"
                        max="12" 
                        className="slider" 
                        onChange={(e) => setInches(Number(e.target.value))}
                        value={inches}
                    />
                    
                    <div className='flex justify-between text-2xl '>
                        <p>0 in</p>
                        <p>12 in</p>
                    </div>
                </div>
            )}
            <div className='my-4'>                    
                <div className='flex justify-between text-2xl  mb-2'>
                    <p>Weight</p>
                    <p>{weight} <span className=' text-sm'>{!metricImperial ? 'kg' : 'lb'}</span></p>
                </div>
                <input 
                    type="range" 
                    name='weight' 
                    min={!metricImperial ? '30' : '65'} 
                    max={!metricImperial ? '160' : '350'}
                    className="slider" 
                    onChange={getData}
                    value={weight}/>
                
                <div className='flex justify-between text-2xl '>
                    <p>{!metricImperial ? '30 kg' : '65 lbs'}</p>
                    <p>{!metricImperial ? '160kg' : '350 lbs'}</p>
                </div>
            </div>
            <div className='my-4'>                    
                <div className='flex justify-between text-2xl  mb-2'>
                    <p>Body Fat</p>
                    <p>{bodyFat} <span className=' text-sm'>%</span></p>
                </div>
                <input 
                    type="range" 
                    name='bodyFat' 
                    min="1" 
                    max="100" 
                    className="slider" 
                    onChange={getData}
                    value={bodyFat}/>
                <div className='flex justify-between text-2xl '>
                    <p>0%</p>
                    <p>100%</p>
                </div>
            </div>
        </div>
        
    </div>
</>
  )
}

export default Calculation
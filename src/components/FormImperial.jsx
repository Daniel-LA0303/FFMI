import React from 'react'

const FormImperial = () => {
  return (
    <>
    <div className=' my-3'>
        <form 
            className=""
            // onSubmit={handleSubmit}
        >                      
            {/* {error && <Error />} */}
            <div className="mb-5">
                <label 
                    className="block text-white text-lg font-bold mb-2" 
                    htmlFor="username"
                >
                    City
                </label>
                <input 
                    className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    type="text" 
                    placeholder="City"
                    name='city' 
                    // value={city}
                    // onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label 
                    className="block text-white text-lg font-bold mb-2" 
                    htmlFor="username"
                >
                    City
                </label>
                <input 
                    className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    type="text" 
                    placeholder="City"
                    name='city' 
                    // value={city}
                    // onChange={handleChange}
                />
            </div>
            <div className='my-4'>                    
                <div className='flex justify-between text-2xl text-white mb-2'>
                    <p>Body Fat</p>
                    <p>{} <span className=' text-sm'>%</span></p>
                </div>
                <input 
                    type="range" 
                    name='bodyFat' 
                    min="1" 
                    max="100" 
                    className="slider" 
                    // onChange={getData}
                    // value={bodyFat}
                />
                <div className='flex justify-between text-2xl text-white'>
                    <p>0%</p>
                    <p>100%</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <input 
                    className=" bg-purple-700 w-full hover:bg-purple-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block cursor-pointer" 
                    type="submit"
                    value="Search"
                />
            </div>
        </form>
    </div>
</>
  )
}

export default FormImperial
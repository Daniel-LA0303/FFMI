import { useState } from 'react';
import Calculation from './components/Calculation';
import Info from './components/Info';
import Modal from './components/modal/Modal';

import { motion } from 'framer-motion';


function App() {
  const[result, setResult]=useState({
    fatFreeMass: '',
    bodyFat: '',
    ffmi: '',
    NormalizedFFmi: ''
  });
  const[metricImperial, setMetricImperial] = useState(false);
  const [modal, setModal] = useState(false);
  

  const Toggle = () => setModal(!modal);

  return (
<>
      <div className=" container mx-auto">
        <div className=""
        >
          <motion.div 
            className="grid grid-cols-5 gap-1 h-90 mx-5"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <div 
              className="col-span-5 mx-5 my-10"
            >
              <h1 className='text-center text-5xl text-white'> FFMI Calculator</h1>
              <p className='text-center text-white'>Determine your fat free mass index</p>
            </div>
            <div 
              className="box1 col-span-5 md:col-span-2 rounded-lg"
              
            >
              <div className=" w-full h-full">
                <Info 
                  result={result}
                  metricImperial={metricImperial}
                  setMetricImperial={setMetricImperial}
                />
              </div>
            </div>
            <div 
              className="  box2 col-span-5 md:col-span-3 rounded-lg"
            >
              <div className="p-1 flex justify-center items-center h-full rounded border-green-700">
                <Calculation 
                  metricImperial={metricImperial}
                  setMetricImperial={setMetricImperial}
                  result={result}
                  setResult={setResult}
                  modal={modal}
                />
              </div>
            </div>
            <div className='col-span-5'>
              <div className=" p-2 mt-4 box-cal h-10  rounded-3xl">
                <div className='hidden my-auto sm:flex justify-evenly items-center text-xs lg:text-base text-white font-bold'>
                  <p>Below Average</p>
                  <p>Average</p>
                  <p>Above Average</p>
                  <p>Exellent</p>
                  <p>Supirior</p>
                  <p>Suspicious</p>
                  <p>Unlikely</p>
                </div>
              </div>
              <div className='col-span-5 flex justify-evenly text-white font-bold'>
                <p>16</p>
                <p>17</p>
                <p>18</p>
                <p>19</p>
                <p>20</p>
                <p>21</p>
                <p>22</p>
                <p>23</p>
                <p>24</p>
                <p>25</p>
                <p>26</p>
                <p>27</p>
                <p>28</p>
                <p>29</p>
                <p>30</p>
              </div>
            </div>

            <div className=" col-span-5">
              <div className="flex items-center justify-center my-7">
                    <input 
                        className="btn w-60 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block cursor-pointer" 
                        type="submit"
                        value="Learn more"
                        onClick={() => Toggle()}
                    />
                </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Modal 
        show={modal}
        close={Toggle}
      >
      </Modal>
    </>
  )
}

export default App

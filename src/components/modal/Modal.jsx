import React from 'react';
import reactDom from 'react-dom';
import './Modal.css'

const Modal = ({show, close}) => {
    return reactDom.createPortal(
        <>
            {

                    <div 
                        className={`modalContainer ${show ? "show" : ""}`}
                        onClick={() => close()}
                    >
                        <div 
                            className="modal w-5/6 sm:w-3/6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <header className="modal_header">
                                <h2 className="modal_header_title text-3xl">FFMI Information</h2>
                                <button 
                                    className='close'
                                    onClick={() => close()}
                                >X</button>
                            </header>
                            <main className="modal_content">
                                <div className=' px-6'>
                                    <h1 className='text-center text-2xl font-bold my-3'>What is FFMI</h1>
                                    <p className='mb-4'>FFMI stands for fat free body mass index with which you can calculate the amount of muscle mass relative to height. This index used by bodybuilders to compare themselves to others.
                                        Also FFMI is a an alternative to body mass index.
                                    </p>

                                    <h1 className='text-center text-2xl font-bold'>FFMI formula</h1>
                                    <p><span className=' font-bold'>Total Body Fat</span>  = {'Weight * (body fat [%] / 100)'}</p>
                                    <p><span className=' font-bold'>Lean Weight</span>  = {'Weight * (1 - (body fat [%] / 100)'}</p>
                                    <p><span className=' font-bold'>FFMI</span>  = {'(Lean Weight / 2.2) / ((Feet * 12.0 + Inches) * 0.0254)2'}</p>
                                    <p className='mb-4'><span className=' font-bold'>Adjusted FFMI</span>  = {'FFMI + ( 6.3 * (1.8 - (Feet * 12.0 + Inches) * 0.0254)'}</p>
                                    
                                    <h1 className='text-center text-2xl font-bold my-3'>FFMI interpretation</h1>
                                    <p className='mb-4'>The calculated normalized ffmi can be interpreted using the tables below. You also need to consider that the interpretation for men and women will be different, so there are 2 tables.
                                    </p>
                                </div>
                            </main>
                            <footer className="modal_footer">
                                <button 
                                    className="modal_close btn w-40 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block cursor-pointer"
                                    onClick={() => close()}
                                >Close</button>                                
                            </footer>
                        </div>
                    </div>

            }
        </>, document.getElementById("modal")
    );
}
 
export default Modal;
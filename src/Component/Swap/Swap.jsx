import React from 'react';
import { FaArrowDown } from "react-icons/fa";
import './Swap.css';

const Swap = () => {
  return (
    <div className='--swap'>
      <h1 className='--swap-headerOne'>Swap anytime, <br /> anywhere.</h1>

      <div className='--swap-page'>
        <div className='--swap-page-one'>
          <h1 style={{marginLeft: "10px", paddingTop: "10px"}}>You Pay</h1>
          <section className='--swap-section-one'>
            <input type="number" placeholder='0'/>
            <select>
              <option value="dltToken">DLT TOKEN</option>
            </select>
          </section>
          <p style={{marginLeft: "10px"}}>$....</p>
        </div>

        <h1 className='--flex'><FaArrowDown size={25} /></h1>

        <div className='--swap-page-two'>
          <h1 style={{marginLeft: "10px", paddingTop: "10px"}}>You Receive</h1>
          <section className='--swap-section-two'>
            <input type="number" placeholder='0'/>
            <select className='--swap-select-token'>
              <option value="dltToken">Select token</option>
              <option value="dltToken">USDT</option>
              <option value="dltToken">USDC</option>
            </select>
          </section>
          <p style={{marginLeft: "10px", marginTop: '7px'}}>$....</p>
        </div>
        <button>Connect Wallet</button>
      </div>


      <div>
        <div id="background-wrap">
          <div className="bubble x1"></div>
          <div className="bubble x2"></div>
          <div className="bubble x3"></div>
          <div className="bubble x4"></div>
          <div className="bubble x5"></div>
          <div className="bubble x6"></div>
          <div className="bubble x7"></div>
          <div className="bubble x8"></div>
          <div className="bubble x9"></div>
          <div className="bubble x10"></div>
        </div>    
      </div>
    </div>
  )
}

export default Swap
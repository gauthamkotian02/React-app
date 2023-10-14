import React from 'react'
import Product from './Products';
import bg from '../assets/mega-creator (1).png';

export default function Home() {
  return (
    <div className="hero">
        <div className="card bg-dark text-dark border-0">
  <img style={{height:'650px'}} src={bg} className="card-img" alt="Background"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    {/* <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5> */}
    {/* <p className="card-text lead fs-2">
        CHECK OUT ALL THE TRENDS</p> */}
    </div>
    
  </div>
</div>
<Product/>
    </div>
  )
}

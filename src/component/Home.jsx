import React from 'react'
import bg from '../assets/bg-3.jpg'
export default function Home() {
  return (
    <div classNameName="hero">
        <div className="card bg-dark text-dark border-0">
  <img style={{height:'550px'}} src={bg} className="card-img" alt="Background"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
    <p className="card-text lead fs-2">
        CHECK OUT ALL THE TRENDS</p>
    </div>
    
  </div>
</div>
    </div>
  )
}

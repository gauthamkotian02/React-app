

// Cart.js

import React from 'react';
import { connect } from 'react-redux';
import {delItem,incrementQuantity,decrementQuantity} from '../redux/action/index'



const Cart = ({ cartItems, delItem, incrementQuantity, decrementQuantity }) => {
  

    return (
      <div>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Cart - {cartItems.length} items</h5>
                  </div>
                  <div className="card-body">
                    {cartItems.map(item => (
                     
                      <div key={item.id} className="row">
                       

                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          {/* Image */}
                          <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                            <img src={item.image} className="w-100" alt={item.title} />
                            <a href="#!">
                              <div className="mask" style={{backgroundColor:'#FBFBFB'}}></div>
                            </a>
                          </div>
                          {/* Image */}
                        </div>
  
                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          {/* Data */}
                          <p><strong>{item.title}</strong></p>
                          {/* <p>Color: {item.color}</p>
                          <p>Size: {item.size}</p> */}
                          <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item" onClick={() => delItem(item.id)}>
                            <i className="fa fa-trash"></i>
                          </button>
                          {/* Data */}
                        </div>
  
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          {/* Quantity */}
                          <div className="d-flex mb-4" style={{maxwidth: "300px"}}>
                            <button className="btn btn-primary px-3 me-2" onClick={() => decrementQuantity(item.id)}>
                              <i className="fa fa-minus"></i>
                            </button>
                            <div className="form-outline">
                              <input id="form1" min="0" name="quantity" value={item.quantity} type="number" className="form-control" />
                              <label className="form-label" htmlFor="form1">Quantity</label>
                            </div>
                            <button className="btn btn-primary px-3 ms-2"  onClick={() => incrementQuantity(item.id)}>
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                          {/* Quantity */}
                          {/* Price */}
                          <p className="text-start text-md-center">
                            <strong>${item.price}</strong>
                            
                          </p>
                          
                          {/* Price */}
                        </div>
                      </div>
                      
                    ))}
                  </div>
                </div>
                {/* ... rest of your code */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  


const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems
  };
};

export default connect(mapStateToProps, { delItem,incrementQuantity,decrementQuantity })(Cart);

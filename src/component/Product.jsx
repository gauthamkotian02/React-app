import React, { useState, useEffect, Component } from "react";

export default function Product() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);
  const Loading = () => {
    return <>Loading.....</>;
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Mens Clothing</button>
          <button className="btn btn-outline-dark me-2">Womens Clothing</button>
          <button className="btn btn-outline-dark me-2">Jewelary</button>
          <button className="btn btn-outline-dark me-2">Electronics</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    class="card-img-top mb-0"
                    alt={product.title} height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title.substring(0,12)}...</h5>
                    <p className="card-text lead fw-bold">
                      ₹{product.price}
                    </p>
                    <a href="#" className="btn btn-outline-dark">
                     Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

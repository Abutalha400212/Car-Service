import React from "react";
import { FaStar } from "react-icons/fa";
import img1 from "../../assets/images/products/1.png";
import img2 from "../../assets/images/products/2.png";
import img3 from "../../assets/images/products/3.png";
const Popular = () => {
  const popularProduct = [
    {
      title: "Car Engine Plug",
      price: 20,
      img: img1,
    },
    {
      title: "Car Air Filter",
      price: 20,
      img: img2,
    },
    {
      title: "Cools Led Light",
      price: 20,
      img: img3,
    },
  ];
  return (
    <div className="my-10">
        <div className="text-center mb-4">
        <h1 className=" text-2xl font-bold py-2 ">Browse Our Products</h1>
        <p className="text-sm my-0 py-2">The majority have suffered alteration in some form, by injected humour, or <br />randomised words which don't look even slightly believable. </p>
        </div>
      <div className="grid md:grid-cols-3 gap-5">
      {popularProduct.map((err) => {
        return (
          <div key={err._id} className="card  bg-base-100 shadow-xl image-full">
            <figure>
              <img src={err.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{err.title}</h2>
              <span className="flex"><FaStar/><FaStar/><FaStar/><FaStar/></span>
              <p>Price: ${err.price}</p>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Popular;

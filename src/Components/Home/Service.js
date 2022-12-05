import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
const Service = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(" https://car-service-server.vercel.app/service")
      .then((res) => res.json())
      .then((data) =>{
        setService(data)});
  }, []);


const handleService =(id)=>{

}

  return (
    <div className="mt-4">
        <p className="text-center text-blue-700 font-bold text-xl">Services</p>
        <div className="text-center mb-3">
        <h1 className="text-3xl font-semibold">Our Service Area</h1>
        <p className="text-md ">the majority have suffered alteration in some form, by injected humour, or <br />randomised words which don't look even slightly believable. </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
      {service.map((ser) => <ServiceCard handleService={handleService} key={ser._id} ser={ser} ></ServiceCard>)}
    </div>
    </div>
  );
};

export default Service;

import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const OrderTable = ({ dt, handleDelete, handleStatusUpdate }) => {
  const [orderService, setOrderSevice] = useState({});

  useEffect(() => {
    fetch(`https://car-service-server.vercel.app/service/${dt.service}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderSevice(data.data);
      });
  }, [dt.service]);
  return (
    <tr>
      <td>
        <button onClick={() => handleDelete(dt._id)}>
          <FaTimes />
        </button>
      </td>
      <td>
        <img className="w-28 rounded-md" src={orderService.img} alt="" />
      </td>
      <td>{dt.customer}</td>
      <td>{dt.serviceName}</td>
      <td>{dt.price}</td>
      <td>
        <button
          onClick={() => handleStatusUpdate(dt._id)}
          className="btn btn-active btn-ghost"
        >{ dt?.status ? dt?.status : 'pending' }</button>
      </td>
    </tr>
  );
};

export default OrderTable;

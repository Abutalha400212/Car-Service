import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthProvider } from "../../layout/AuthContext";
import img from "../../assets/images/checkout/checkout.png";
import OrderTable from "./OrderTable";
const Orders = () => {
  const { user,logout } = useContext(AuthProvider);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(`https://car-service-server.vercel.app/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("geniusToken")}`,
      },
    })
      .then((res) => {
        if(res.status===401 || res.status === 403){
          logout()
        }
        
        return res.json()})
      .then((data) => {
        if (data.success) {
          setOrder(data.data);
        } else {
        }
      });
  }, [user?.email,logout]);
  const handleDelete = (id) => {
    fetch(`https://car-service-server.vercel.app/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          const remaining = order.filter((odr) => odr._id !== id);
          setOrder(remaining);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://car-service-server.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const remaining = order.filter((odr) => odr._id !== id);
          const approving = order.find((odr) => odr._id === id);
          approving.status = "Approved";
          const newOrder = [approving, ...remaining];
          setOrder(newOrder);
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="mb-5 relative">
        <img src={img} alt="" />
        <div className="absolute top-1/2 left-5 ">
          <h1 className="text-5xl font-extrabold text-white">Cart Details</h1>
        </div>
      </div>
      <div className="overflow-x-auto my-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>SerVice Name</th>
              <th>Price</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {order.map((dt) => (
              <OrderTable
                dt={dt}
                key={dt._id}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              ></OrderTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

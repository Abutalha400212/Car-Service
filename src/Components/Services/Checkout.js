import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import banner from "../../assets/images/checkout/checkout.png";
import { AuthProvider } from "../../layout/AuthContext";
const Checkout = () => {
  const { user } = useContext(AuthProvider);
  const { _id, title, price } = useLoaderData().data;
  const handleCheckout = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const description = form.description.value;
    const service = {
      service: _id,
      serviceName: title,
      customer: name,
      email,
      phone,
      price,
      description,
    };
    console.log(service);
    fetch("https://car-service-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          form.reset();
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mb-5">
      <div className="mb-5 relative">
        <img src={banner} alt="" />
        <div className="absolute top-1/2 left-5 ">
          <h1 className="text-5xl font-extrabold text-white">{title}</h1>
        </div>
      </div>
      <form onSubmit={handleCheckout} className="bg-gray-100 p-20">
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Second Name"
            className="input w-full"
          />
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="Email"
            className="input w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone No."
            className="input w-full"
          />
        </div>
        <div>
          <textarea
            name="description"
            className="textarea w-full"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="mt-3">
          <button className="btn btn-success w-full">Success</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

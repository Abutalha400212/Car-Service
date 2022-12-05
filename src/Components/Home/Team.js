import React from "react";
import { FaFacebook, FaInstagram, FaMagnet, FaTwitter } from "react-icons/fa";
import img1 from "../../assets/images/team/1.jpg";
import img2 from "../../assets/images/team/2.jpg";
import img3 from "../../assets/images/team/3.jpg";
const Team = () => {
  const team = [
    {
      name: "Car Engine Plug",
      job: "Engine Expert",
      img: img1,
    },
    {
      name: "Car Engine Plug",
      job: "Engine Expert",
      img: img2,
    },
    {
      name: "Car Engine Plug",
      job: "Engine Expert",
      img: img3,
    },
  ];
  return (
    <div className="my-10">
        <div className="text-center mb-5">
            <h1 className="text-3xl font-bold ">Meet Our Team</h1>
            <p className="text-sm font-serif">The majority have suffered alteration in some form, by injected humour, or <br />randomised words which don't look even slightly believable. </p>
        </div>
      <div className="grid md:grid-cols-3 gap-5">
        {team.map((pt) => {
          return (
            <div key={pt._id} className="card bg-base-100 shadow-xl text-center">
              <figure>
                <img src={pt.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="text-xl font-bold ">{pt.name}</h2>
                <p>{pt.job}</p>
                <p className="w-2/5 mx-auto flex justify-around"><FaFacebook/><FaInstagram/><FaTwitter/><FaMagnet/></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;

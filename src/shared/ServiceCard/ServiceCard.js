import React from "react";

const ServiceCard = ({ service }) => {
  const { _id, name, image, price, description } = service;
  return (
    <div className="p-3 border shadow-2xl rounded-md relative" key={_id}>
      <img className="w-full h-64 rounded-t-md" src={image} alt={name} />

      <h2 className="text-2xl font-bold mt-2">{name}</h2>
      <p className="my-2 mb-8">{description.slice(0, 100)}...</p>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex justify-between items-center p-2 px-3">
          <p className="text-xl font-semibold">${price}</p>
          <button className="btn btn-sm">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

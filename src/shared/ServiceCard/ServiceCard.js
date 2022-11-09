import React from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, name, image, price, description } = service;
  return (
    <PhotoProvider>
        <div className="p-3 border shadow-2xl rounded-md relative">
      <PhotoView src={image}>
          <Link
            title="click to see full screen">
            <img className="w-full h-64 rounded-t-md" src={image} alt={name} />
          </Link>
      </PhotoView>

      <h2 className="text-2xl font-bold mt-2">{name}</h2>
      <p className="my-2 mb-8">{description.slice(0, 100)}...</p>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex justify-between items-center p-2 px-3">
          <p className="text-xl font-semibold">${price}</p>
          <Link to={`/services/${_id}`}><button className="btn btn-sm">See Details</button></Link>
        </div>
      </div>
    </div>
    </PhotoProvider>
  );
};

export default ServiceCard;

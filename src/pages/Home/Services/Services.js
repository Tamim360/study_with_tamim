import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import ServiceCard from "../../../shared/ServiceCard/ServiceCard";

const Services = () => {
  const { setLoading } = useContext(AuthContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://study-with-tamim.vercel.app/services?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
    setLoading(false);
  }, []);

  return (
    <div className="p-4 lg:px-8 bg-slate-100">
      <p className="w-max mx-auto text-xs rounded-full font-bold bg-violet-500/50 text-violet-800 p-1 px-2 ">
        SERVICES
      </p>
      <h2 className="text-center my-2 text-3xl font-bold">Our Services</h2>
      <p className="text-center mb-2">
        we provide qualityfull courses like learning quran, learning hadith,
        hifzul quran, learning fiqh and many more. <br />
        sharp your knowledge with our top quality courses among others.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <Link to={"/services"}>
        <button className="btn btn-outline mx-auto block mb-3 mt-8 font-bold px-8">
          SEE ALL
        </button>
      </Link>
    </div>
  );
};

export default Services;

import React from "react";
import '../App.css';

const Data = ({ passedData }) => {
  const { ip, location, isp } = passedData;

  return (
    <div className="bg-white h-full  w-5/6  self-center rounded-xl lg:flex z-30 " id="dataContainer">
      <section className="flex flex-col m-2 lg:m-8 justify-center lg:w-1/4 lg:text-start">
        <p className="text-darkGrey text-xs text-center uppercase font-rubik font-medium lg:text-left">
          ip address
        </p>
        <p className="font-rubik text-sm text-center font-medium lg:text-left">
          {ip ? ip : '/'}
        </p>{" "}
      </section>
      <div className="vl"></div>
      <section className="flex flex-col  m-2 lg:m-8 justify-center lg:w-1/4 lg:justify-start">
        <p className="text-darkGrey text-xs text-center uppercase font-rubik font-medium lg:text-left">
          location
        </p>
        <p className="font-rubik text-sm text-center font-medium lg:text-left">
          {location && location.city ? `${location.city}, ${location.region} ${location.geonameId}` : '/'}
        </p>{" "}
      </section>
      <div className="vl"></div>
      <section className="flex flex-col  m-2 lg:m-8 justify-center lg:w-1/4 lg:justify-start">
        <p className="text-darkGrey text-xs text-center uppercase font-rubik font-medium lg:text-left">
          timezone
        </p>
        <p className="font-rubik text-sm text-center font-medium lg:text-left">
          {location && location.timezone ? `UTC ${location.timezone}` : '/'}
        </p>{" "}
      </section>
      <div className="vl"></div>
      <section className="flex flex-col  m-2 lg:m-8 justify-center lg:w-1/4 lg:justify-start">
        <p className="text-darkGrey text-xs text-center uppercase font-rubik font-medium lg:text-left">
          isp
        </p>
        <p className="font-rubik text-sm text-center font-medium lg:text-left">
          {isp ? isp : '/'}
        </p>{" "}
      </section>
    </div>
  );
}

export default Data;

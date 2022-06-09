import React from "react";

const Services = () => {
  return (
    <div className="m-10">
      <h2 className="font-bold text-4xl">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        <div className="card glass hover:bg-secondary mx-auto bg-secondary text-white">
          <div className="card glass mx-auto mt-3">
            <figure>
              <img src="" alt="product" className="h-56" />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title"></h2>
            <p className="text-sm text-left"></p>
            <p className="text-left text-lg ">
              Minimum Order :
              <span className="text-primary font-semibold"> </span>
              pieces
            </p>
            <p className="text-left text-lg">
              Available Quantity :{" "}
              <span className="text-primary font-semibold"></span> pieces
            </p>
            <div className="card-actions  justify-around items-center mt-3">
              <h2 className="text-xl font-semibold ">
                Price: <span className="text-primary"> </span>
              </h2>
              <button className="btn btn-primary font-bold">
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

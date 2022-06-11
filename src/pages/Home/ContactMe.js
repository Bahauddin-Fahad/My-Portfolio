import React from "react";

const ContactMe = () => {
  return (
    <div className="hero ">
      <div className="card flex-shrink-0 w-full max-w-lg sm:pt-5 lg:pt-0">
        <div className="card-body">
          <h4 className="text-white text-center text-2xl font-bold">
            Contact Me
          </h4>
          <div className="form-control">
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <textarea
              type="text"
              placeholder="Your Message"
              className="input input-bordered h-32"
            />
          </div>
          <div className="form-control mt-2 w-full">
            <button className="btn btn-primary font-bold">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

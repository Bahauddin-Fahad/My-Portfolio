import React from "react";
import { BsFillPersonFill, BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
const ContactMe = () => {
  return (
    <div className="mt-16 flex flex-col items-center">
      <h2 className="text-primary text-4xl font-bold">Get in Touch</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex lg:justify-end">
          <div className="card flex-shrink-0 w-full max-w-lg sm:pt-5 lg:pt-0">
            <div className="card-body">
              <h4 className="text-white text-2xl font-bold">Contact Me</h4>
              <div className="flex flex-col lg:flex-row gap-2">
                <div className="form-control lg:w-1/2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control lg:w-1/2">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="input input-bordered"
                  />
                </div>
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
                  className="input input-bordered h-16"
                />
              </div>
              <div className="form-control mt-2 w-full">
                <button className="btn btn-primary font-bold">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white flex flex-col lg:justify-center ">
          <h4 className="text-2xl font-bold">Contact Info</h4>
          <div className="flex flex-col justify-center gap-5 py-10">
            <div className="flex items-center gap-2">
              <BsFillPersonFill className="w-6 h-6 text-primary" />{" "}
              <h2 className="text-lg">S.M. Bahauddin Fahad</h2>
            </div>
            <div className="flex items-center gap-2">
              <BsTelephoneFill className="w-5 h-5 text-primary" />{" "}
              <h2 className="text-lg">+8801864752819</h2>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="w-6 h-6 text-primary" />{" "}
              <h2 className="text-lg">bahauddin.fahad819@gmail.com</h2>
            </div>
            <div className="flex items-center gap-2">
              <MdLocationPin className="w-6 h-6 text-primary" />{" "}
              <h2 className="text-lg">Muradpur,Chattogram,Bangladesh</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

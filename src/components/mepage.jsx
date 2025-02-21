import React from "react";
import img from "./my342.jpg";

function Mepage() {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className=" p-8 rounded-lg shadow-lg max-w-1/2 w-full">
        <div className="flex flex-col md:flex-row item justify-between space-y-4 md:space-y-0">
          <img
            src={img}
            alt="Profile"
            className="w-full h-44 rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
            <span className="text-gray-400 block">Web Developer</span>
            <h4 className="text-2xl text-gray-800 font-bold mb-2">Alex Smith</h4>
            <p className="text-gray-700">
              Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
              convallis, risus non condimentum gravida, odio mauris ullamcorper
              felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia
              urna, a placerat sapien pretium eu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mepage;
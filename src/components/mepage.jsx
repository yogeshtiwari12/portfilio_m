import React from "react";
import img from "./my342.jpg";

function Mepage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full px-6">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-2/3 text-center md:text-left">
            <span className="text-gray-400 block text-lg">MERN Stack Developer</span>
            <h4 className="text-3xl text-gray-800 font-bold">Yogesh Tiwari</h4>
       <p className="text-gray-700 mt-3 leading-relaxed">
              Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
         convallis, risus non condimentum gravida, odio mauris ullamcorper
              felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia
              urna, a placerat sapien pretium eu.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <img
              src={img}
              alt="Profile"
              className="w-40 h-40 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mepage;

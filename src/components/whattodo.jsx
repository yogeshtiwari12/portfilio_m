import React from "react";

function Whattodo() {
  return (
    <div className=" min-h-150vh p-8">
      <h2 className="text-3xl font-bold text-gray-600 space-x-16 mb-8">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div className="text-blue-500 text-3xl mr-4">
              <i className="linecons linecons-pen"></i>
            </div>
            <h4 className="text-xl text-gray-600  font-bold">Copywrite</h4>
          </div>
          <p className="text-gray-700">
            Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div className="text-blue-500 text-3xl mr-4">
              <i className="linecons linecons-display"></i>
            </div>
            <h4 className="text-xl  text-gray-600 font-bold">Web Design</h4>
          </div>
          <p className="text-gray-700">
            Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div className="text-blue-500 text-3xl mr-4">
              <i className="linecons linecons-shop"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-600 ">Ecommerce</h4>
          </div>
          <p className="text-gray-700">
            Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div className="text-blue-500 text-3xl mr-4">
              <i className="linecons linecons-megaphone"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-600 ">Marketing</h4>
          </div>
          <p className="text-gray-700">
            Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whattodo;
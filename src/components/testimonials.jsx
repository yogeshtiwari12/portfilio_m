import React from 'react'

function Testimonials() {
  return (
    <div className="min-h-[400px] p-8">
      <h2 className="text-3xl font-bold text-gray-600 mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
          </p>
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="text-xl font-bold">John Doe</h4>
              <span className="text-gray-500">CEO, Company</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-4">
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          </p>
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="text-xl font-bold">Jane Smith</h4>
              <span className="text-gray-500">CTO, Another Company</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-4">
            "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </p>
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="text-xl font-bold">Alice Johnson</h4>
              <span className="text-gray-500">Manager, Some Company</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

import React from 'react'
import ie1 from './images/event1.jpg'

function Event() {
  return (
    <div classNameName="flex gap-2  flex-col">
  <div className=" overflow-auto max-w-7xl h-200 mx-auto border-2 border-teal-300 rounded-lg p-8 flex-1">
    <h1 className="text-4xl font-bold text-center mb-8">Seminaire</h1>
    <p className="text-gray-600 text-lg mb-8">21-12-2023</p>
    <img src={ie1} alt="Event Image" className="clear-right float-left p-6 w-96 mb-8"/>
    <div className="prose max-w-none mb-8">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    </div>
    <div className="flex justify-start">
      <a href="#" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">Register</a>
    </div>
  </div>
  <div className=" overflow-auto max-w-7xl h-200 mx-auto border-2 border-teal-300 rounded-lg p-8 flex-1">
    <h1 className="text-4xl font-bold text-center mb-8">Seminaire</h1>
    <p className="text-gray-600 text-lg mb-8">21-12-2023</p>
    <img src={ie1} alt="Event Image" className="clear-right float-left p-6 w-96 mb-8"/>
    <div className="prose max-w-none mb-8">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    </div>
    <div className="flex justify-start">
      <a href="#" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">Register</a>
    </div>
  </div>
  
</div>
  )
}

export default Event
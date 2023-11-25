import React from 'react'

const page = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-red-500 h-screen flex justify-center items-center">
      <div className="text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-wide">luma*</p>
        <h1 className="text-4xl font-bold mt-2">
          Luma iOS App, Luma Calendars, and Event Updates
        </h1>
        <p className="text-base font-medium mt-4">Fall 2023 Release</p>
      </div>
      <div className="absolute top-4 right-4">
        <button className="text-white uppercase text-sm font-medium">Sign In</button>
      </div>
    </div>
  )
}

export default page


import sports from "../images/sports.jpg";
import play from "../images/play.jpg"
import fest from "../images/fest.jpg";
import science from "../images/science.jpg";
import library from "../images/library.jpg"
import classrooms from "../images/classrooms.jpg"
import React from "react";

export const Gallery=()=>{
    return (
        <>
    
    <div className="block sm:flex">
        <div className="sm:w-1/3 h-64 m-5">
          <div>
            <p className="ml-24  mb-2 text-lg font-bold mt-10 sm:mt-0">Annual Sports Day</p>
            <img src={sports} alt="sports" className="w-full h-64 rounded-md shadow-2xl shadow-black hover:scale-110 duration-500 transition-transform" />
          </div>
        </div>
        <div className="sm:w-1/3 h-64 m-5">
          <div>
            <p className="ml-32 mb-2 text-lg font-bold mt-20 sm:mt-0">Cultural fest</p>
            <img src={fest} alt="fest" className="w-full h-64 rounded-md shadow-2xl shadow-black hover:scale-110 duration-500 transition-transform" />
          </div>
        </div>
        <div className="sm:w-1/3 h-64 m-5">
          <div>
            <p className="ml-28 mb-2 text-lg font-bold mt-20 sm:mt-0">Science Exhibition</p>
            <img src={science} alt="science" className="w-full h-64 rounded-md shadow-2xl shadow-black hover:scale-110 duration-500 transition-transform" />
          </div>
        </div>
      </div>
    <br />
    <br />
      <div className="block sm:flex ">
        <div className="sm:w-1/3  h-64 m-5">
          <div>
            <p className="ml-40 mb-2 text-lg font-bold mt-20 sm:mt-0">Library</p>
            <img src={library} alt="sports" className="w-full h-64 rounded-md shadow-2xl shadow-black hover:scale-110 duration-500 transition-transform" />
          </div>
        </div>
        <div className="sm:w-1/3 h-64 m-5">
          <div>
            <p className="ml-32 mb-2 text-lg font-bold mt-20 sm:mt-0">Classrooms</p>
            <img src={classrooms} alt="fest" className="w-full h-64 rounded-md shadow-2xl shadow-black hover:scale-110 duration-500 transition-transform" />
          </div>
        </div>
        <div className="sm:w-1/3 h-64 m-5">
          <div>
            <p className="ml-28 mb-2 text-lg font-bold mt-20 sm:mt-0">Play Ground</p>
            <img src={play} alt="play" className="w-full h-64 rounded-md shadow-2xl shadow-black hover:scale-110 duration-500 transition-transform" />
          </div>
        </div>
      </div>
<br />
<br />
    </>
    )
}
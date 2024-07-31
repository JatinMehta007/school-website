import React, { useState } from "react"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars }  from '@fortawesome/free-solid-svg-icons';
import sports from "../images/sports.jpg";
import fest from "../images/fest.jpg";
import science from "../images/science.jpg";
// import { useState } from "react";
import Menu from "../images/Menu.png"

import logo4 from '../images/logo4.png'


export const  Navbar = ()=>{
    // const [mobileview ,setMobileView] = useState(false);
  
    

    return ( <>
        <nav className="h-20 w-full flex justify-between md:justify-around items-center sticky top-0 bg-white  ">
          <div className="w-auto">
            <img src={logo4} alt="" className="w-20 max-w-[100px] sm:max-w-none "/>
          </div>
            <div className="text-right font-bold text-indigo-600 md:hidden "> 
                <h4 className="text-xs justify-end sm:text-base md:text-lg"> Springdal Public School</h4>
            </div>
           
         <div>

        {/* <FontAwesomeIcon icon={faBars} className="flex justify-end md:hidden md:p-8 " /> */}
        <img src={Menu} alt="menu" className="flex justify-end md:hidden md:p-8 w-5"  />
         
         </div>
          <div>
            <ul className="navbar hidden  sm:space-x-12 md:text-black md:font-bold md:mt-2 md:flex">
            <li><Link className="text-yellow-600 border-b-2 border-solid border-indigo-600 hidden sm:block">Home</Link></li>


            <li><Link to='/about' className="hover:text-yellow-600 hover:border-b-2 hover:border-solid hover:border-indigo-600 hidden sm:block">About us</Link></li>

            <li><Link to ="/academics" className="hover:text-yellow-600 hover:border-b-2 hover:border-solid hover:border-indigo-600 hidden sm:block">Academics</Link></li>

            <li><Link to="/admission" className="hover:text-yellow-600 hover:border-b-2 hover:border-solid hover:border-indigo-600 hidden sm:block">Admissions</Link></li>
            
            <li><Link to ="faculty" className="hover:text-yellow-600 hover:border-b-2 hover:border-solid hover:border-indigo-600 hidden sm:block">Faculty</Link></li>

            <li><Link to="students" className="hover:text-yellow-600 hover:border-b-2 hover:border-solid hover:border-indigo-600 hidden sm:block">Students</Link></li>

            <li><Link to="gallery" className="hover:text-yellow-600 hover:border-b-2 hover:border-solid hover:border-indigo-600 hidden sm:block">Gallery</Link></li>

            <li><Link to="contact" className="hover:text-yellow-600 hover:border-b-2 hover:border-solid hover:border-indigo-600 hidden sm:block">Contact us</Link></li>
            
            </ul>
          </div>
        
        </nav>

      <div className="text-2xl mt-7  md:mt-12 ">
        <p className="text-amber-600 flex justify-center sm:text-3xl  md:text-6xl">Springdale Public School</p>
        </div>
        <div className=" mt-4 md:mt-12 ">
          <p className="text-indigo-600 text-xs underline flex justify-center md:mr-12 md:text-2xl">"where we nurture young minds for a brighter future"</p>
      </div>
      <br />

      {/* Banner Highlights */}

      <div className="block md:flex">
        <div className="md:w-1/3  md:h-64 m-5">
          <div>
            <p className="ml-24 mb-2 md:text-lg  font-bold sm:ml-16">Annual Sports Day</p>
            <img src={sports} alt="sports" className="w-full md:h-64 rounded-md shadow-2xl shadow-black hover:scale-110 duration-500 transition-transform" />
          </div>
        </div>
        <div className="md:w-1/3 md:h-64 m-5">
          <div>
            <p className="ml-32 mb-2 md:text-lg font-bold">Cultural fest</p>
            <img src={fest} alt="fest" className="w-full md:h-64 rounded-md shadow-2xl shadow-black hover:scale-110 duration-500 transition-transform" />
          </div>
        </div>
        <div className="md:w-1/3 md:h-64 m-5">
          <div>
            <p className="ml-28 mb-2 md:text-lg font-bold">Science Exhibition</p>
            <img src={science} alt="science" className="w-full md:h-64 rounded-md shadow-2xl shadow-black hover:scale-110 duration-500 transition-transform" />
          </div>
        </div>
      </div>
      <br />
      <br />
      </>
    )       
}
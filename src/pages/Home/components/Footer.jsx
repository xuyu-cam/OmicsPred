import React from "react";

import twitter from "..//..//..//Assets/icons/twitter.png";
import copy from "..//..//..//Assets/icons/copy.png";
import link from "..//..//..//Assets/icons/link.png";

export default function Footer() {
  return (
    <div
      className="grid place-items-center  mt-10 w-full h-[50px] bg-white"
      style={{ "border-top": "1px solid rgb(240, 244, 248)" }}
    >
      <div
        className="grid place-items-center lg:flex  my-2 w-full h-[50px] bg-white"
      >
        <div className="w-auto lg:mx-6 lg:w-[90%] flex space-x-10 text-slate-500  text-sm">
          <a href="https://twitter.com/CamBakerSGI" className="flex space-x-4 hover:text-indigo-400">
            <img className="h-[25px]" src={twitter}  />
             <div> TWITTER</div>
          </a>
          <a href="http://www.inouyelab.org/" className="flex space-x-4 hover:text-indigo-400">
            <img className="h-[25px]" src={link} />
          <div> LAB'S WEBSITE  </div>  
          </a>
          <a href="https://creativecommons.org/about/cclicenses/" className="flex space-x-4 hover:text-indigo-400">
            <img className="h-[25px]" src={copy} />
            <div>
               ALL GENETICS SCORES ARE PROVIDED UNDER A CC-BY LICENSE
            </div>
           
          </a>
          
        </div>
  
      </div>
    </div>
  );
}

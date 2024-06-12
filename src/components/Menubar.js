import React from 'react'
import all from '../assets/all.png'
import man from '../assets/man.png'
import woman from '../assets/woman.png'
import ring from '../assets/ring.png'
import electronics from '../assets/electronics.png'

const Menubar = ({handleFilter}) => {
  return (
    <div className="flex justify-between overflow-x-auto whitespace-nowrap space-x-4 text-center">
      <div onClick={() => handleFilter("")} className="cursor-pointer flex-shrink-0">
        <img src={all} alt="all" />
        <p className=''>All</p>
      </div>
      <div
        onClick={() => handleFilter("electronics")}
        className="cursor-pointer flex-shrink-0"
      >
        <img src={electronics} alt="electronics" />
        <p>Electronics</p>
      </div>
      <div onClick={() => handleFilter("men")} className="cursor-pointer flex-shrink-0">
        <img src={man} alt="man" className="mt-2" />
        <p>Men</p>
      </div>
      <div onClick={() => handleFilter("women")} className="cursor-pointer flex-shrink-0">
        <img src={woman} alt="woman" className="mt-2" />
        <p>Women</p>
      </div>
      <div onClick={() => handleFilter("jewelery")} className="cursor-pointer flex-shrink-0">
        <img src={ring} alt="ring" className="mt-2" />
        <p>Fashion</p>
      </div>
    </div>
  );
}

export default Menubar
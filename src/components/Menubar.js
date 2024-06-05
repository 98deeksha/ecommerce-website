import React from 'react'

const Menubar = ({handleFilter}) => {
  return (
    <div className="flex justify-space">
      <div onClick={() => handleFilter("")} className='cursor-pointer'>
        <p>🐊</p>
        <p>All</p>
      </div>
      <div onClick={() => handleFilter("electronics")} className='cursor-pointer'>
        <p>📱</p>
        <p>Electronics</p>
      </div>
      <div onClick={() => handleFilter("men")} className='cursor-pointer'>
        <p>👨‍🦱</p>
        <p>Men</p>
      </div>
      <div onClick={() => handleFilter("women")} className='cursor-pointer'>
        <p>👧</p>
        <p>Women</p>
      </div>
      <div onClick={() => handleFilter("jewelery")} className='cursor-pointer'>
        <p>💍</p>
        <p>Fashion</p>
      </div>
    </div>
  );
}

export default Menubar
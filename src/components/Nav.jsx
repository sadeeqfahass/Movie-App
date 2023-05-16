import React from 'react'

function Nav() {
  return (
    <div className='nav'>
      <div className="search">
        <input type="text" placeholder='Search...'/>
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  )
}

export default Nav

import React from 'react'
import logo from './GloboLogo.png'

function Header({subtitle}) {
  return (
    <header className='row items-center justify-between'>
      <div className='col-md-5'>
        <img src={logo} alt="logo" className="logo"/>
      </div>
      <div className='col-md-7 mt-4 subtitle'>
        {subtitle}
      </div>
    </header>
  )
}

export default Header

import React from 'react'

function Header({subtitle}) {
  return (
    <header className='row items-center justify-between'>
      <div className='col-md-5'>
        <img src="https://www.pluralsight.com/teach/author-tools/globomantics/images/Globo-Logo-white.svg" alt="logo" className="logo"/>
      </div>
      <div className='col-md-7 mt-4 subtitle'>
        {subtitle}
      </div>
    </header>
  )
}

export default Header

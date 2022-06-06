import React from 'react'
import Link from './Link'

function Header() {
  return (
    <div className="ui secondary pointing menu">
        <Link href='/' className='item'>Accordion</Link>
        <Link href='/Search' className='item'>Search</Link>
        <Link href='/DropDown' className='item'>DropDown</Link>
        <Link href='/Translate' className='item'>Translate</Link>
    </div>
  )
}

export default Header
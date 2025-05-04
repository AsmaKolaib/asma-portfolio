import React from 'react'

 const Header = () => {
  return (
    <div className=' container mx-auto grid grid-cols-2 justify-between items-center p-8 '>
        <h1 className=' font-robuka text-5xl lg:text-7xl '> AK</h1>
        <ul className=' flex flex-row justify-end gap-8 text-2 '> 
            <li>About</li>
            <li>Projects</li> 
            <li>Connect </li>
        </ul>
    </div>
  )
}
export default Header
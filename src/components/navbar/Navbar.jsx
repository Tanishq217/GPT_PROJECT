import React, { useState } from 'react'
import './Navbar.css' 
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT-3?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Features</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          GPT-3
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p className='pushdown'>Sign In</p>
        <button>Sign Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
      {toggleMenu
  ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
  : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
}

        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p className='pushdown'>Sign In</p>
                <button>Sign Up</button>
</div>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar


// THis is MY first chnage and check for git // 
// thsi is new  change
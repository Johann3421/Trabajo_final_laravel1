import React, {useState} from 'react'
import './navbar.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { createRoot } from 'react-dom/client'



const Navbar = () => {

  const [active, setActive] = useState('navBar')
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }

  // codigo para remover el nav

  const removeNav =()=>{
    setActive('navBar')
  }


  const [transparent, setTransparent] =useState('header')
  const addBg = ()=>{
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    }
    else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <section className='navBarSection'>
      <div className={transparent}>

        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className='flex'><SiYourtraveldottv className="icon"/>
            Hco
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <li className="navItem">
                <a href={{ route:"products.index" }} className="navLink">Products</a>
            </li>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Resources</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contacts</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Blog</a>
            </li>

            <div className="headerBtns flex">
              <button className='btn loginBtn'>
                <a href="#">Login</a>
              </button>
              <button className='btn'>
                <a href="#">Registrate</a>
              </button>
            </div>

          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toogleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </div>
    </section>
  )
}

export default Navbar

if (document.getElementById('navbar')) {
  const Index = createRoot(document.getElementById("navbar"));

  Index.render(
      <React.StrictMode>
          <Navbar/>
      </React.StrictMode>
  )
}
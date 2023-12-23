import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {


   const navigate = useNavigate()
    const handleLoginPage =()=> navigate('../LoginPage')
    const handleHomePage =()=> navigate('../')
    const handleProductsPage =()=> navigate('../ProductsPage')

  return (
    <>
        <div className="nav-container">
            <h3>MINIMALS</h3>
            <div className="nav-links">
                <button onClick={handleHomePage} >HOME</button>
                <button onClick={handleProductsPage} >PRODUCTS</button>
                <button onClick={handleLoginPage} >LOGIN</button>
                <button>ABOUT</button>
            </div>
        </div>
    </>
  )
}

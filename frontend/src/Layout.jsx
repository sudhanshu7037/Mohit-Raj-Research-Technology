import React from 'react'
import NavBar from './components/NabBar'
import Footer from './components/Footer'




const Layout = ({children}) => {
  return (
    <>
    <NavBar/>
    <main className="min-h-[80vh]">{children}</main>
    <Footer/>
    </>
  )
}

export default Layout
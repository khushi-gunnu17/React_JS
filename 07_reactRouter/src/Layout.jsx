import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// React Router DOM is an npm package that enables you to implement dynamic routing in a web app

// react-router-dom is a third party package

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
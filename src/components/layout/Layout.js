'use client'
import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Layout = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 300,
            once: true,
        })
    }, [])
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />

        </>
    )
}

export default Layout

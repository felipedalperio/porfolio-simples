import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Posts from '../components/Posts'

export default function Home() {
  return (
    <>
      <Header />
      <Posts/>
      <About />
      <Contact/>
      <Footer/>
    </>
  ) 
}

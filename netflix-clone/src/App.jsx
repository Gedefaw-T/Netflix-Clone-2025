import React from 'react'
import  "./App.css"
import Home from './Pages/Home/Home'
import Header from './Component/Header/Header'
import Footer from "./Component/Footer/Footer"
import Banner from './Component/Banner/Banner'
import RowList from './Component/Rows/RowList/RowList'

function App() {
  return (
    <>
      
      <Header/>
      <Banner/>
      <RowList/>
      <Footer/>

    </>
  )
}

export default App

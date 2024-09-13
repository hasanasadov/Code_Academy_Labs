import React, { useState } from 'react'
import Header from './Comp/Header'
import List from './Comp/List'
import Footer from './Comp/Footer'
import './App.css';


function App() {
    const  [data ,setData] = useState([]);

  return (
    <>
      <h1>To Do</h1>
      <div className='container'>
        <Header setData={setData} />
        <List setData={setData} data={data} />
        <Footer setData={setData} data={data}/>
      </div>
      <footer>
          <p>Click to edit a todo</p>
          <p>Created by <a href="https://github.com/hasanasadov/"> Hasanali Asadov </a></p>
          <a href="https://github.com/hasanasadov/Code_Academy_ToDo">Source Code</a>
      </footer>
    </>
    
  )
}

export default App

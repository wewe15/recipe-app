import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Header  from './Header';
import  Footer  from './Footer';
import  Home  from './Home';
import AddForm from './AddForm';


function App() {  
  return (  
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-recipe" element={<AddForm />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
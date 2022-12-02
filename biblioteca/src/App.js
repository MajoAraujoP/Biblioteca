import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './COMPONENTS/HOME/home';
import Login from './COMPONENTS/login';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"
      element={
        <Login/>
      }/>
      <Route path="/:id"
      element={
        <Home/>
      }/>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;


/*return (
  <BrowserRouter>
    <Routes>
      <Route path="/"
      element={
        <ListOfPokemon
        getPokemon={getPokemon}/>
      }/>
      <Route path="/:id"
      element={
        <CharactersPokemon
        list={getPokemon}/>
      }/>
    </Routes>
  </BrowserRouter>
);*/


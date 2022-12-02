import React from 'react';
import './App.css';
import Form from './COMPONENTS/adminView/form';
import List from './COMPONENTS/adminView/list';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import Input from './COMPONENTS/adminView/input';




function App() {
  return (
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


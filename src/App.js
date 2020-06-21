import React from 'react';
import './App.css';
import Form from './components/textFieldComponent/textField'
import PersonWithRating from './components/PersonWithRating/PersonWithRating';
import Form from './components/FormComponent/Form';
import Button from './components/ButtonComponent/Button';
import DropDownDate from './components/DropdownDateComponent/DropdownDate';

function App() {
  return (
    <div className="App">
      
      <Form/>
      <div className ="buttonContainer">
      <Button/>
      <Button/>
      </div>
     
    <h1>Select a date </h1>
      <DropDownDate/>

       
    </div>
  );
}

export default App;

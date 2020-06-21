import React from 'react';
import './App.css';
import PersonWithRating from './components/PersonWithRatingComponent/PersonWithRating';
import Form from './components/FormComponent/Form';
import Button from './components/ButtonComponent/Button';
import DropDownDate from './components/DropdownDateComponent/DropdownDate';
import RadioButton from './components/RadioButtonComponent/RadioButton';

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

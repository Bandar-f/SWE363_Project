import React from 'react';
import './App.css';
import Form from './components/textFieldComponent/textField'
import PersonWithRating from './components/PersonWithRating/PersonWithRating';
import Form from './components/FormComponent/Form';
import Button from './components/ButtonComponent/Button';

function App() {
  return (
    <div className="App">
      
      <Form/>
      <div className ="buttonContainer">
      <Button/>
      <Button/>
      </div>
     

       
    </div>
  );
}

export default App;

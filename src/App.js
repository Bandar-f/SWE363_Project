import React from 'react';
import './App.css';
import PersonWithRating from './components/PersonWithRatingComponent/PersonWithRating';
import Form from './components/FormComponent/Form';
import Button from './components/ButtonComponent/Button';
import DropDownDate from './components/DropdownDateComponent/DropdownDate';
import NavBar from './components/navBarComponent/navBar'
import FloatingLogo from './components/floatingLogoComponent/floatingLogo';
import RadioButton from './components/RadioButtonComponent/RadioButton';
import './welcomePage.css'

function App() {
  return (
    <div className="App">
      <header>
      <NavBar header="Placeholder text"/>
      </header>
      <section>
      <FloatingLogo/>
      <RadioButton/>
      <Form/>
      <div className ="buttonContainer">
      <Button/>
      <Button/>
      </div>
    <h1>Select a date </h1>
      <DropDownDate/>
      </section>
       
    </div>
  );
}

export default App;

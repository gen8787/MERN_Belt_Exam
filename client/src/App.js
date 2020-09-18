import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import { Container, Divider } from '@material-ui/core';

//==   C O M P O N E N T S   ==||
import CreatePet from './components/CreatePet';
import AllPets from './components/AllPets';
import OnePet from './components/OnePet';
import UpdatePet from './components/UpdatePet';

function App() {
//==   R E T U R N   ==||
  return (
    <Container>
      <Container>
          <h1 className="mt-1">Pet Shelter</h1>
          <Link to="/">view all pets</Link>
          <span> | </span>
          <Link to="/pets/new">add a pet to the shelter</Link>
          <Divider/>
        </Container>

      <Router>
        <CreatePet path="/pets/new" />
        <AllPets path="/" />
        <OnePet path="/pets/:id" />
        <UpdatePet path="/pets/:id/edit" />
      </Router>
    </Container>
  );
}

export default App;
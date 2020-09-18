import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import { Container, Button, Divider, Paper } from '@material-ui/core';

//==   C O M P O N E N T S   ==||
import Create from './components/Create';
import All from './components/All';
import One from './components/One';
import Update from './components/Update';

function App() {
//==   R E T U R N   ==||
  return (
    <Container>
      <Container>
          <h1 className="mt-1">MERN Belt Exam</h1>
          <Link to="/">View All</Link>
          <span> | </span>
          <Link to="/new">Add New</Link>
          <Divider/>
        </Container>

      <Container className="mt-3">
        <Paper variant="outlined" className="p-1">
          <h3>All Data:</h3>
        </Paper>
      </Container>

      <Router>
        {/* <Create path="/new" />
        <All path="/" />
        <One path="/:id" />
      <Update path="/:id/update" /> */}
      </Router>
    </Container>
  );
}

export default App;
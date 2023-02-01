import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Greet2 from './components/Greet2';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import PersonList from './components/PersonList';
import { Status } from './components/Status';
function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }
  const nameList =
    [{
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }

    ]
  return (
    <div className='App'>
      <Greet name='Sam' messageCount={30} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />

      {/* Status Component */}
      <Status status='loading' />
      {/* Children Props by data Types */}
      <Heading>Hello World!</Heading>
      {/* Children Props by react components */}
      <Oscar>
        <Heading>Hello there Leo de Carpio</Heading>
      </Oscar>

      {/* Optional props */}
      <Greet2 name='Sam' isLoggedIn={false} />

    </div>
  );
}

export default App;

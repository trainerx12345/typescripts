
import { Button } from './components/Button';
import { Container } from './components/Container';
import Greet from './components/Greet';
import Greet2 from './components/Greet2';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import PersonList from './components/PersonList';
import { Status } from './components/Status';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import ClassCounter from './components/Class/ClassCounter';
import { DomRef } from './components/useRef/DomRef';
import { MutableRef } from './components/useRef/MutableRef';
import { Private } from './components/Auth/Private';
import { Profile } from './components/Auth/Profile';
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
    }]

  return (
    <div className='App'>
      <Greet name='Sam' messageCount={30} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />

      {/* Status Component */}
      <Status status='loading' />
      {/* Children Props by data Types */}
      <Heading>Hello World!</Heading>
      {/* Children Props by react components */}
      <Oscar>
        <Heading>Hello there Leo de Carpio &nbsp; Heading.tsx and Oscar.tsx</Heading>
      </Oscar>

      {/* Optional props */}
      <Greet2 name='Sam' isLoggedIn={true} />



      {/* Event Props */}
      <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }} />

      <Input value='asdf' handleChange={(event) => console.log(event)} />

      {/* Styles Props */}
      <Container styles={{ border: '1px solid black', padding: '1rem', display: 'flex' }} />


      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <div>
        <p>This is a useRef Scenario</p>
        <div>
          <strong>
            <p>Mutable Ref Example</p>
          </strong>
          <MutableRef />
        </div>
        <div>
          <strong>
            <p>Dom Ref Example</p>
          </strong>
          <DomRef />
        </div>
      </div>

      <ClassCounter message='The value of the Counter is ' />

      <div>
        <h3>Simple Login and Profile Management</h3>
        <Private isLoggedIn={true} component={Profile} />
      </div>
    </div>


  );
}

export default App;

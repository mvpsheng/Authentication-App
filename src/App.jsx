import { useState } from 'react'
import './App.css'
import LoginForm from './components/Login'
import RegisterForm from './components/Register'
import PersonalInfo from './components/PersonalInfo'
export default function App() {

  const [component, setComponent] = useState('register');

  const handleSwitch = (data) => {
    setComponent(data);
  };

  return (
    <div className='mainapp'>
      {(() => {
        switch (component) {
          case 'register':
            return <RegisterForm onData={handleSwitch}  />;
          case 'login':
            return <LoginForm onData={handleSwitch} />;
          case 'personalinfo':
            return <PersonalInfo />;
          default:
            return null;
        }
      })()}
    </div>
  )
}

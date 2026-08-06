import { useState } from 'react';
import './App.css';
import Steps from './components/Steps/Steps';
import UserInfo from './components/UserInfo/UserInfo';

function App() {

  const [currentStep, setCurrentStep] = useState('Your info') 

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const [period, setPeriod] = useState('monthly')
  const [costArcade, setCostArcade] = useState(9)
  const [costAdvanced, setCostAdvanced] = useState(12)
  const [costPro, setCostPro] = useState(15)

  return (
    <div className="wrapper">
      <div className='contentBlock'>
        <Steps
          currentStep={currentStep}
        
          setCurrentStep={setCurrentStep}
        />

        <UserInfo
          currentStep={currentStep}
          name={name}
          email={email}
          phoneNumber={phoneNumber}
        
          setCurrentStep={setCurrentStep}
          setName={setName}
          setEmail={setEmail}
          setPhoneNumber={setPhoneNumber}
        />
      </div>

    </div>
  );
}

export default App;



import { useState } from 'react';
import './App.css';
import Steps from './components/Steps/Steps';
import UserInfo from './components/UserInfo/UserInfo';

function App() {

  const [currentStep, setCurrentStep] = useState('Your info') 

  return (
    <div className="wrapper">
      <div className='contentBlock'>
        <Steps
          currentStep={currentStep}

          setCurrentStep={setCurrentStep}
        />

        <UserInfo
          currentStep ={currentStep}

          setCurrentStep={setCurrentStep}
        />
      </div>
    </div>
  );
}

export default App;

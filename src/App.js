import { useState } from 'react';
import './App.css';
import Steps from './components/Steps/Steps';
import UserInfo from './components/UserInfo/UserInfo';

function App() {

  const [currentStep, setCurrentStep] = useState('Your info') 

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const [period, setPeriod] = useState('Monthly')
  const [costArcade, setCostArcade] = useState(9)
  const [costAdvanced, setCostAdvanced] = useState(12)
  const [costPro, setCostPro] = useState(15)

  const [choosePlan, setChoosePlan] = useState('')
  const [choosePlanCost, setChoosePlanCost] = useState()

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
          period={period}
          costArcade={costArcade}
          costAdvanced={costAdvanced}
          costPro={costPro}
          choosePlan={choosePlan}
          choosePlanCost={choosePlanCost}
        
          setCurrentStep={setCurrentStep}
          setName={setName}
          setEmail={setEmail}
          setPhoneNumber={setPhoneNumber}
          setPeriod={setPeriod}
          setCostArcade={setCostArcade}
          setCostAdvanced={setCostAdvanced}
          setCostPro={setCostPro}
          setChoosePlan={setChoosePlan}
          setChoosePlanCost={setChoosePlanCost}
        />
      </div>

    </div>
  );
}

export default App;



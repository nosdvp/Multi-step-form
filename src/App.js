import { useState } from 'react';
import './App.css';
import Steps from './components/Steps/Steps';
import UserInfo from './components/UserInfo/UserInfo';
import SupportModal from './components/supportModal/supportModal';

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

  const [openSupportModal, setOpenSupportModal] = useState(false)

  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('')

  const testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const testPhone = /^\+38\d{3}\d{3}\d{2}\d{2}$/.test(phoneNumber)

  return (
    <>
      <div className="wrapper">
        <div className='contentBlock'>
          <Steps
            currentStep={currentStep}
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            errorName={errorName}
            errorEmail={errorEmail}
            errorPhoneNumber={errorPhoneNumber}
            testEmail={testEmail}
            testPhone={testPhone}
            choosePlan={choosePlan}
          
            setCurrentStep={setCurrentStep}
            setName={setName}
            setEmail={setEmail}
            setPhoneNumber={setPhoneNumber}
            setErrorName={setErrorName}
            setErrorEmail={setErrorEmail}
            setErrorPhoneNumber={setErrorPhoneNumber}
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
            openSupportModal={openSupportModal}
            errorName={errorName}
            errorEmail={errorEmail}
            errorPhoneNumber={errorPhoneNumber}
            testEmail={testEmail}
            testPhone={testPhone}
          
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
            setOpenSupportModal={setOpenSupportModal}
            setErrorName={setErrorName}
            setErrorEmail={setErrorEmail}
            setErrorPhoneNumber={setErrorPhoneNumber}
          />
        </div>
        <SupportModal
          openSupportModal = {openSupportModal}
          name={name}
          email={email}

          setOpenSupportModal={setOpenSupportModal}
          setCurrentStep={setCurrentStep}
          setName={setName}
          setEmail={setEmail}
          setPhoneNumber={setPhoneNumber}
          setPeriod={setPeriod}
          setChoosePlan={setChoosePlan}
        />
      </div>
        
      
    </>
  );
}

export default App;



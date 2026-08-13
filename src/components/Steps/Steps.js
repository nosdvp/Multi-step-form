import React from 'react'
import './Steps.css'

const Steps = ({
    currentStep,
    name,
    email,
    phoneNumber,
    testEmail,
    testPhone,

    setCurrentStep,
    setName,
    setEmail,
    setPhoneNumber,
    setErrorName,
    setErrorEmail,
    setErrorPhoneNumber
}) => {

  const nextSteps = () => {
        if(name === ''){
            setErrorName('This field is required!')
            setCurrentStep('Your info')
        }else{
            setErrorName('')
        }

        if(email === ''){
            setErrorEmail('This field is required!')
            setCurrentStep('Your info')
        }else if(testEmail === false){
            setErrorEmail('Please enter correct email!')
            setCurrentStep('Your info')
        }else{
            setErrorEmail('')
        }

        if(phoneNumber === ''){
            setErrorPhoneNumber('This field is required!')
            setCurrentStep('Your info')
        }else if(testPhone === false){
            setErrorPhoneNumber('Please enter correct phone number!')
        }else{
            setErrorPhoneNumber('')
        }
        
        if(name !== '' && email !== '' && phoneNumber !== '' && testEmail === true && testPhone === true){
            setCurrentStep('Select plan')
        }
    }

  return (
    <div className='stepsWrapper'>
        <div className='stepsWrapper__firstStep' onClick={nextSteps}>
          <div className={currentStep === 'Your info' ? 'stepsWrapper__firstStep_circleActive' : 'stepsWrapper__firstStep_circleInactive'}>1</div>
          <div className='stepsWrapper__firstStep_descriptionStep'>
            <p>Step 1</p>
            <p>YOUR INFO</p>
          </div>
        </div>

        <div className='stepsWrapper__secondStep' onClick={nextSteps}>
          <div className={currentStep === 'Select plan' ? 'stepsWrapper__secondStep_circleActive' : 'stepsWrapper__secondStep_circleInactive'}>2</div>
          <div className='stepsWrapper__secondStep_descriptionStep'>
            <p>Step 2</p>
            <p>SELECT PLAN</p>
          </div>
        </div>

        <div className='stepsWrapper__thirdStep' onClick={nextSteps}>
          <div className={currentStep === 'Add-ons' ? 'stepsWrapper__thirdStep_circleActive' : 'stepsWrapper__thirdStep_circleInactive'}>3</div>
          <div className='stepsWrapper__thirdStep_descriptionStep'>
            <p>Step 3</p>
            <p>ADD-ONS</p>
          </div>
        </div>

        <div className='stepsWrapper__fourthStep' onClick={nextSteps}>
          <div className={currentStep === 'Summary' || currentStep === 'Finish' ? 'stepsWrapper__fourthStep_circleActive' : 'stepsWrapper__fourthStep_circleInactive'}>4</div>
          <div className='stepsWrapper__fourthStep_descriptionStep'>
            <p>Step 4</p>
            <p>SUMMARY</p>
          </div>
        </div>
    </div>
  )
}

export default Steps
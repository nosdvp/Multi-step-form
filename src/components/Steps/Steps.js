import React from 'react'
import './Steps.css'

const Steps = ({
    currentStep,

    setCurrentStep
}) => {

  return (
    <div className='stepsWrapper'>
        <div className='stepsWrapper__firstStep' onClick={() => setCurrentStep('Your info')}>
          <div className={currentStep === 'Your info' ? 'stepsWrapper__firstStep_circleActive' : 'stepsWrapper__firstStep_circleInactive'}>1</div>
          <div className='stepsWrapper__firstStep_descriptionStep'>
            <p>Step 1</p>
            <p>YOUR INFO</p>
          </div>
        </div>

        <div className='stepsWrapper__secondStep' onClick={() => setCurrentStep('Select plan')}>
          <div className={currentStep === 'Select plan' ? 'stepsWrapper__secondStep_circleActive' : 'stepsWrapper__secondStep_circleInactive'}>2</div>
          <div className='stepsWrapper__secondStep_descriptionStep'>
            <p>Step 2</p>
            <p>SELECT PLAN</p>
          </div>
        </div>

        <div className='stepsWrapper__thirdStep' onClick={() => setCurrentStep('Add-ons')}>
          <div className={currentStep === 'Add-ons' ? 'stepsWrapper__thirdStep_circleActive' : 'stepsWrapper__thirdStep_circleInactive'}>3</div>
          <div className='stepsWrapper__thirdStep_descriptionStep'>
            <p>Step 3</p>
            <p>ADD-ONS</p>
          </div>
        </div>

        <div className='stepsWrapper__fourthStep' onClick={() => setCurrentStep('Summary')}>
          <div className={currentStep === 'Summary' ? 'stepsWrapper__fourthStep_circleActive' : 'stepsWrapper__fourthStep_circleInactive'}>4</div>
          <div className='stepsWrapper__fourthStep_descriptionStep'>
            <p>Step 4</p>
            <p>SUMMARY</p>
          </div>
        </div>
    </div>
  )
}

export default Steps
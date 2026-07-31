import React from 'react'
import './Steps.css'

const Steps = ({
    currentStep
}) => {
  return (
    <div className='stepsWrapper'>
        <div className='stepsWrapper__firstStep'>
            <div className={currentStep === 'Your info' ? 'stepsWrapper__firstStep_countActive' : 'stepsWrapper__firstStep_countInactive'}>
                <p>1</p>
            </div>
            <div className='stepsWrapper__firstStep_descriptionSteps'>
                <p>Step 1</p>
                <p>YOUR INFO</p>
            </div>
        </div>

        <div className='stepsWrapper__secondStep'>
            <div className={currentStep === 'Select plan' ? 'stepsWrapper__secondStep_countActive' : 'stepsWrapper__secondStep_countInactive'}>
                <p>2</p>
            </div>
            <div className='stepsWrapper__secondStep_descriptionSteps'>
                <p>Step 2</p>
                <p>SELECT PLAN</p>
            </div>
        </div>

        <div className='stepsWrapper__thirdStep'>
            <div className={currentStep === 'Add-ons' ? 'stepsWrapper__thirdStep_countActive' : 'stepsWrapper__thirdStep_countInactive'}>
                <p>3</p>
            </div>
            <div className='stepsWrapper__thirdStep_descriptionSteps'>
                <p>Step 3</p>
                <p>ADD-ONS</p>
            </div>
        </div>

        <div className='stepsWrapper__fourthStep'>
            <div className={currentStep === 'Summary' ? 'stepsWrapper__fourthStep_countActive' : 'stepsWrapper__fourthStep_countInactive'}>
                <p>4</p>
            </div>
            <div className='stepsWrapper__fourthStep_descriptionSteps'>
                <p>Step 4</p>
                <p>SUMMARY</p>
            </div>
        </div>

        
    </div>
  )
}

export default Steps
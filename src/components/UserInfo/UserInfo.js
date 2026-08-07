import React, { useState } from 'react'
import './UserInfo.css'
import arcade from '../../img/icon-arcade.svg'
import advanced from '../../img/icon-advanced.svg'
import pro from '../../img/icon-pro.svg'
import finish from '../../img/icon-thank-you.svg'

const UserInfo = ({
    currentStep,
    name,
    email,
    phoneNumber,
    costArcade,
    costAdvanced,
    costPro,
    period,

    setCurrentStep,
    setName,
    setEmail,
    setPhoneNumber,
    setCostArcade,
    setCostAdvanced,
    setCostPro,
    setPeriod,

}) => {

    const [errorName, setErrorName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPhoneNumber, setErrorPhoneNumber] = useState('')

    const nextSteps = () => {
        if(name === '' && email === '' && phoneNumber === ''){
            setErrorName('This field is required!')
            setErrorEmail('This field is required!')
            setErrorPhoneNumber('This field is required!')
            setCurrentStep('Your info')
        }
        currentStep === 'Your info' && setCurrentStep('Select plan')
        currentStep === 'Select plan' && setCurrentStep('Add-ons')
        currentStep === 'Add-ons' && setCurrentStep('Summary')
        currentStep === 'Summary' && setCurrentStep('Finish')
    }

    const backSteps = () => {
        currentStep === 'Select plan' && setCurrentStep('Your info')
        currentStep === 'Add-ons' && setCurrentStep('Select plan')
        currentStep === 'Summary' && setCurrentStep('Add-ons')
    }

    const changePeriod = () => {
        const changePeriod = () => {
            if(period === 'monthly') {
                setPeriod('yearly')
                setCostArcade(90)
                setCostAdvanced(120)
                setCostPro(150)
            }else {
                setPeriod('monthly')
                setCostArcade(9)
                setCostAdvanced(12)
                setCostPro(15)
            }
        }
    }

  return (
    <>
        <div className='UIWrapper'>
            {currentStep !== 'Finish' ? (
                <>
                    <div className='UIWrapper__titleBlock'>
                        {currentStep === 'Your info' ? (
                            <>
                                <h1 className='UIWrapper__titleBlock_userInfoTitle'>Personal info</h1>
                                <p className='UIWrapper__titleBlock_userInfoSubTitle'>Please provide your name, email address, and phone number.</p>
                            </>
                        ) : currentStep === 'Select plan' ? (
                            <>
                                <h1 className='UIWrapper__titleBlock_selectPlanTitle'>Select your plan</h1>
                                <p className='UIWrapper__titleBlock_selectPlanSubTitle'>You have the option of monthly or yearly billing.</p>
                            </>
                        ) : currentStep === 'Add-ons' ? (
                            <>
                                <h1 className='UIWrapper__titleBlock_addOnsTitle'>Pick add-ons</h1>
                                <p className='UIWrapper__titleBlock_addOnsSubTitle'>Add-ons help enhance your gaming experience.</p>
                            </>
                        ) : currentStep === 'Summary' ? (
                            <>
                                <h1 className='UIWrapper__titleBlock_summaryTitle'>Finish up</h1>
                                <p className='UIWrapper__titleBlock_summarySubTitle'>Double-check everything looks OK before confirming.</p>
                            </>
                        ) : null}
                    </div>

                    <div className='UIWrapper__contentBlock'>
                        {currentStep === 'Your info' ? (
                            <>
                                <div className='UIWrapper__contentBlock_blockInputName'>
                                    <div className='UIWrapper__contentBlock_blockInputName_titleLine'>
                                        <p>Name</p>
                                        <p>{errorName}</p>
                                    </div>
                                    <input className='UIWrapper__contentBlock_blockInputName_input'
                                        placeholder='e.g. Stephen King'
                                        type='text'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    ></input>
                                </div>

                                <div className='UIWrapper__contentBlock_blockInputEmail'>
                                    <div className='UIWrapper__contentBlock_blockInputEmail_titleLine'>
                                        <p>Email Address</p>
                                        <p>{errorEmail}</p>
                                    </div>
                                    <input className='UIWrapper__contentBlock_blockInputEmail_input'
                                        placeholder='e.g. stephenKing@gmail.com'
                                        type='text'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    ></input>
                                </div>

                                <div className='UIWrapper__contentBlock_blockInputPhone'>
                                    <div className='UIWrapper__contentBlock_blockInputName_titleLine'>
                                        <p>Phone Number</p>
                                        <p>{errorPhoneNumber}</p>
                                    </div>
                                    <input className='UIWrapper__contentBlock_blockInputName_input'
                                        placeholder='e.g. +1 234 567 890'
                                        type="text"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    ></input>
                                </div>
                            </>
                        ) : currentStep === 'Select plan' ? (
                            <>
                                <div>{}</div>
                                <div className='UIWrapper__contentBlock_changePeriod'>
                                    <div className='UIWrapper__contentBlock_changePeriod_monthly'>Monthly</div>
                                    <div className='UIWrapper__contentBlock_changePeriod_toggle' onClick={changePeriod}>
                                        <div className={period === 'monthly' ? 'UIWrapper__contentBlock_changePeriod_toggle_circleMonthly' : 'UIWrapper__contentBlock_changePeriod_toggle_circleYearly'}> </div>
                                    </div>
                                    <div className='UIWrapper__contentBlock_changePeriod_yearly'>Yearly</div>
                                </div>
                            </>
                        ) : null}

                        <div className='UIWrapper__buttonDesktop'>
                            {currentStep === 'Your info' ? (
                                <>
                                    <button></button>
                                    <button className='UIWrapper__buttonDesktop_buttonNextStep' onClick={nextSteps}>Next Step</button>
                                </>
                            ) : currentStep === 'Select plan' ? (
                                <>
                                    <button className='UIWrapper__buttonDesktop_buttonBackStep' onClick={backSteps}>Go back</button>
                                    <button className='UIWrapper__buttonDesktop_buttonNextStep' onClick={nextSteps}>Next Step</button>
                                </>
                            ) : currentStep === 'Add-ons' ? (
                                <>
                                    <button className='UIWrapper__buttonDesktop_buttonBackStep' onClick={backSteps}>Go back</button>
                                    <button className='UIWrapper__buttonDesktop_buttonNextStep' onClick={nextSteps}>Next Step</button>
                                </>
                            ) : currentStep === 'Summary' ? (
                                <>
                                    <button className='UIWrapper__buttonDesktop_buttonBackStep' onClick={backSteps}>Go back</button>
                                    <button className='UIWrapper__buttonDesktop_buttonNextStep' onClick={nextSteps}>Next Step</button>
                                </>
                            ) : null}
                        </div>

                    </div>
                    
                </>
            ) : (
                <div className='UIWrapper__finish'>
                    <img src={finish}/>
                    <h1>Thank you!</h1>
                    <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at <span>support@loremgaming.com</span>.</p>
                </div>
            )}
            
        </div>

        <div className='buttonMobile'>
            {currentStep === 'Your info' ? (
                <>
                    <button></button>
                    <button className='buttonMobile__buttonNextStep' onClick={nextSteps}>Next Step</button>
                </>
            ) : currentStep === 'Select plan' ? (
                <>
                    <button className='buttonMobile__buttonBackStep' onClick={backSteps}>Go back</button>
                    <button className='buttonMobile__buttonNextStep' onClick={nextSteps}>Next Step</button>
                </>
            ) : currentStep === 'Add-ons' ? (
                <>
                    <button className='buttonMobile__buttonBackStep' onClick={backSteps}>Go back</button>
                    <button className='buttonMobile__buttonNextStep' onClick={nextSteps}>Next Step</button>
                </>
            ) : currentStep === 'Summary' ? (
                <>
                    <button className='buttonMobile__buttonBackStep' onClick={backSteps}>Go back</button>
                    <button className='buttonMobile__buttonNextStep' onClick={nextSteps}>Next Step</button>
                </>
            ) : null}
         </div>
    </>
    
  )
}

export default UserInfo
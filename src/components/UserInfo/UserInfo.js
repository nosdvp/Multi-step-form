import React, { useState } from 'react'
import './UserInfo.css'
import arcade from '../../img/icon-arcade.svg'
import advanced from '../../img/icon-advanced.svg'
import pro from '../../img/icon-pro.svg'

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

    const next = () => {
        if(name === '' && email === '' && phoneNumber === ''){
            setErrorName('This field is required!')
            setErrorEmail('This field is required!')
            setErrorPhoneNumber('This field is required!')
            setCurrentStep('Your info')
        }
        else{
            setCurrentStep('Select plan')
        }
    }

    console.log(name)

  return (
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
                    ) : null}

                    <div className='UIWrapper__button'>
                        {currentStep === 'Your info' ? (
                            <>
                                <button></button>
                                <button className='UIWrapper__button_buttonNextStep' onClick={next}>Next Step</button>
                            </>
                        ) : null}
                    </div>
                </div>
            </>
        ) : (
            <>
            
            </>
        )}
    </div>
  )
}

export default UserInfo
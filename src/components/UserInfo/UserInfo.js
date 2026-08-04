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

  return (
    <div className='userInfoWrapper'>
        {currentStep === 'Your info' ? (
            <>
                <h1>Personal info</h1>
                <p className='userInfoWrapper__subtitle'>Please provide you name, email address, and phone number</p>

                <div className='userInfoWrapper__nameInputBlock'>
                    <div className='userInfoWrapper__nameInputBlock_title'>
                        <p>Name</p>
                        <p>{errorName}</p>
                    </div>
                    <input
                        className={errorName === '' ? 'input' : 'errorInput'}
                        placeholder='e.g. Stephen King'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='userInfoWrapper__emailInputBlock'>
                    <div className='userInfoWrapper__emailInputBlock_title'>
                        <p>Email Address</p>
                        <p>{errorPhoneNumber}</p>
                    </div>
                    <input
                        className={errorEmail === '' ? 'input' : 'errorInput'}
                        placeholder='e.g. stephenking@gmail.com'
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='userInfoWrapper__phoneInputBlock'>
                    <div className='userInfoWrapper__phoneInputBlock_title'>
                        <p>Phone Number</p>
                        <p>{errorEmail}</p>
                    </div>
                    <input
                        className={errorPhoneNumber === '' ? 'input' : 'errorInput'}
                        placeholder='e.g. +1 234 567 890'
                        type='number'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>

                <div className='userInfoWrapper__btnBlock'>
                    <button onClick={next}>Next Step</button>
                </div>
            </>
        ) : currentStep === 'Select plan' ? (
            <>
                <h1>Select your plan</h1>
                <p className='userInfoWrapper__subtitle'>Please provide you name, email address, and phone number</p>
                
                <div className='userInfoWrapper__blockPlan'>
                    <div className='userInfoWrapper__blockPlan_firstPlan'>
                        <div className='userInfoWrapper__blockPlan_firstPlan_imgBlock'>
                            <img
                                src={arcade}
                            />
                        </div>
                        <div className='userInfoWrapper__blockPlan_firstPlan_textBlock'>
                            <p>Arcade</p>
                            {period === 'monthly' ? <p>${costArcade}/mo</p> : <p>${costArcade}/year</p>}
                        </div>
                    </div>
                    
                    <div className='userInfoWrapper__blockPlan_secondPlan'>
                        <div className='userInfoWrapper__blockPlan_secondPlan_imgBlock'>
                            <img
                                src={advanced}                            
                            />
                        </div>
                        <div className='userInfoWrapper__blockPlan_secondPlan_textBlock'>
                            <p>Advanced</p>
                            {period === 'monthly' ? <p>${costAdvanced}/mo</p> : <p>${costAdvanced}/year</p>}
                        </div>
                    </div>

                    <div className='userInfoWrapper__blockPlan_thirdPlan'>
                        <div className='userInfoWrapper__blockPlan_thirdPlan_imgBlock'>
                            <img
                                src={pro}
                            />
                        </div>
                        <div className='userInfoWrapper__blockPlan_thirdPlan_textBlock'>
                            <p>Pro</p>
                            {period === 'monthly' ? <p>${costPro}/mo</p> : <p>${costPro}/year</p>}
                        </div>
                    </div>
                </div>

                <div className='userInfoWrapper__periodPlan'>
                    <p>Monthly</p>
                    <div></div>
                    <p>Yearly</p>
                </div>

                <div className='userInfoWrapper__btnBlock'>
                    <button>Go back</button>
                    <button>Next Step</button>
                </div>
            </>
        ) : null}
    </div>
  )
}

export default UserInfo
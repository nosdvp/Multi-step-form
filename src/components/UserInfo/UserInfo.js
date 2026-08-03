import React, { useState } from 'react'
import './UserInfo.css'

const UserInfo = ({
    currentStep,

    setCurrentStep
}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

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
        ) : null}
    </div>
  )
}

export default UserInfo
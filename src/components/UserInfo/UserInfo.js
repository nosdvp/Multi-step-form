import React, { useState } from 'react'
import './UserInfo.css'

const UserInfo = ({
    currentStep,

    setCurrentStep
}) => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

    const [errorName, setErrorName] = useState('')
    const [errorNumber, setErrorNumber] = useState('')
    const [errorEmail, setErrorEmail] = useState('')

    const next = () => {
        setCurrentStep('Select plan')
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
                    <input></input>
                </div>

                <div>
                    <div>
                        <p>Email Address</p>
                        <p>{errorNumber}</p>
                    </div>
                    <input></input>
                </div>

                <div>
                    <div>
                        <p>Phone Number</p>
                        <p>{errorEmail}</p>
                    </div>
                    <input></input>
                </div>

                <div>
                    <button onClick={next}>Next Step</button>
                </div>
            </>
        ) : null}
    </div>
  )
}

export default UserInfo
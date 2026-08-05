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
    <div>
        
    </div>
  )
}

export default UserInfo
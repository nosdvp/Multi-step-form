import React, { useState } from 'react'
import './UserInfo.css'
import arcade from '../../img/icon-arcade.svg'
import advanced from '../../img/icon-advanced.svg'
import pro from '../../img/icon-pro.svg'
import finish from '../../img/icon-thank-you.svg'
import check from '../../img/icon-checkmark.svg'

const UserInfo = ({
    currentStep,
    name,
    email,
    phoneNumber,
    costArcade,
    costAdvanced,
    costPro,
    period,
    choosePlan,
    choosePlanCost,
    errorName,
    errorEmail,
    errorPhoneNumber,
    testEmail,
    testPhone,

    setCurrentStep,
    setName,
    setEmail,
    setPhoneNumber,
    setCostArcade,
    setCostAdvanced,
    setCostPro,
    setPeriod,
    setChoosePlan,
    setChoosePlanCost,
    setOpenSupportModal,
    setErrorName,
    setErrorEmail,
    setErrorPhoneNumber,
}) => {

    const [serviceOne, setServiceOne] = useState(1)
    const [serviceTwo, setServiceTwo] = useState(2)
    const [serviceThree, setServiceThree] = useState(2)

    const [saveAddService, setSaveAddService] = useState([])

    const [supportModal, setSupportModal] = useState(false)

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
        if(period === 'Monthly'){
            setPeriod('Yearly')
            setCostArcade(90)
            setCostAdvanced(120)
            setCostPro(150)
            setServiceOne(10)
            setServiceTwo(20)
            setServiceThree(20)
        }else{
            setPeriod('Monthly')
            setCostArcade(9)
            setCostAdvanced(12)
            setCostPro(15)
            setServiceOne(1)
            setServiceTwo(2)
            setServiceThree(2)
        }
    }

    const choicePlan = (name, cost, period) => {
        setChoosePlan(name)
        setChoosePlanCost(cost)
    }

    const choiceAddService = (name, cost) => {
        setSaveAddService(prev => {
            const exist = prev.some(item => item.name === name)

            if(exist){
                return prev.filter(item => item.name !== name)
            }

            return[
                ...prev,
                {name, cost}
            ]
        })


    }

    const changePlan = () => {
        setCurrentStep('Select plan')
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
                                        placeholder='e.g. +380972222222'
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
                                <div className='UIWrapper__contentBlock_planBlock'>
                                    <div className={choosePlan === 'Arcade' ? 'UIWrapper__contentBlock_planBlock_arcadeActive' : 'UIWrapper__contentBlock_planBlock_arcadeInactive'} 
                                         onClick={() => choicePlan('Arcade', costArcade, period)}
                                    >
                                        <img src={arcade}/>
                                        <p className='UIWrapper__contentBlock_planBlock_arcadeInactive_title'>Arcade</p>
                                        <p className='UIWrapper__contentBlock_planBlock_arcadeInactive_cost'>${costArcade}/{period === 'Monthly' ? <span>mo</span> : <span>yr</span>}</p>
                                        {period === 'Yearly' && <p className='UIWrapper__contentBlock_planBlock_arcadeInactive_cutPrice'>2 months free</p>}
                                    </div>

                                    <div className={choosePlan === 'Advanced' ? 'UIWrapper__contentBlock_planBlock_advancedActive' : 'UIWrapper__contentBlock_planBlock_advancedInactive'} 
                                         onClick={() => choicePlan('Advanced', costAdvanced, period)}
                                    >
                                        <img src={advanced}/>
                                        <p className='UIWrapper__contentBlock_planBlock_advancedInactive_title'>Advanced</p>
                                        <p className='UIWrapper__contentBlock_planBlock_advancedInactive_cost'>${costAdvanced}/{period === 'Monthly' ? <span>mo</span> : <span>yr</span>}</p>
                                        {period === 'Yearly' && <p className='UIWrapper__contentBlock_planBlock_advancedInactive_cutPrice'>2 months free</p>}
                                    </div>

                                    <div className={choosePlan === 'Pro' ? 'UIWrapper__contentBlock_planBlock_proActive' : 'UIWrapper__contentBlock_planBlock_proInactive'} 
                                         onClick={() => choicePlan('Pro', costPro, period)}
                                    >
                                        <img src={pro}/>
                                        <p className='UIWrapper__contentBlock_planBlock_proInactive_title'>Pro</p>
                                        <p className='UIWrapper__contentBlock_planBlock_proInactive_cost'>${costPro}/{period === 'Monthly' ? <span>mo</span> : <span>yr</span>}</p>
                                        {period === 'Yearly' && <p className='UIWrapper__contentBlock_planBlock_proInactive_cutPrice'>2 months free</p>}
                                    </div>
                                </div>
                                <div className='UIWrapper__contentBlock_changePeriod'>
                                    <div className='UIWrapper__contentBlock_changePeriod_monthly'>Monthly</div>
                                    <div className='UIWrapper__contentBlock_changePeriod_toggle' onClick={changePeriod}>
                                        <div className={period === 'Monthly' ? 'UIWrapper__contentBlock_changePeriod_toggle_circleMonthly' : 'UIWrapper__contentBlock_changePeriod_toggle_circleYearly'}> </div>
                                    </div>
                                    <div className='UIWrapper__contentBlock_changePeriod_yearly'>Yearly</div>
                                </div>
                            </>
                        ) : currentStep === 'Add-ons' ? (
                                <div className='UIWrapper__contentBlock_selectPlan'>

                                    <div 
                                        className={saveAddService.some(item => item.name === 'Online service') ? 
                                                'UIWrapper__contentBlock_selectPlan_firstItemActive' : 
                                                'UIWrapper__contentBlock_selectPlan_firstItemInactive'
                                            }
                                        onClick={() => choiceAddService('Online service', serviceOne)}
                                    >    
                                        <div className='UIWrapper__contentBlock_selectPlan_firstItemInactive_description'>
                                            <div className={saveAddService.some(item => item.name === 'Online service') ? 
                                                            'UIWrapper__contentBlock_selectPlan_firstItemActive_description_checkBoxActive' : 
                                                            'UIWrapper__contentBlock_selectPlan_firstItemInactive_description_checkBoxInactive'
                                            }>
                                                {saveAddService.some(item => item.name === 'Online service') && (<img src={check}/>)}
                                            </div>
                                            <div className='UIWrapper__contentBlock_selectPlan_firstItemInactive_description_nameItem'>
                                                <p>Online service</p>
                                                <p>Access to multiplayer game</p>
                                            </div>
                                        </div>
                                        <div className='UIWrapper__contentBlock_selectPlan_firstItemInactive_cost'>+${serviceOne}/{period === 'Monthly' ? <span>mo</span> : <span>yr</span>}</div>
                                    </div>

                                    <div 
                                        className={saveAddService.some(item => item.name === 'Larger storage') ? 
                                                'UIWrapper__contentBlock_selectPlan_secondItemActive' : 
                                                'UIWrapper__contentBlock_selectPlan_secondItemInactive'
                                            }
                                        onClick={() => choiceAddService('Larger storage', serviceTwo)}
                                    >    
                                        <div className='UIWrapper__contentBlock_selectPlan_secondItemInactive_description'>
                                            <div className={saveAddService.some(item => item.name === 'Larger storage') ? 
                                                            'UIWrapper__contentBlock_selectPlan_secondItemActive_description_checkBoxActive' : 
                                                            'UIWrapper__contentBlock_selectPlan_secondItemInactive_description_checkBoxInactive'
                                            }>
                                                {saveAddService.some(item => item.name === 'Larger storage') && (<img src={check}/>)}
                                            </div>
                                            <div className='UIWrapper__contentBlock_selectPlan_secondItemInactive_description_nameItem'>
                                                <p>Larger storage</p>
                                                <p>Extra 1TB on cloud save</p>
                                            </div>
                                        </div>
                                        <div className='UIWrapper__contentBlock_selectPlan_secondItemInactive_cost'>+${serviceTwo}/{period === 'Monthly' ? <span>mo</span> : <span>yr</span>}</div>
                                    </div>

                                    <div 
                                        className={saveAddService.some(item => item.name === 'Custom profile') ? 
                                                'UIWrapper__contentBlock_selectPlan_thirdItemActive' : 
                                                'UIWrapper__contentBlock_selectPlan_thirdItemInactive'
                                            }
                                        onClick={() => choiceAddService('Custom profile', serviceThree)}
                                    >    
                                        <div className='UIWrapper__contentBlock_selectPlan_thirdItemInactive_description'>
                                            <div className={saveAddService.some(item => item.name === 'Custom profile') ? 
                                                            'UIWrapper__contentBlock_selectPlan_thirdItemActive_description_checkBoxActive' : 
                                                            'UIWrapper__contentBlock_selectPlan_thirdItemInactive_description_checkBoxInactive'
                                            }>
                                                {saveAddService.some(item => item.name === 'Custom profile') && (<img src={check}/>)}
                                            </div>
                                            <div className='UIWrapper__contentBlock_selectPlan_thirdItemInactive_description_nameItem'>
                                                <p>Customizable profile</p>
                                                <p>Custom theme on your profile</p>
                                            </div>
                                        </div>
                                        <div className='UIWrapper__contentBlock_selectPlan_thirdItemInactive_cost'>+${serviceThree}/{period === 'Monthly' ? <span>mo</span> : <span>yr</span>}</div>
                                    </div>

                                </div>
                        ) : currentStep === 'Summary' ? (
                            <>
                                <div className='UIWrapper__contentBlock_summaryBlock'>
                                    <div className='UIWrapper__contentBlock_summaryBlock_nameUser'>
                                        <p>Your name: <span onClick={() => setCurrentStep('Your info')}>{name}</span></p>
                                        <p>Your contact email: <span onClick={() => setCurrentStep('Your info')}>{email}</span></p>
                                        <p>Your contact phone: <span onClick={() => setCurrentStep('Your info')}>{phoneNumber}</span></p>
                                    </div>
                                    <div className='UIWrapper__contentBlock_summaryBlock_border'></div>
                                    <div className='UIWrapper__contentBlock_summaryBlock_plan'>
                                        <div className='UIWrapper__contentBlock_summaryBlock_plan_decript'>
                                            <p>{choosePlan} ({period})</p>
                                            <button onClick={changePlan}>Change</button>
                                        </div>
                                        <div className='UIWrapper__contentBlock_summaryBlock_plan_cost'>${choosePlanCost}/{period === 'Monthly' ? <span>mo</span> : <span>yr</span>}</div>
                                                                    
                                    </div>
                                    <div className='UIWrapper__contentBlock_summaryBlock_border'></div>

                                    <div className='UIWrapper__contentBlock_summaryBlock_addService'>
                                        {saveAddService.map((item) => (
                                            <div className='UIWrapper__contentBlock_summaryBlock_addService_blockServ'>
                                                <p onClick={() => setCurrentStep('Add-ons')}>{item.name}</p>
                                                <p>+${item.cost}/{period === 'Monthly' ? <span>mo</span> : <span>yr</span>}</p>
                                            </div>
                                        ))}
                                    </div>

                                    
                                </div>
                                <div className='UIWrapper__contentBlock_total'>
                                    <p>Total (per {period.toLowerCase()})</p>
                                    <p>+${choosePlanCost + saveAddService.reduce((startItem, currentItem) => startItem + currentItem.cost, 0)}/{period === "Monthly" ? <span>mo</span> : <span>yr</span>}</p>
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
                    <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at <span onClick={() => setOpenSupportModal(true)}>support@loremgaming.com</span>.</p>
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
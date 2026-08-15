import { useState } from 'react';
import './supportModal.css';

function SupportModal({
    openSupportModal,
    name,
    email,

    setOpenSupportModal,
    setCurrentStep,
    setName,
    setEmail,
    setPhoneNumber,
    setPeriod,
    setChoosePlan
}) {

    const [contentModal, setContentModal] = useState('content');
    const [pass, setPass] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [select, setSelect] = useState('Select topic request');
    const [saveTextRequest, setSaveTextRequest] = useState('')

    const topic = [
        'Change gaming plan',
        'Change additional option',
        'Refund',
    ];

    const sendRequest = () => {
        //setContentModal('success');
        const sumbol ='1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        const length = 6;
        let newPass = '';
        for (let i = 0; i < length; i++) {
            const getNumber = Math.floor(sumbol.length * Math.random());
            newPass += sumbol[getNumber];
        }
        setPass(newPass);
        setSaveTextRequest('Please text you problem for we can recolve them')
    };

    const openModal = () => {
        setIsOpen(prev => !prev);
    };

    const chooseTopic = (option) => {
        setSelect(option);
        setIsOpen(false);
    };

    const closeModal = () => {
        setOpenSupportModal(false);
        setIsOpen(false);
    };

    const finishRequest = () => {
        setOpenSupportModal(false);
        setCurrentStep('Your info');
        setContentModal('content');
        setIsOpen(false);
        setName('')
        setEmail('')
        setPhoneNumber('')
        setSelect('Select topic request')
        setSaveTextRequest('')
        setPeriod('Monthly')
        setChoosePlan('')
    };

    return (
        <>
            {openSupportModal && (
                <div className='supportModal'>
                    <div className='supportModal__window'>
                        {contentModal === 'content' ? (
                            <>
                                <h1>Request for support</h1>
                                <p>Your name:<span>{name}</span></p>
                                <p>Your contact email:<span>{email}</span></p>
                                <div className='supportModal__window_selectWrapper'>
                                    <div className={isOpen
                                                ? 'supportModal__window_selectButtonActive'
                                                : 'supportModal__window_selectButtonInactive'
                                        }
                                        onClick={openModal}
                                    >
                                        <span>{select}</span>
                                        <span className='supportModal__window_arrow'>
                                            {isOpen ? '▲' : '▼'}
                                        </span>
                                    </div>
                                    {isOpen && (
                                        <div className='supportModal__window_options'>

                                            {topic.map((option) => (
                                                <div
                                                    className='supportModal__window_options_option'
                                                    key={option}
                                                    onClick={() => chooseTopic(option)}
                                                >
                                                    {option}
                                                </div>
                                            ))}

                                        </div>
                                    )}
                                </div>
                                <div className='supportModal__window_contentBlock'>
                                    <textarea 
                                        placeholder={saveTextRequest === '' ? {saveTextRequest} : 'Please text your request'}
                                        value={saveTextRequest}
                                        onChange={(e) => setSaveTextRequest(e.target.value)}
                                    />
                                </div>
                                <div className='supportModal__window_nav'>
                                    <button onClick={closeModal}>Close</button>
                                    <button onClick={sendRequest}>Send</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h1>Your request successfully received</h1>
                                <p>Your request number: <span>{pass}</span></p>
                                <p>Your request topic: <span>{select}</span></p>
                                <p>Your request text: <span>{saveTextRequest}</span></p>
                                <button className='supportModal__window_successButton' onClick={finishRequest}>Close</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default SupportModal;
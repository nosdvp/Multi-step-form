import { useState } from 'react';
import './supportModal.css';

function SupportModal({
    
    openSupportModal,
    name,
    email,

    setOpenSupportModal,
    setCurrentStep
}) {

    const [contentModal, setContentModal] = useState('content')
    const [pass, setPass] = useState()

    const sendRequest = () => {
        setContentModal(true)

        let sumbol = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
        let length = 6
        let pass = ''

        for(let i = 0; i < length; i++){
            let getNumber = Math.floor(sumbol.length * Math.random())
            setPass(pass += sumbol[getNumber])
        }
    }


  return (
        <>
            {openSupportModal && (
                <div className='supportModal'>
                    <div className='supportModal__window'>
                        {contentModal === 'content' ? (
                            <>
                                <h1>Request for support</h1>
                                <p>Your name: <span>{name}</span></p>
                                <p>Your contact email: <span>{email}</span></p>
                                <textarea></textarea>
                                <div>
                                    <button onClick={() => setOpenSupportModal(false)}>Close</button>
                                    <button onClick={sendRequest}>Send</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h1>Your request successful receive</h1>
                                <p>Your request number: {pass}</p>
                                <button onClick={() => (setOpenSupportModal(false), setCurrentStep('Your info'), setContentModal('content'))}>Close</button>
                            </>
                        )}
                    </div>
                    
                </div>
                
            )}
        </>
  );
}

export default SupportModal;



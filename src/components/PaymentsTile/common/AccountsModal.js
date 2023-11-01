import React, { useState } from 'react';
import './AccountsModal.css'

function AccountsModal(props) {
    const [isModalOpen, setModalOpen] = useState(true);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            {isModalOpen && (
                <div className="custom-modal">
                    <div className="modal-content">
                        <button onClick={closeModal}>Close Modal</button>
                        {props.accounts.map(acct => <li>
                            {acct.accountNumber}
                        </li>)}
                    </div>
                </div>)
            }
        </div>
    );
}

export default AccountsModal;

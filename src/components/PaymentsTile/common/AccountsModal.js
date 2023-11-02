import React, { useEffect, useState } from 'react';
import './AccountsModal.css'
import { BsCurrencyRupee } from 'react-icons/bs'
import { AiOutlineRight } from 'react-icons/ai'

import { AccountNameDiv, CustomModal, FirstColumn, ImgDiv, ListItem, StyledLi } from './AccountModalStyled';

function AccountsModal(props) {
    const [isModalOpen, setModalOpen] = useState(true);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    useEffect(() => {
        setModalOpen(true)
    }, [])
    const clickHandler = (id) => {
        setModalOpen(false)
        props.selectedAccount(id)
    }
    return (
        <div>
            {isModalOpen && (
                <CustomModal>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0px 1rem' }}>
                        <p>{props.which} (Select account)</p>
                        <button onClick={closeModal} >X</button>
                    </div>
                    {props.accounts.map(acct => <StyledLi key={acct.id} onClick={() => { clickHandler(acct.id) }}>
                        <ListItem>
                            <FirstColumn>
                                <div>
                                    <ImgDiv src={acct.icon} alt='icon' />
                                </div>
                                <AccountNameDiv>
                                    <p>{acct.accountName}</p>
                                    <p>{acct.accountNumber}</p>
                                </AccountNameDiv>
                            </FirstColumn>
                            <FirstColumn>
                                <div>
                                    <p>Funds</p>
                                    <p><BsCurrencyRupee />{acct.funds}</p>
                                </div>
                            </FirstColumn>
                        </ListItem>
                        <hr></hr>
                    </StyledLi>

                    )}
                </CustomModal>)
            }
        </div>
    );
}

export default AccountsModal;
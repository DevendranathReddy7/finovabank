import React, { useEffect, useState } from 'react';
import './AccountsModal.css'
import { BsCurrencyRupee } from 'react-icons/bs'

import { AccountNameDiv, CustomModal, FirstColumn, ImgDiv, ListItem, StyledLi } from './AccountModalStyled';
import { usePayments } from '../../../context/paymentContext';
import { PrimaryButton } from './StyledPaymnetInput';

function AccountsModal(props) {
    const { accounts } = usePayments()
    const [isModalOpen, setModalOpen] = useState(true);

    // const openModal = () => {
    //     setModalOpen(true);
    // };

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
                        <PrimaryButton cls onClick={closeModal} >X</PrimaryButton>
                    </div>
                    <hr />
                    {accounts?.map(acct => <StyledLi key={acct.id} onClick={() => { clickHandler(acct.id) }}>
                        {acct.id === props.acc[0]?.id ? '' : <>
                            <ListItem disable={acct.id === props.acc[0]?.id} >
                                <FirstColumn>
                                    <div>
                                        <ImgDiv src={acct.icon} alt='icon' />
                                    </div>
                                    <AccountNameDiv>
                                        <p>{acct.accountName}</p>
                                        <p style={{ marginTop: '-10px' }}>{acct.accountNumber}</p>
                                    </AccountNameDiv>
                                </FirstColumn>
                                <FirstColumn>
                                    <div>
                                        <p>Funds</p>
                                        <p style={{ marginTop: '-10px' }}><BsCurrencyRupee />{acct.funds}</p>
                                    </div>
                                </FirstColumn>

                            </ListItem>
                            <hr />
                        </>}


                    </StyledLi>

                    )}
                </CustomModal>)
            }
        </div>
    );
}

export default AccountsModal;

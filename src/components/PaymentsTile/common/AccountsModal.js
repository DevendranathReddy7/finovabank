import React, { useState } from 'react';
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

    return (
        <div>
            {isModalOpen && (
                <CustomModal>
                    <button onClick={closeModal} style={{ display: 'flex', justifyContent: 'flex-end' }}>X</button>
                    {props.accounts.map(acct => <StyledLi key={acct.accountNumber}>
                        <ListItem>
                            <FirstColumn>
                                <div>
                                    <ImgDiv src={acct.icon} alt='icon' />
                                </div>
                                <AccountNameDiv>
                                    <h4>{acct.accountName}</h4>
                                    <h3>{acct.accountNumber}</h3>
                                </AccountNameDiv>
                            </FirstColumn>
                            <FirstColumn>
                                <div>
                                    <h4>Funds</h4>
                                    <h3><BsCurrencyRupee />{acct.funds}</h3>

                                </div>

                                <div>
                                    <AiOutlineRight />
                                </div>
                            </FirstColumn>
                        </ListItem>
                    </StyledLi>
                    )}
                </CustomModal>)
            }
        </div>
    );
}

export default AccountsModal;

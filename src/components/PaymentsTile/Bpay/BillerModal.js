import React, { useEffect, useState } from 'react';
import { AccountNameDiv, CustomModal, FirstColumn, ListItem, StyledLi } from '../common/AccountModalStyled';
import { PrimaryButton } from '../common/PaymentScreen/StyledPaymnetInput';


function BillerModal(props) {
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
        props.clickedBiller(id)
    }
    return (
        <div>
            {isModalOpen && (
                <CustomModal>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0px 1rem' }}>
                        <p>Select a Biller</p>
                        <PrimaryButton cls onClick={closeModal} >X</PrimaryButton>
                    </div>
                    <hr />
                    {props.billers?.map(biller =>
                        <StyledLi key={biller.id} onClick={() => { clickHandler(biller.id) }}>
                            <FirstColumn>
                                <AccountNameDiv>
                                    <p><strong>{biller.billerName}</strong></p>
                                    <p style={{ marginTop: '-10px' }}>Code: {biller.billerCode}; <span>Ref: {biller.referenceNo}</span></p>
                                </AccountNameDiv>
                            </FirstColumn>
                            <hr />

                        </StyledLi>
                    )}
                </CustomModal>)
            }
        </div>
    );
}

export default BillerModal;

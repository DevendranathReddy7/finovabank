import React, { useEffect, useState } from 'react';
import { AccountNameDiv, CustomModal, FirstColumn, StyledLi } from '../common/AccountModalStyled';
import { PrimaryButton } from '../common/PaymentScreen/StyledPaymnetInput';
import Loader from '../../common/Loader';
import { useNavigate } from 'react-router-dom';


function BillerModal(props) {
    const [isModalOpen, setModalOpen] = useState(true);
    const navigate = useNavigate()
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
                props.newSelectedBiller === 'undefined' ? <Loader /> :
                    <CustomModal>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0px 1rem' }}>
                            <p>Select a Biller</p>
                            <div>
                                <PrimaryButton onClick={navigate('/add-biller')}>Add a Biller</PrimaryButton>
                                <PrimaryButton cls onClick={closeModal} >X</PrimaryButton>
                            </div>

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

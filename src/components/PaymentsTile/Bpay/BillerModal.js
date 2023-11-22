import React, { useEffect, useState } from 'react';
import { AccountNameDiv, CustomModal, FirstColumn, StyledLi } from '../common/AccountModalStyled';
import { PrimaryButton } from '../common/StyledPaymnetInput';
import Loader from '../../common/Loader';
import { useNavigate } from 'react-router-dom';
import { StyledFilter } from './StyledAddBiller';


function BillerModal(props) {
    const [isModalOpen, setModalOpen] = useState(true);
    const [billers, setBillers] = useState(props.billers)
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
    const addHandler = () => {
        navigate('/add-biller')
    }
    const filterHandler = (searchValue) => {
        const searchResults = props.billers.filter(bill => JSON.stringify(bill.billerCode).includes(searchValue))
        setBillers(searchResults)
    }
    return (
        <div>
            {isModalOpen && (
                props.newSelectedBiller === 'undefined' ? <Loader /> :
                    <CustomModal>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0px 1rem' }}>
                            <p>Select a Biller</p>
                            <PrimaryButton cls onClick={closeModal} >X</PrimaryButton>
                        </div>
                        <hr />
                        <div>
                            <div>
                                <StyledFilter type='number' placeholder='Search for Biller Code' onChange={(e) => filterHandler(e.target.value)} />
                                <PrimaryButton btn onClick={addHandler}>Add New Biller</PrimaryButton>
                            </div>
                        </div>
                        {billers.length < 1 && <center><strong>No Billers Found</strong></center>}
                        {billers?.map(biller =>
                            <StyledLi key={biller.id} onClick={() => { clickHandler(biller.id) }}>
                                <FirstColumn>
                                    <AccountNameDiv>
                                        <p style={{ marginTop: '-15px' }}><strong>{biller.billerName}</strong></p>
                                        <p style={{ marginTop: '-15px' }}>Biller Code: {biller.billerCode}; <span>Ref: {biller.referenceNo}</span></p>
                                    </AccountNameDiv>
                                </FirstColumn>
                                <hr style={{ marginTop: '-5px' }} />
                            </StyledLi>
                        )}
                    </CustomModal>)
            }
        </div>
    );
}

export default BillerModal;

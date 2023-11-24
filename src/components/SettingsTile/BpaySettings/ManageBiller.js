import { useNavigate } from "react-router-dom"
import { usePayments } from "../../../context/paymentContext"
import NavTileBarLayout from "../../AppLayout/NavTileBarLayout"
import { BillerColumn, Button, StyledFilter, Styledli } from "../../PaymentsTile/Bpay/StyledAddBiller"
import { AccountNameDiv } from "../../PaymentsTile/common/AccountModalStyled"
import { PrimaryButton } from "../../PaymentsTile/common/StyledPaymnetInput"

const ManageBiller = () => {
    const { billers, setBillers, setDeleteThisBiller } = usePayments()
    const navigate = useNavigate()
    const addHandler = () => {
        navigate('/add-biller')
    }
    const filterHandler = (searchValue) => {
        const searchResults = billers.filter(bill => JSON.stringify(bill.billerCode).includes(searchValue))
        //console.log(searchResults)
        setBillers(searchResults)
    }
    const deleteHandle = (id) => {
        setDeleteThisBiller(id)
        //console.log(id)
        // const updatedBillers = billers.filter(bill => bill.id !== id)
        // setBillers(updatedBillers)
        //console.log(updatedBillers)
    }
    return (
        <div>
            <NavTileBarLayout />
            <>
                <div>
                    <StyledFilter manageBiller type='number' placeholder='Search for Biller Code' onChange={(e) => filterHandler(e.target.value)} />
                    <PrimaryButton btn onClick={addHandler}>Add New Biller</PrimaryButton>
                </div>
                {billers.length < 1 && <center><strong>No Billers Found</strong></center>}
                {billers?.map(biller =>
                    <>
                        <Styledli key={biller.id} >
                            <BillerColumn>
                                <AccountNameDiv>
                                    <p style={{ marginTop: '5px' }}><strong>{biller.billerName}</strong></p>
                                    <p style={{ marginTop: '-15px' }}>Biller Code: {biller.billerCode}; <span>Ref: {biller.referenceNo}</span></p>
                                </AccountNameDiv>
                            </BillerColumn>
                            <div>
                                <Button>Edit</Button>
                                <Button onClick={() => deleteHandle(biller.id)}>Delete</Button>
                            </div>
                        </Styledli>
                        <hr style={{ marginLeft: ' 15rem', marginRight: '15rem' }} />
                    </>
                )}
            </>
        </div>
    )
}
export default ManageBiller
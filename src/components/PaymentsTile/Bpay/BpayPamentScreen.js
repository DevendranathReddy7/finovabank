import { useEffect, useState } from "react"
import { StyledAccount1stColumn, StyledPaymentLi, StyledSelectedAccountDiv } from "../common/PaymentScreen/StyledPaymnetInput"
import { getBiller } from "../../../supabase/apiAccounts"
import BillerModal from "./BillerModal"

const BpayPamentScreen = () => {
    const [billers, setBillers] = useState({})
    const [newSelectedBiller, setNewSelectedBiller] = useState('')
    const [toClicked, setToClicked] = useState(false)
    useEffect(() => {
        const getBillers = async () => {
            const data = await getBiller()
            setBillers(data)
        }
        getBillers()
    }, [])

    const toggleContainer = () => {
        setToClicked(true)

    }
    const selectedBiller = (id) => {
        setToClicked(false)
        const biller = billers.filter(bill => bill.id === id)
        setNewSelectedBiller(biller)
    }
    return (
        <div>
            <StyledPaymentLi onClick={() => toggleContainer('to')} >{
                (newSelectedBiller[0] !== undefined) ?
                    <StyledSelectedAccountDiv>
                        {/* <StyledAccount1stColumn> */}
                        <div>
                            <p style={{ marginLeft: '20px' }}><strong>{newSelectedBiller[0].billerName}</strong></p>
                            <p style={{ marginTop: '-12px', marginLeft: '20px' }}>Code: {newSelectedBiller[0].billerCode}; <span>ref: {newSelectedBiller[0].referenceNo}</span></p>
                        </div>
                        {/* </StyledAccount1stColumn> */}
                        {/* <StyledAccount1stColumn>
                        </StyledAccount1stColumn> */}
                    </StyledSelectedAccountDiv> : <p style={{ margin: '20px 10px' }}>Select a Biller</p>
            }</StyledPaymentLi>
            {toClicked && <BillerModal billers={billers} clickedBiller={selectedBiller} />}
        </div>
    )
}
export default BpayPamentScreen
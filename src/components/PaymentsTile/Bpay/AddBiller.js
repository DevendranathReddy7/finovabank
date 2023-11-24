import { useState } from "react"
import NavTileBarLayout from "../../AppLayout/NavTileBarLayout"
import { StyledLi } from "../common/AccountModalStyled"
import { Label, PaymentWrapper, PrimaryButton } from "../common/StyledPaymnetInput"
import { StyledAdBillerInput } from "./StyledAddBiller"
import { addBillers } from "../../../supabase/apiAccounts"
import { useNavigate } from "react-router-dom"

const AddBiller = () => {
    const navigate = useNavigate()
    const [newBiller, setNewBiller] = useState({ billerName: '', billerCode: '', ref: '' })
    const submitHandler = (e) => {
        e.preventDefault()
        addBillers(newBiller)
        navigate(-1)
    }

    const inputHandle = (field, value) => {
        switch (field) {
            case 'name':
                setNewBiller(prev => ({ ...prev, billerName: value }))
                break;
            case 'code':
                setNewBiller(prev => ({ ...prev, billerCode: value }))
                break;
            case 'ref':
                setNewBiller(prev => ({ ...prev, ref: value }))
                break;
            default:
                break
        }
    }
    return (
        <div>
            <NavTileBarLayout />
            <PaymentWrapper>
                <form onSubmit={submitHandler}>
                    <StyledLi>
                        <Label>Biller Name</Label>
                        <StyledAdBillerInput onChange={(e) => inputHandle('name', e.target.value)} />
                    </StyledLi>

                    <StyledLi>
                        <Label>Biller Code</Label>
                        <StyledAdBillerInput onChange={(e) => inputHandle('code', e.target.value)} />

                    </StyledLi>
                    <StyledLi>
                        <Label>Biller Reference</Label>
                        <StyledAdBillerInput onChange={(e) => inputHandle('ref', e.target.value)} />

                    </StyledLi>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: '3px', marginRight: '4rem' }}>
                        <PrimaryButton>Save</PrimaryButton>
                    </div>
                </form>
            </PaymentWrapper >
        </div>
    )
}
export default AddBiller
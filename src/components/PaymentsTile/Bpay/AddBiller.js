import { useEffect, useState } from "react"
import NavTileBarLayout from "../../AppLayout/NavTileBarLayout"
import { StyledLi } from "../common/AccountModalStyled"
import { Label, PaymentWrapper, PrimaryButton } from "../common/StyledPaymnetInput"
import { StyledAdBillerInput } from "./StyledAddBiller"
import { addBillers, updateBiller } from "../../../supabase/apiAccounts"
import { useNavigate } from "react-router-dom"
import { usePayments } from "../../../context/paymentContext"

const AddBiller = () => {
    const navigate = useNavigate()
    const [newBiller, setNewBiller] = useState({ billerName: '', billerCode: '', ref: '' })
    const [editBiller, setEditBiller] = useState({})
    const { billers, editThisBiller, setEditThisBiller } = usePayments()
    const submitHandler = (e) => {
        e.preventDefault()
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
    console.log(editBiller)
    useEffect(() => {
        const editFn = async () => {
            const edit = await billers?.filter(bill => bill.id === editThisBiller)
            setEditBiller(edit)
        }
        editFn()
    }, [editThisBiller])
    const addHandle = () => {
        addBillers(newBiller)
    }
    const updateHandle = () => {
        const update = async () => {
            await billers.map(bill => bill.id === editThisBiller ? updateBiller({ billerName: newBiller.billerName, billerCode: newBiller.billerCode, ref: newBiller.ref }, editThisBiller) : '')
            setEditBiller({})
            setEditThisBiller('')
        }
        update()
    }
    return (
        <div>
            <NavTileBarLayout />
            <PaymentWrapper>
                <form onSubmit={submitHandler}>
                    <StyledLi>
                        <Label>Biller Name</Label>
                        <StyledAdBillerInput onChange={(e) => inputHandle('name', e.target.value)} defaultValue={editBiller[0]?.billerName} />
                    </StyledLi>

                    <StyledLi>
                        <Label>Biller Code</Label>
                        <StyledAdBillerInput onChange={(e) => inputHandle('code', e.target.value)} defaultValue={editBiller[0]?.billerCode} />

                    </StyledLi>
                    <StyledLi>
                        <Label>Biller Reference</Label>
                        <StyledAdBillerInput onChange={(e) => inputHandle('ref', e.target.value)} defaultValue={editBiller[0]?.referenceNo} />

                    </StyledLi>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: '3px', marginRight: '4rem' }}>
                        {Object.keys(editBiller).length === 1 ? <PrimaryButton onClick={updateHandle}>Update</PrimaryButton> : <PrimaryButton onClick={addHandle}>Save</PrimaryButton>}

                    </div>
                </form>
            </PaymentWrapper >
        </div>
    )
}
export default AddBiller
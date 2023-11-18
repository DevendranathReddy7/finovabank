import NavTileBarLayout from "../../AppLayout/NavTileBarLayout"
import { Label, PaymentWrapper, PrimaryButton, StyledAccount1stColumn, StyledPaymentLi, StyledSelectedAccountDiv } from "../common/PaymentScreen/StyledPaymnetInput"

const AddBiller = () => {
    const toggleContainer = () => {

    }
    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <NavTileBarLayout />
            <PaymentWrapper>
                <form onSubmit={submitHandler}>
                    <div>
                        <Label>Biller Name</Label>
                        <StyledPaymentLi onClick={() => toggleContainer('from')} >{
                            <StyledSelectedAccountDiv>
                                <StyledAccount1stColumn>
                                    <div>
                                        <p >{ }</p>
                                        <p style={{ marginTop: '-12px' }}>{ }</p>
                                    </div>
                                </StyledAccount1stColumn>
                                <StyledAccount1stColumn>
                                    <div>
                                        <p></p>
                                        <p style={{ marginTop: '-12px' }}>{ }</p>
                                    </div>
                                </StyledAccount1stColumn>
                            </StyledSelectedAccountDiv>
                        }</StyledPaymentLi>

                    </div>
                    <div>
                        <Label>Biller Code</Label>
                        <StyledPaymentLi onClick={() => toggleContainer('to')} >{
                            <StyledSelectedAccountDiv>
                                <StyledAccount1stColumn>

                                    <div>
                                        <p>{ }</p>
                                        <p style={{ marginTop: '-12px' }}>{ }</p>
                                    </div>
                                </StyledAccount1stColumn>
                                <StyledAccount1stColumn>
                                    <div>
                                        <p></p>
                                        <p style={{ marginTop: '-12px' }}>{ }</p>
                                    </div>
                                </StyledAccount1stColumn>
                            </StyledSelectedAccountDiv>
                        }</StyledPaymentLi>
                    </div>
                    <div>
                        <Label>Biller Reference</Label>
                        <StyledPaymentLi onClick={() => toggleContainer('to')} >{
                            <StyledSelectedAccountDiv>
                                <StyledAccount1stColumn>

                                    <div>
                                        <p>{ }</p>
                                        <p style={{ marginTop: '-12px' }}>{ }</p>
                                    </div>
                                </StyledAccount1stColumn>
                                <StyledAccount1stColumn>
                                    <div>
                                        <p></p>
                                        <p style={{ marginTop: '-12px' }}>{ }</p>
                                    </div>
                                </StyledAccount1stColumn>
                            </StyledSelectedAccountDiv>
                        }</StyledPaymentLi>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: '3px', marginRight: '4rem' }}>
                        <PrimaryButton>Save</PrimaryButton>
                    </div>
                </form>
            </PaymentWrapper >
        </div>
    )
}
export default AddBiller
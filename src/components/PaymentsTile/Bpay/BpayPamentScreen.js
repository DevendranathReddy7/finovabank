import { ImgDiv, StyledAccount1stColumn, StyledPaymentLi, StyledSelectedAccountDiv } from "../common/PaymentScreen/StyledPaymnetInput"

const BpayPamentScreen = () => {

    const toggleContainer = () => {

    }
    return (
        <div>
            <StyledPaymentLi onClick={() => toggleContainer('to')} >{
                ("selectedToAccount" === '') ?
                    <StyledSelectedAccountDiv>
                        <StyledAccount1stColumn>
                            <ImgDiv src={''} />
                            <div>
                                <p>{ }</p>
                                <p style={{ marginTop: '-12px' }}>{ }</p>
                            </div>
                        </StyledAccount1stColumn>
                        <StyledAccount1stColumn>
                        </StyledAccount1stColumn>
                    </StyledSelectedAccountDiv> : <p style={{ margin: '20px 10px' }}>Select a Biller</p>
            }</StyledPaymentLi>
        </div>
    )
}
export default BpayPamentScreen
import { StyledFirstColumn, StyledLi, StyledOuterLi } from "./StyledAccounts"
import { AiOutlineRight } from 'react-icons/ai'
import { BsCurrencyRupee } from 'react-icons/bs'
import './Account.css'
import Loader from "../common/Loader";
import { H3 } from "../PaymentsTile/common/StyledPaymnetInput";
import { usePayments } from "../../context/paymentContext";

const Accounts = () => {
    const { accounts } = usePayments()

    return (
        <div>
            {accounts?.length === 0 && <Loader />}
            {accounts?.length > 0 ? <H3>Your Account's</H3> : ''}
            {accounts.code === '22P02' ? <Loader /> :
                <>{accounts?.map(account => <StyledLi key={account.id}>
                    <StyledOuterLi>
                        <StyledFirstColumn>
                            <div className="icon">
                                {/* <FaCcMastercard size='50px' /> */}
                                <img src={account.icon} alt='icon' />
                            </div>
                            <div className="accountName-container firstColum">
                                <p className="acctName">{account.accountName}</p>
                                <div>
                                    <p style={{ marginTop: '-10px' }}>{account.accountNumber}</p>
                                </div>
                            </div>
                        </StyledFirstColumn>

                        <div className="balance-funds-container">
                            <div className="balance-container">
                                <p className="acctName">Funds</p>
                                <div>
                                    <p style={{ marginTop: '-10px' }}><BsCurrencyRupee />{account.funds}</p>
                                </div>
                            </div>
                        </div>

                        <div className="arrow">
                            <AiOutlineRight />
                        </div>

                    </StyledOuterLi>
                </StyledLi>)
                }</>}
        </div >
    )
}
export default Accounts
import { StyledFirstColumn, StyledLi, StyledOuterLi } from "./StyledAccounts"
import { AiOutlineRight } from 'react-icons/ai'
import { BsCurrencyRupee } from 'react-icons/bs'
import './Account.css'
import { useEffect, useState } from "react";
import { getAccounts } from "../../supabase/apiAccounts";
import Loader from "../common/Loader";
import { useAuth } from "../../context/LoginContext";
import { H3 } from "../PaymentsTile/common/PaymentScreen/StyledPaymnetInput";

const Accounts = () => {
    const [accounts, setAccounts] = useState([])
    const { currentUser } = useAuth()
    useEffect(() => {
        getAccounts(currentUser.userId).then((data) => setAccounts(data))
    }, [currentUser.userId])
    return (

        <div>
            {accounts.length === 0 && <Loader />}
            {accounts.length > 0 ? <H3>Your Account's</H3> : ''}

            {accounts.map(account => <StyledLi key={account.id}>
                <StyledOuterLi>
                    <StyledFirstColumn>
                        <div className="icon">
                            {/* <FaCcMastercard size='50px' /> */}
                            <img src={account.icon} alt='icon' />
                        </div>
                        <div className="accountName-container firstColum">
                            <p className="acctName">{account.accountName}</p>
                            <div>
                                <p>{account.accountNumber}</p>
                            </div>
                        </div>
                    </StyledFirstColumn>

                    <div className="balance-funds-container">
                        <div className="balance-container">
                            <p className="acctName">Balance</p>
                            <div>
                                <p><BsCurrencyRupee />{account.balance}</p>
                            </div>
                        </div>
                        <div className="balance-container">
                            <p className="acctName">Funds</p>
                            <div>
                                <p><BsCurrencyRupee />{account.funds}</p>
                            </div>
                        </div>
                    </div>

                    <div className="arrow">
                        <AiOutlineRight />
                    </div>

                </StyledOuterLi>
            </StyledLi>)}
        </div>
    )
}
export default Accounts
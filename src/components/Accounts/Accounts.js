import { StyledAccountsLi, StyledFirstColumn, StyledInnerAccountsLi, StyledLi, StyledOuterLi } from "./StyledAccounts"
import { FaCcMastercard } from "react-icons/fa";
import { AiOutlineRight } from 'react-icons/ai'
import { BsCurrencyRupee } from 'react-icons/bs'

import './Account.css'
const accounts = [{
    id: 1,
    accountName: 'ChequeAccount',
    balance: 500,
    funds: 450,
    accountNumber: 564219032,
    icon: ''
}, {
    id: 2,
    accountName: 'CreditAccount',
    balance: 50,
    funds: 40,
    accountNumber: 987654321123,
    icon: ''
}, {
    id: 3,
    accountName: 'SavingsAccount',
    balance: 5000,
    funds: 4000,
    accountNumber: 1237654789,
    icon: ''
}]
const Accounts = () => {
    return (
        <div>
            {accounts.map(account => <StyledLi key={account.id}>
                <StyledOuterLi>


                    <StyledFirstColumn>
                        <div className="icon">
                            <FaCcMastercard size='40px' />
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
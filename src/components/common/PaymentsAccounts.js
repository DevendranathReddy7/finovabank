const PaymentsAccounts = (props) => {
    console.log(props)
    return (
        <div>
            <ul>
                <li>{props.account.accountNumber}</li>
            </ul>
        </div>
    )
}
export default PaymentsAccounts
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getAccounts } from "../supabase/apiAccounts";
import { useContext } from "react";
import { useAuth } from "./LoginContext";

const PaymentContext = createContext()

const PaymentProvider = ({ children }) => {
    const [accounts, setAccounts] = useState([])
    const [selectedFromAccount, setSelectedFromAccount] = useState('')
    const [selectedToAccount, setSelectedToAccount] = useState('')
    const [enteredAmount, setEnteredAmount] = useState(0)
    const [paymentData, setPaymentData] = useState({})
    const { currentUser } = useAuth()
    useEffect(() => {
        const getAcct = async () => {
            const data = await getAccounts(currentUser.userId)
            setAccounts(data)
        }
        getAcct()
    }, [currentUser.userId])
    useEffect(() => {
        setPaymentData({ selectedFromAccount, selectedToAccount, enteredAmount })
    }, [selectedFromAccount, selectedToAccount, enteredAmount])

    return <PaymentContext.Provider value={{ accounts, paymentData, setPaymentData, setSelectedFromAccount, setSelectedToAccount, setEnteredAmount }}>{children}</PaymentContext.Provider>

}

function usePayments() {
    const context = useContext(PaymentContext);
    if (context === undefined) {
        throw new Error("AuthContext was used outside of AuthProvider")
    }
    return context
}

export { PaymentProvider, usePayments, PaymentContext }
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getAccounts } from "../supabase/apiAccounts";
import { useContext } from "react";
import { useAuth } from "./LoginContext";

const PaymentContext = createContext()

const PaymentProvider = ({ children }) => {
    const [accounts, setAccounts] = useState([])
    const [paymentData, setPaymentData] = useState({})
    const { currentUser } = useAuth()
    useEffect(() => {
        const getAcct = async () => {
            const data = await getAccounts(currentUser.userId)
            setAccounts(data)
        }
        getAcct()
    }, [currentUser.userId])
    return <PaymentContext.Provider value={{ accounts, paymentData, setPaymentData }}>{children}</PaymentContext.Provider>

}

function usePayments() {
    const context = useContext(PaymentContext);
    if (context === undefined) {
        throw new Error("PaymentContext was used outside of PaymentProvider")
    }
    return context
}

export { PaymentProvider, usePayments, PaymentContext }
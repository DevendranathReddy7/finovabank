import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { deleteBiller, getAccounts, getBiller } from "../supabase/apiAccounts";
import { useContext } from "react";
import { useAuth } from "./LoginContext";

const PaymentContext = createContext()

const PaymentProvider = ({ children }) => {
    const [accounts, setAccounts] = useState([])
    const [billers, setBillers] = useState({})
    const [deleteThisBiller, setDeleteThisBiller] = useState('')
    const [paymentData, setPaymentData] = useState({})
    const { currentUser } = useAuth()

    useEffect(() => {
        const getAcct = async () => {
            const data = await getAccounts(currentUser.userId)
            setAccounts(data)
        }
        getAcct()
    }, [currentUser.userId])


    //Object.values(billers).length

    useEffect(() => {
        const getBillers = async () => {
            await deleteBiller(deleteThisBiller)
        }
        getBillers()
    }, [deleteThisBiller])

    useEffect(() => {
        const getBillers = async () => {
            const data = await getBiller()
            setBillers(data)
        }
        getBillers()
    }, [deleteThisBiller, Object.keys(billers).length])
    console.log(Object.keys(billers).length)
    return <PaymentContext.Provider value={{ accounts, paymentData, setPaymentData, billers, setBillers, setDeleteThisBiller }}>{children}</PaymentContext.Provider>

}

function usePayments() {
    const context = useContext(PaymentContext);
    if (context === undefined) {
        throw new Error("PaymentContext was used outside of PaymentProvider")
    }
    return context
}

export { PaymentProvider, usePayments, PaymentContext }
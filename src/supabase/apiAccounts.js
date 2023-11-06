import Error from "../components/common/Error"
import supabase from "./Supabase"

export const getAccounts = async (userid) => {
    const { data, error } = await supabase
        .from('Users')
        .select('*').eq('userid', userid)
    if (error) {
        return error
        // throw new Error('invalid user')
    }
    return data
}
export const updateRows = async (userid, paymentData) => {
    // let newFunds = paymentData.selectedFromAccount[0].funds
    const { data, error } = await supabase
        .from('Users')
        .update({ 'funds': paymentData.selectedFromAccount[0].funds })
        .eq('userid', userid).eq('accountNumber', paymentData.selectedFromAccount[0].accountNumber)
        .select()
    return data
}

export const getPaymnetTypes = async (userid) => {

    let { data, error } = await supabase
        .from('PaymnetCapabailites')
        .select('*').eq('userId', userid)

    if (error) {
        <Error err={error}></Error>
        throw new Error('No Paymnets Found')
    }
    return data
}

